import ContactForm from '../features/contact/ContactForm';
import Page from '../components/Page';
export default function Contact() {
  return (
    <Page>
      <h2>Contact Me</h2>
      <p className="muted">
        Have a question or want to work together? Send me a message.
      </p>
      <ContactForm />
    </Page>
  );
}
