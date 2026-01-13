import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import DocNavLinks from "@/components/docs/DocNavLinks";
import { getDocContent, getDocSlugs } from "@/lib/mdx";

// Lista de secciones (esto eventualmente vendrá de los archivos)
const sections = [
  { id: "variables", title: "Variables" },
  { id: "constantes", title: "Constantes" },
  { id: "comentarios", title: "Comentarios" },
  { id: "tipos-datos", title: "Tipos de Datos" },
  { id: "metodos-strings", title: "Métodos de Strings" },
  { id: "template-strings", title: "Template Strings" },
  { id: "operadores", title: "Operadores" },
  { id: "condicionales", title: "Condicionales" },
  { id: "elegir-caso", title: "Elegir/Caso" },
  { id: "bucles", title: "Bucles" },
  { id: "funciones", title: "Funciones" },
  { id: "funciones-flecha", title: "Funciones Flecha" },
  { id: "funciones-matematicas", title: "Funciones Matemáticas" },
  { id: "conversion-tipos", title: "Conversión de Tipos" },
  { id: "metodos-numericos", title: "Métodos Numéricos" },
  { id: "listas", title: "Listas" },
  { id: "objetos", title: "Objetos" },
  { id: "bucles-avanzados", title: "Bucles Avanzados" },
  { id: "clases", title: "Clases" },
  { id: "herencia", title: "Herencia" },
  { id: "manejo-errores", title: "Manejo de Errores" },
];

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const content = await getDocContent(slug);

  if (!content) {
    notFound();
  }

  const currentIndex = sections.findIndex((s) => s.id === slug);
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="min-h-screen relative">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <Section
          background="light"
          badge={{ emoji: "📚", text: "Referencia Completa" }}
          title="Documentación de"
          titleGradient=" HispanoLang"
          description="Referencia completa de sintaxis, comandos y características del lenguaje"
          className="overflow-visible"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4 w-full">
              <nav className="sticky top-24">
                <DocNavLinks sections={sections} activeSection={slug} />
              </nav>
            </aside>

            {/* Main Content */}
            <article className="lg:w-3/4 w-full min-h-screen">
              <Card variant="glass" className="bg-slate-800/80 backdrop-blur-sm">
                <div className="md:p-6 doc-content">
                  {content}
                </div>

                {/* Navegación */}
                {(previousSection || nextSection) && (
                  <div className="mt-12 pt-8 border-t border-slate-700 md:px-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex-1">
                        {previousSection && (
                          <Link href={`/documentacion/${previousSection.id}`}>
                            <Button variant="outline" className="w-full justify-start" prev>
                              {previousSection.title}
                            </Button>
                          </Link>
                        )}
                      </div>
                      <div className="flex-1">
                        {nextSection && (
                          <Link href={`/documentacion/${nextSection.id}`}>
                            <Button variant="outline" className="w-full justify-end" next>
                              {nextSection.title}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </article>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

