import ThemeToggle from "./ThemeToggle";
import CmdKButton from "./CmdKButton";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" aria-label="Home">
          <span className="dot" aria-hidden />
          <span>om.denkar</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work" className="nav-link">Work</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="nav-actions">
          <CmdKButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
