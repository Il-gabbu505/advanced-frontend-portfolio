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
    <form className="contact-form" onSubmit={handleSubmit} aria-live="polite">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" value={form.name}
          onChange={e =>
            dispatch(updateField({ field: 'name', value: e.target.value }))
          }
          required
        />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={form.email}
          onChange={e =>
            dispatch(updateField({ field: 'email', value: e.target.value }))
          }
          required
        />
      </div>

      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" value={form.subject}
          onChange={e =>
            dispatch(updateField({ field: 'subject', value: e.target.value }))
          }
        />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" value={form.message}
          onChange={e =>
            dispatch(updateField({ field: 'message', value: e.target.value }))
          }
          required
        />
      </div>

      <button disabled={form.status === 'loading'}>
        {form.status === 'loading' ? 'Sending…' : 'Send'}
      </button>

      {form.status === 'success' && (
        <p className="success">Message sent!</p>
      )}
      {form.status === 'error' && (
        <p className="error">{form.error}</p>
      )}
    </form>
  );
}
