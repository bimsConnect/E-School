import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Perusahaan */}
        <div>
          <h2 className="text-2xl font-bold mb-4">E-School</h2>
          <p className="text-gray-600">Empowering Education with AI</p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/about" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-gray-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Ikon Media Sosial */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-600">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Informasi Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">Email: info@eschool.com</p>
          <p className="text-gray-600">Phone: +62 123 4567 890</p>
          <p className="text-gray-600">Address: Jl. Example No. 123, Jakarta</p>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} E-School 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
