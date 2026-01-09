import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: string;
  title: string;
  description: string;
  live: string;
  image: string;
  tags: string[];
}

interface ProjectsState {
  list: Project[];
  status: 'idle' | 'loading' | 'success' | 'error';
  filter: 'all' | 'react' | 'redux';
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
  filter: 'all',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<ProjectsState['filter']>) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProjects.rejected, state => {
        state.status = 'error';
      });
  },
});

export const { setFilter } = projectsSlice.actions;
export default projectsSlice.reducer;
