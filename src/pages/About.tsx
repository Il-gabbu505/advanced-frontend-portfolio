import { motion } from 'framer-motion';
import Page from '../components/Page';
export default function About() {
  return (
    <Page>
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="about-card"
      >
        <h2>About Me</h2>

        <p className="about-text">
          I am a front-end developer specialising in building scalable,
          accessible and high-performance React applications.
        </p>

        <ul className="skills">
          <li>React & TypeScript</li>
          <li>Redux Toolkit</li>
          <li>Performance Optimisation</li>
          <li>Accessibility (WCAG)</li>
        </ul>
      </motion.section>
    </Page>
  );
}
