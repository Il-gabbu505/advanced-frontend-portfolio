import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = useSelector((s: RootState) =>
    s.projects.list.find(p => p.id === projectId)
  );

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <article>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.live}>Live Demo</a> 
    </article>
  );
}
