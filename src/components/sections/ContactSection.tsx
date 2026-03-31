import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900/40"
      aria-labelledby="contact-title"
    >
      <div className="max-w-lg mx-auto">
        <h2
          id="contact-title"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          İletişim
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
