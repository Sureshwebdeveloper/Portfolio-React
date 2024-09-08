import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Element } from "react-scroll";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(formData.name, formData.email, formData.message);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const url = "https://suresh-portfolio-server.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${url}/auth/send-email`, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      console.log(response);

      if (response.data.success) {
        setLoading(false);
        toast.success(response.data.message);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element name="/contact">
      <div
      >
        <div className="mx-auto font-Open-sans p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-gray-900  flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold mb-4 ">Let's Talk</h2>
            <p className="text-lg mb-4 font-bold">
              I am currently available to take on new projects. Feel free to
              reach out to me!
            </p>
            <div className="flex items-center mb-4 ">
              <FaEnvelope className="text-red-500 mr-2" />
              <span className="font-bold">developersuresh07@gmail.com</span>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-red-500 mr-2" />
              <span className="font-bold">7639449218</span>
            </div>
            <div className="flex items-center mb-4 ">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              <span className="font-bold">Natham, Tamil Nadu, India</span>
            </div>
          </div>
          <div className="w-[90%] md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  {loading ? "Loading..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
