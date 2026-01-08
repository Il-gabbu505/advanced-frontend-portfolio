import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  error?: string;
}

type ContactField = 'name' | 'email' | 'subject' | 'message';

const initialState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  status: 'idle',
};

export const submitContact = createAsyncThunk(
  'contact/submit',
  async (_, { getState }) => {
    const state = getState() as { contact: ContactFormState };
    await new Promise(res => setTimeout(res, 1000));
    return state.contact;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{ field: ContactField; value: string }>
    ) {
      state[action.payload.field] = action.payload.value;
    },
    resetForm(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitContact.pending, state => {
        state.status = 'loading';
      })
      .addCase(submitContact.fulfilled, state => {
        state.status = 'success';
      })
      .addCase(submitContact.rejected, state => {
        state.status = 'error';
        state.error = 'Submission failed';
      });
  },
});

export const { updateField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
