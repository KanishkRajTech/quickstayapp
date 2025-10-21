"use client";
import { NavBar } from "./components/nav-bar";
import { HeroBanner } from "./components/hero-banner";
import { ComfortSection } from "./components/ComfortSection";
import { FacilitiesSection } from "./components/FacilitiesSection";
import Footer from "@/component/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="min-h-dvh bg-background text-foreground">
        <NavBar />
        <HeroBanner />
        <ComfortSection />
        <FacilitiesSection />
        <Footer />
      </main>
    </>
  );
}
