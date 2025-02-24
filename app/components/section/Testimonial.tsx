"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TestimonialData {
  quote: string;
  name: string;
  photo: string;
}

const defaultTestimonials: TestimonialData[] = [
  { quote: "Belajar dengan AI Learning sangat menyenangkan!", name: "Rina, Mahasiswa", photo: "https://randomuser.me/api/portraits/women/1.jpg" },
  { quote: "Saya bisa memahami konsep lebih cepat dibanding belajar sendiri.", name: "Budi, Programmer", photo: "https://randomuser.me/api/portraits/men/2.jpg" },
  { quote: "Sangat membantu! Terutama chatbot AI-nya.", name: "Lina, Pelajar", photo: "https://randomuser.me/api/portraits/women/3.jpg" },
];

const TestimonialSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2;
        setScrollX(containerRef.current.scrollLeft);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [scrollX]);

  return (
    <section className="py-16 px-8 text-center max-w-7xl mx-auto bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Apa Kata Mereka?</h2>
      <div ref={containerRef} className="flex space-x-4 overflow-hidden p-4 scrollbar-hide">
        {defaultTestimonials.map((testimonial, index) => (
          <div key={index} className="min-w-[300px] p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center flex-shrink-0">
            <Image src={testimonial.photo} alt={testimonial.name} width={80} height={80} className="mx-auto rounded-full" />
            <p className="italic mt-4 text-gray-700 dark:text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
            <h3 className="mt-4 font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
