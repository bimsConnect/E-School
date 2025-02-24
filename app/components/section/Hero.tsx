import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Belajar Lebih Cerdas dengan <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-lg mb-6">
          Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif.
        </p>

        {/* Tombol Mulai Belajar & Pesan Sekarang */}
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <button className="px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Mulai Belajar
            </button>
          </Link>
          <Link href="https://wa.me/6281234567890" target="_blank">
            <button className="px-6 py-3 text-lg bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2">
              <FaWhatsapp className="text-2xl" />
              <span>Konsultasi</span>
            </button>
          </Link>
        </div>

        {/* Ikon Media Sosial */}
        <SocialIcons />
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src="/learning.jpg"
          alt="Ilustrasi pembelajaran AI"
          width={500}
          height={400}
          priority
          className="rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
};

export default Hero;
