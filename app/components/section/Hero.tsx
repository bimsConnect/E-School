import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* Teks dan Tombol */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Belajar Lebih Cerdas dengan <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif.
        </p>

        {/* Tombol Mulai Belajar & Pesan Sekarang */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/dashboard">
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Mulai Belajar
            </button>
          </Link>
          <Link href="https://wa.me/6281234567890" target="_blank">
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center space-x-2">
              <FaWhatsapp className="text-xl sm:text-2xl" />
              <span>Konsultasi</span>
            </button>
          </Link>
        </div>

        {/* Ikon Media Sosial */}
        <div className="w-full flex justify-center md:justify-start mt-6">
          <SocialIcons />
        </div>
      </div>

      {/* Gambar */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src="/learning.jpg"
          alt="Ilustrasi pembelajaran AI"
          width={400}
          height={300}
          priority
          className="rounded-lg shadow-lg w-full max-w-sm md:max-w-none"
        />
      </div>
    </header>
  );
};

export default Hero;