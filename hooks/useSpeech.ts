import { useState, useEffect, useCallback, useRef } from "react";

interface UseSpeechOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
}

interface UseSpeechReturn {
  speak: (text: string) => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  isSpeaking: boolean;
  isPaused: boolean;
  isSupported: boolean;
}

// Limpia el texto de markdown y código para una mejor lectura
function cleanTextForSpeech(text: string): string {
  return (
    text
      // Remover bloques de código multilínea (estos sí se omiten)
      .replace(/```[\s\S]*?```/g, "")
      // Mantener contenido de código inline, solo quitar los backticks
      .replace(/`([^`]+)`/g, "$1")
      // Remover markdown de formato
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/__([^_]+)__/g, "$1")
      .replace(/_([^_]+)_/g, "$1")
      // Remover headers markdown
      .replace(/#{1,6}\s/g, "")
      // Remover links markdown
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remover bullets y números de lista
      .replace(/^[\s]*[-*+]\s/gm, "")
      .replace(/^[\s]*\d+\.\s/gm, "")
      // Limpiar espacios múltiples
      .replace(/\s+/g, " ")
      .trim()
  );
}

// Prioridad de voces de mejor calidad (mayor número = mayor prioridad)
function getVoicePriority(voice: SpeechSynthesisVoice): number {
  const name = voice.name.toLowerCase();

  // Voces de Google (Chrome) - muy naturales
  if (name.includes("google")) return 100;

  // Voces de Microsoft (Edge) - muy naturales
  if (name.includes("microsoft") || name.includes("azure")) return 90;

  // Voces premium de Apple (macOS/iOS)
  const applePremiuNames = [
    "mónica",
    "monica",
    "jorge",
    "paulina",
    "diego",
    "marisol",
  ];
  if (applePremiuNames.some((n) => name.includes(n))) return 85;

  // Voces de red (no locales) suelen ser de mejor calidad
  if (!voice.localService) return 70;

  // Voces locales estándar
  if (voice.localService) return 50;

  return 30;
}

function selectBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const spanishVoices = voices.filter((v) => v.lang.startsWith("es"));

  if (spanishVoices.length === 0) return null;

  // Ordenar por prioridad y elegir la mejor
  return spanishVoices.sort((a, b) => getVoicePriority(b) - getVoicePriority(a))[0];
}

export function useSpeech(options: UseSpeechOptions = {}): UseSpeechReturn {
  const { lang = "es-ES", rate = 0.95, pitch = 1 } = options;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const supported =
      typeof window !== "undefined" && "speechSynthesis" in window;
    setIsSupported(supported);

    if (!supported) return;

    // Cargar voces (pueden cargarse de forma asíncrona)
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    loadVoices();

    // En algunos navegadores las voces se cargan después
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported) return;

      // Cancelar cualquier reproducción anterior
      window.speechSynthesis.cancel();

      const cleanedText = cleanTextForSpeech(text);
      const utterance = new SpeechSynthesisUtterance(cleanedText);

      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Seleccionar la mejor voz disponible
      const bestVoice = selectBestVoice(voices.length > 0 ? voices : window.speechSynthesis.getVoices());
      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSupported, lang, rate, pitch, voices]
  );

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, [isSupported]);

  const pause = useCallback(() => {
    if (!isSupported || !isSpeaking) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isSupported, isSpeaking]);

  const resume = useCallback(() => {
    if (!isSupported || !isPaused) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [isSupported, isPaused]);

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
    isPaused,
    isSupported,
  };
}
