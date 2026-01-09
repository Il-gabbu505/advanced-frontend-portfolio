import { Routes, Route } from 'react-router-dom';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectDetails from '../features/projects/ProjectDetails';

export default function Projects() {
  return (
    <main>
      <Routes>
        <Route index element={<ProjectsList />} />
        <Route path=":projectId" element={<ProjectDetails />} />
      </Routes>
    </main>
  );
}
