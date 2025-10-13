import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Playground from "@/components/sections/Playground";
import CTA from "@/components/sections/CTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HispanoLang",
    description:
      "Lenguaje de programación moderno diseñado para desarrolladores de habla hispana",
    url: "https://hispanolang.com",
    inLanguage: "es",
    author: {
      "@type": "Organization",
      name: "HispanoLang Team",
    },
    publisher: {
      "@type": "Organization",
      name: "HispanoLang",
      logo: {
        "@type": "ImageObject",
        url: "https://hispanolang.com/hl-main-logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://hispanolang.com/documentacion?seccion={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HispanoLang",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    description:
      "Lenguaje de programación en español con sintaxis clara y moderna",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "100",
    },
  };

  const educationalJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Aprende HispanoLang",
    description:
      "Curso completo para aprender programación en español con HispanoLang",
    provider: {
      "@type": "Person",
      name: "Nicolas Vazquez",
      sameAs: "https://github.com/nicvazquezdev",
    },
    inLanguage: "es",
    coursePrerequisites: "Ninguno",
    educationalLevel: "Principiante a Avanzado",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalJsonLd) }}
      />
      <div className="min-h-screen relative overflow-hidden">
        {/* Fondo animado con partículas */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid de fondo */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <Header />
        <main className="relative z-10">
          <Hero />
          <Features />
          <Playground />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
