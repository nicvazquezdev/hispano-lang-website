import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Playground from "@/components/sections/Playground";
import CTA from "@/components/sections/CTA";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Playground />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
