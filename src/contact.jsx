export default function Contact() {
  const handleSubmit = (event) => {
      event.preventDefault();
      alert('Thank you! Your message has been sent.');
      window.location.href = "#home";
  };

  return (
      <>
          <section id="contact">
              <div className="contact-content">
                  <h2>Contact Me</h2>

                  <div className="contact-info">
                      <p>Email: mehakdeep1226@gmail.com</p>
                      <p>Phone: +16239268902</p>
                  </div>

                  <form id="contact-form" onSubmit={handleSubmit}>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" required />

                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required />

                      <label htmlFor="phone">Contact Number</label>
                      <input type="tel" id="phone" name="phone" required />

                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" required />

                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" required></textarea>

                      <button type="submit">Send Message</button>
                  </form>
              </div>
          </section>
      </>
  );
}
