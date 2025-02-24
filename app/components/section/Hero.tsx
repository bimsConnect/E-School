"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* Teks dan Tombol */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center md:text-left md:w-1/2">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Belajar Lebih Cerdas dengan <span className="text-blue-600">AI</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-base sm:text-lg mb-6">
          Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif.
        </motion.p>

        {/* Tombol */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/dashboard">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md">
              Mulai Belajar
            </motion.button>
          </Link>
          <Link href="https://wa.me/6281234567890" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-md flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
              <span>Konsultasi</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Ikon Media Sosial */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="w-full flex justify-center md:justify-start mt-6">
          <SocialIcons />
        </motion.div>
      </motion.div>

      {/* Gambar */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image src="/learning.jpg" alt="Ilustrasi pembelajaran AI" width={400} height={300} priority className="rounded-lg shadow-lg w-full max-w-sm md:max-w-none" />
      </motion.div>
    </motion.header>
  );
};

export default Hero;
