import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import ProjectTypes from "@/components/ProjectTypes";
import ProjectGallery from "@/components/ProjectGallery";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Principles />
        <Services />
        <ProjectTypes />
        <ProjectGallery />
        <Process />
        <CTA />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  );
}
