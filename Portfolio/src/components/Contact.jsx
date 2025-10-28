import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = form;
    if (!fullName || !email || !subject || !message) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }
    try{

        const res = await axios.post("/api/send", form);
        console.log("Send message:", res.data.message);
        setStatus({ type: "success", text: res.data.message });
    }catch(error){
        console.error("Error sending message:", error);
        setStatus({ type: "error", text: res.data.message });
    }
    setForm({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-auto md:overflow-hidden overflow-x-hidden overflow-y-auto mx-auto px-6 pt-2 pb-10 bg-[#101d26] dark:bg-[#101d26] rounded-lg shadow-md ">
      
      <div className="flex md:flex-row flex-col justify-evenly">
        <section className="min-w-1/2 p-12 text-left">
          <h2 className="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="mb-4 text-gray-800 font-light dark:text-gray-200 text-justify">
            Feel free to reach out to me via this contact form. Whether you have
            a question, want to discuss a project, or just want to say hello,
            I'm here to listen!
          </p>
          <ul className=" list-inside mb-6 text-gray-800 dark:text-gray-200 text-left pl-8">
            <li className=" font-light">
              <a className="hover:text-[#646cff]" href="mailto:venukommieni61@gmail.com">
               <FaEnvelope  className="inline mr-2"/>venukommieni61@gmail.com
              </a>
            </li>
            <li className=" font-light">
              <a className="hover:text-[#646cff]" href="http://www.linkedin.com/in/venumadhav-kommineni">
                <FaLinkedin  className="inline mr-2"/>venumadhav kommineni
              </a>
            </li>
            <li className=" font-light">
              <a href="https://github.com/venuKVM" className="hover:text-[#646cff]"><FaGithub className="inline mr-2"/>venuKVM</a>
            </li>
          </ul>
          <a href="../../public/Venumadhav_Resume.pdf" download>
            <button className=" mt-4 bg-none border-2 block text-[#1073d6] border-[#1073d6] py-2 px-4 rounded-lg hover:text-[#646cff]">
              Download Resume
            </button>
          </a>
        </section>
        <form
          onSubmit={handleSubmit}
          aria-label="Contact form"
          className="space-y-3 h-auto rounded-lg md:w-2/3 m-6 p-6 bg-[#151F2B] flex flex-row flex-wrap gap-2"
        >
          <h2 className="font-semibold">Send a Message</h2>
          <div className="w-full lg:flex lg:flex-row lg:justify-between lg:gap-2">
            <div className="fullName">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="email lg:w-1/2">
              <label
                htmlFor="email"
                className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="subject"
              className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-2 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="block w-full  px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Send message
            </button>
          </div>

          {status && (
            <p
              role="status"
              className={`mt-2 text-sm ${
                status.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
