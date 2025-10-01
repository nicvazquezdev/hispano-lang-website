import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CodeExample from "@/components/sections/CodeExample";
import CTA from "@/components/sections/CTA";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <CodeExample />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
