import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from './projectsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loader from '../../components/Loader';

export default function ProjectsList() {
  const dispatch = useAppDispatch();
  const { list, status } = useAppSelector(state => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;

  return (
    <section>
      <h2>Projects</h2>

      {list.map(project => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={project.id}>View Details</Link>
        </article>
      ))}
    </section>
  );
}
