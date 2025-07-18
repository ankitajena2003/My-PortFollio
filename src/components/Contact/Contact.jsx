import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4g1v0e",
        "template_7whxf7m",
        form.current,
        "07t9qbOjQins47oKi"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[6vw] md:px-[4vw] lg:px-[10vw] bg-[#0f0f1f] text-white"
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-xl font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12">
  {/* Left: Contact Info */}
  <div className="lg:w-1/2 flex flex-col gap-6 text-white">
    {/* Title and underline aligned left */}
    <div>
      <h3 className="text-2xl font-bold">Get in Touch</h3>
      <div className="w-24 h-1 bg-purple-500 mt-2 mb-4"></div>
    </div>




    <div className="flex items-center gap-3">
      <i className="fas fa-envelope text-xl"></i>
      <a href="mailto:ankitakjena2003@gmail.com" className="hover:underline">
        ankitakjena2003@gmail.com
      </a>
    </div>

    <div className="flex items-center gap-3">
      <i className="fas fa-phone text-xl"></i>
      <span>+91 7205608170</span>
    </div>

    <div className="flex items-center gap-3">
      <i className="fab fa-linkedin text-xl"></i>
      <a
        href="https://www.linkedin.com/in/ankita-jena-b78385348"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        LinkedIn
      </a>
    </div>

    <div className="flex items-center gap-3">
      <i className="fab fa-github text-xl"></i>
      <a
        href="https://github.com/ankitajena2003"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        GitHub
      </a>
    </div>
  </div>


        {/* Right: Form */}
        <div className="lg:w-1/2 bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-center mb-4">
            Connect With Me <span>🚀</span>
          </h3>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
