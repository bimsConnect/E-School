import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">E-School</h2>
          <p className="text-gray-600 dark:text-gray-400">Education with AI</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500 dark:hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-blue-500 dark:hover:text-blue-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500 dark:hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-500 dark:hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-500 dark:hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h3>
          <p className="text-gray-600 dark:text-gray-400">📧 info@eschool.com</p>
          <p className="text-gray-600 dark:text-gray-400">📞 +62 123 4567 890</p>
          <p className="text-gray-600 dark:text-gray-400">📍 Jl. Example No. 123, Jakarta</p>
        </div>
      </div>

      <div className="text-center text-gray-500 dark:text-gray-400 mt-4">© {new Date().getFullYear()} E-School. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
