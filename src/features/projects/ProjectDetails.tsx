import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import Page from '../../components/Page';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = useSelector((s: RootState) =>
    s.projects.list.find(p => p.id === projectId)
  );

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <Page>
      <motion.article
        className="project-details"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>{project.title}</h2>

        <p className="muted">{project.description}</p>

        <div className="project-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
           Live Demo
          </a>
        </div>
      </motion.article>
    </Page>
  );
}
