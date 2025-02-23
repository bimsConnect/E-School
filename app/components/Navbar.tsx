"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Menu, X, MessageSquare } from "lucide-react";
import ChatAI from "./chatAI/chatAI";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg border-b ${
          scrolled ? "bg-white/80 shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-wide">
            E-School
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 md:space-x-12 text-gray-900 text-base md:text-lg font-medium">
            {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-700 transition-all duration-300">
                {item}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="px-4 py-2 bg-blue-700 text-white rounded-full text-lg font-medium hover:bg-blue-800 transition-all duration-300">
              Login
            </Link>
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="px-4 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare size={20} /> Playground AI
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-lg font-medium z-40 p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="w-full text-center py-3 rounded-lg hover:bg-blue-100 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
              <Link href="/login" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-700 text-white rounded-full text-lg font-medium hover:bg-blue-800 transition-all duration-300">
                Login
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-gray-700"
              >
                <X size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* AI Chat Popup */}
      {isChatOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <motion.div
            className="fixed bottom-5 right-5 w-80 h-96 bg-white border shadow-lg rounded-lg overflow-hidden z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
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
