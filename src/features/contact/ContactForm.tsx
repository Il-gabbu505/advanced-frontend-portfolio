import { useAppDispatch, useAppSelector } from '../../app/hooks';
import type { RootState } from '../../app/store';
import { updateField, submitContact, resetForm } from './contactSlice';

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((s: RootState) => s.contact);

  const errors = {
    email: !form.email.includes('@'),
    name: form.name.length < 2,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.email || errors.name) return;
    dispatch(submitContact()).then(() => dispatch(resetForm()));
  };

  return (
    <form onSubmit={handleSubmit} aria-live="polite">
      <input
        aria-label="Name"
        value={form.name}
        onChange={e =>
          dispatch(updateField({ field: 'name', value: e.target.value }))
        }
        required
      />
      <input
        aria-label="Email"
        value={form.email}
        onChange={e =>
          dispatch(updateField({ field: 'email', value: e.target.value }))
        }
        required
      />
      <input
        aria-label="Subject"
        value={form.subject}
        onChange={e =>
          dispatch(updateField({ field: 'subject', value: e.target.value }))
        }
      />
      <textarea
        aria-label="Message"
        value={form.message}
        onChange={e =>
          dispatch(updateField({ field: 'message', value: e.target.value }))
        }
        required
      />
      <button disabled={form.status === 'loading'}>
        {form.status === 'loading' ? 'Sending…' : 'Send'}
      </button>

      {form.status === 'success' && <p>Message sent!</p>}
      {form.status === 'error' && <p>{form.error}</p>}
    </form>
  );
}
