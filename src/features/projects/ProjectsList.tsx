import { useEffect, useMemo, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects, setFilter } from './projectsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loader from '../../components/Loader';
import {motion } from 'framer-motion';

function ProjectsList() {
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
      project.tags?.includes(filter)
    );
  }, [list, filter]);

  const showAll = useCallback(() => {
    dispatch(setFilter('all'));
  }, [dispatch]);

  const showReact = useCallback(() => {
   dispatch(setFilter('react'));
  }, [dispatch]);

  const showRedux = useCallback(() => {
   dispatch(setFilter('redux'));
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <p role="alert">Failed to load projects.</p>;
  }

  return (
    <section className="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>

      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={showAll}>All</button>
        <button className={filter === 'react' ? 'active' : ''} onClick={showReact}>React</button>
        <button className={filter === 'redux' ? 'active' : ''} onClick={showRedux}>Redux</button>
      </div>

      <div className="project-grid">
        {filteredProjects.length === 0 && (
          <p>No projects found.</p>
        )}

         {filteredProjects.map(project => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`/images/${project.image}`}
              alt={`${project.title} preview`}
              loading="lazy"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.id}>View Details →</Link>
            </div>
          </motion.article>
        ))}

      </div>
      
    </section>
  );
}
export default memo(ProjectsList);
