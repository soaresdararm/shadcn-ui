import React from "react";

const Contact = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          Feel free to reach us at: <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a>
        </p>
      </section>
    </main>
  );
};

export default Contact;
