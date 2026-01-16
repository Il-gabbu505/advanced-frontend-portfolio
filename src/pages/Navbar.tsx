import { NavLink } from 'react-router-dom';
import ThemeToggle from '../features/theme/ThemeToggle';

export default function Navbar() {
  return (
    <nav role="navigation" aria-label="Main navigation" style={styles.nav}>
      <div style={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <ThemeToggle />
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    borderBottom: '1px solid var(--card)',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
};
