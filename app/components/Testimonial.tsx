"use client"; // Diperlukan agar Next.js tahu ini Client Component

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
  { quote: "Materi yang diberikan sangat sesuai dengan kebutuhan saya.", name: "Dewi, Guru", photo: "https://randomuser.me/api/portraits/women/4.jpg" },
  { quote: "AI Learning sangat membantu saya memahami pelajaran sekolah.", name: "Rizky, Siswa", photo: "https://randomuser.me/api/portraits/men/5.jpg" },
  { quote: "Sistem pembelajarannya fleksibel dan menyenangkan!", name: "Sari, Mahasiswa", photo: "https://randomuser.me/api/portraits/women/6.jpg" },
  { quote: "Platform ini sangat cocok untuk meningkatkan skill.", name: "Andi, Freelancer", photo: "https://randomuser.me/api/portraits/men/7.jpg" },
  { quote: "Saya lebih percaya diri menghadapi ujian setelah belajar di sini.", name: "Fauzan, Siswa SMA", photo: "https://randomuser.me/api/portraits/men/8.jpg" },
  { quote: "AI Learning adalah solusi terbaik bagi pembelajaran online!", name: "Nurul, Pengajar", photo: "https://randomuser.me/api/portraits/women/9.jpg" },
  { quote: "Saya bisa belajar kapan saja dan di mana saja dengan mudah.", name: "Kevin, Mahasiswa", photo: "https://randomuser.me/api/portraits/men/10.jpg" },
];

const TestimonialSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  // Auto-scroll effect dengan cleanup agar tidak menyebabkan error
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2; // Geser ke kanan 2px setiap interval
        setScrollX(containerRef.current.scrollLeft);
      }
    }, 30); // Kecepatan gerakan (30ms sekali)

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, [scrollX]);

  return (
    <section className="py-16 px-8 text-center max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Apa Kata Mereka?</h2>
      <div ref={containerRef} className="flex space-x-4 overflow-hidden p-4 scrollbar-hide">
        {defaultTestimonials.map((testimonial, index) => (
          <div key={index} className="min-w-[300px] p-6 bg-white shadow-md rounded-lg text-center flex-shrink-0">
            <Image src={testimonial.photo} alt={testimonial.name} width={80} height={80} className="mx-auto rounded-full" />
            <p className="italic mt-4">&ldquo;{testimonial.quote}&rdquo;</p>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
