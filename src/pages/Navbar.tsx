import { NavLink } from 'react-router-dom';
import ThemeToggle from '../features/theme/ThemeToggle';

export default function Navbar() {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <ThemeToggle />
    </nav>
  );
}
