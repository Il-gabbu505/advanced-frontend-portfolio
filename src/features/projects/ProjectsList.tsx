import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects, setFilter } from './projectsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loader from '../../components/Loader';

export default function ProjectsList() {
  const dispatch = useAppDispatch();
  const { list, status, filter } = useAppSelector(state => state.projects);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return list;
    return list.filter(project =>
      project.tags.includes(filter)
    );
  }, [list, filter]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <p role="alert">Failed to load projects.</p>;
  }

  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('react'))}>React</button>
        <button onClick={() => dispatch(setFilter('redux'))}>Redux</button>
      </div>
      
      {filteredProjects.length === 0 && (
        <p>No projects found.</p>
      )}

      {filteredProjects.map(project => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={project.id}>View Details</Link>
        </article>
      ))}
    </section>
  );
}
