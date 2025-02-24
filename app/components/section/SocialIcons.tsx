import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-center space-x-4 md:space-x-6 mt-6">
      <Link href="https://www.linkedin.com/" target="_blank">
        <FaLinkedin className="text-2xl md:text-3xl text-blue-600 hover:text-blue-800 transition duration-300" />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <FaInstagram className="text-2xl md:text-3xl text-pink-600 hover:text-pink-800 transition duration-300" />
      </Link>
      <Link href="https://github.com/" target="_blank">
        <FaGithub className="text-2xl md:text-3xl text-gray-900 dark:text-white hover:text-gray-600 transition duration-300" />
      </Link>
    </div>
  );
};

export default SocialIcons;