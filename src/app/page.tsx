import About from "@/components/About";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import SideProjects from "@/components/SideProjects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <SideProjects />
        <Activities />
        <Contact />
      </main>
    </>
  );
}
