"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Menu, X, MessageSquare, Sun, Moon, ChevronDown } from "lucide-react";
import ChatAI from "../../components/chatAI/chatAI";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg border-b ${
          scrolled ? "bg-white/80 dark:bg-gray-900/80 shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 text-2xl md:text-3xl font-extrabold text-blue-700 dark:text-white tracking-wide">
            <Image src="/logo.png" alt="E-School Logo" width={60} height={60} className="h-8 w-8 md:h-10 md:w-10" />
            <span>E-School</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center space-x-8 md:space-x-12 text-gray-900 dark:text-white text-base md:text-lg font-medium">
            {["Features", "Testimonials", "Pricing"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300">
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-full border border-gray-400 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 flex items-center gap-2"
            >
              More <ChevronDown size={20} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    {mounted ? (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <Moon size={20} />} Dark Mode
                  </button>
                  <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    <MessageSquare size={20} /> Playground AI
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {isChatOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <motion.div className="fixed bottom-5 right-5 w-80 h-96 bg-white dark:bg-gray-900 border shadow-lg rounded-lg overflow-hidden z-50" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <div className="flex justify-between items-center bg-blue-700 text-white p-3">
              <h3 className="text-lg font-semibold">Playground AI</h3>
              <button onClick={() => setIsChatOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="h-full p-3 overflow-auto">
              <ChatAI onClose={() => setIsChatOpen(false)} />
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
