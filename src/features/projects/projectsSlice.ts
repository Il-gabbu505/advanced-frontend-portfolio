import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Project {
  id: string;
  title: string;
  description: string;
  live: string;
  tags?: string[];
}

interface ProjectsState {
  list: Project[];
  status: 'idle' | 'loading' | 'success' | 'error';
}

export const fetchProjects = createAsyncThunk<Project[]>(
  'projects/fetch',
  async () => {
    const data = await import('../../data/projects.json');
    return data.default as Project[];
  }
);

const initialState: ProjectsState = {
  list: [],
  status: 'idle',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      });
  },
});

export default projectsSlice.reducer;
