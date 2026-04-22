import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Work from "@/components/Work";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";
import KonamiWatcher from "@/components/KonamiWatcher";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Work />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <CommandPalette />
      <KonamiWatcher />
      <RevealObserver />
    </>
  );
}
