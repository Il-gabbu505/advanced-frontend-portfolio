import { motion } from 'framer-motion';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, My name is <span style={{ color: 'var(--accent)' }}>Gabriel Micallef</span>
      </motion.h1>

      <motion.p
        style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: 600 }}
      >
        Front-end developer specialising in React & Redux Toolkit
      </motion.p>
    </Page>
  );
}
