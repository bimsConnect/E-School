"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialData {
  quote: string;
  name: string;
  photo: string;
}

const defaultTestimonials: TestimonialData[] = [
  { quote: "Belajar dengan AI Learning sangat menyenangkan!", name: "Rina, Mahasiswa", photo: "https://randomuser.me/api/portraits/women/1.jpg" },
  { quote: "Saya bisa memahami konsep lebih cepat dibanding belajar sendiri.", name: "Budi, Programmer", photo: "https://randomuser.me/api/portraits/men/2.jpg" },
  { quote: "Sangat membantu! Terutama chatbot AI-nya.", name: "Lina, Pelajar", photo: "https://randomuser.me/api/portraits/women/3.jpg" },
  { quote: "Materi yang diberikan sangat sesuai dengan kebutuhan saya.", name: "Dewi, Guru", photo: "https://randomuser.me/api/portraits/women/4.jpg" },
  { quote: "AI Learning sangat membantu saya memahami pelajaran sekolah.", name: "Rizky, Siswa", photo: "https://randomuser.me/api/portraits/men/5.jpg" },
];

const TestimonialSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll setiap 3 detik
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Apa Kata Mereka?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Testimoni dari pengguna yang telah merasakan manfaat AI Learning.</p>

      <div className="relative flex items-center justify-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Tombol Navigasi */}
        <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-800 shadow-md rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:block">
          <ChevronLeft size={24} />
        </button>

        {/* Container Testimoni */}
        <div ref={containerRef} className="flex overflow-hidden space-x-4 w-full scrollbar-hide">
          {defaultTestimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 text-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
              <Image src={testimonial.photo} alt={testimonial.name} width={80} height={80} className="mx-auto rounded-full border-2 border-gray-300 dark:border-gray-500" />
              <p className="italic text-gray-700 dark:text-gray-300 mt-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-800 shadow-md rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:block">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
