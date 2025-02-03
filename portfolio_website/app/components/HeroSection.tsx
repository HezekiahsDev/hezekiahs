"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import HezeImage from "../assets/heze.png";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5, delay: 0.5 }}
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-[#281E30] text-[#F6D4CF] px-4"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5, delay: 0.3 }}
        className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 w-full max-w-sm"
      >
        <Image
          src={HezeImage}
          alt="Hezekiah Olushola"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center md:items-start pb-4 md:py-0 md:pb-0">
        {/* Name and Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl text-[#D3B8C5] mb-2"
        >
          I&apos;m
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hezekiah Olushola
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl text-[#D3B8C5] mb-4"
        >
          Full-Stack Software Engineer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-[#D3B8C5] max-w-2xl mb-12"
        >
          "I build scalable, secure, and user-focused applications using modern
          technologies to deliver tailored solutions aligned with business
          goals."
        </motion.p>

        {/* Call-to-Action Button and Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col space-y-6 items-center md:items-start"
        >
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/portfolio"
              className="bg-[#D8928B] text-[#281E30] px-8 py-3 rounded-lg font-semibold hover:bg-[#bd7b75] transition-colors text-center"
            >
              View My Work
            </Link>
            <Link
              href="/hire"
              className="bg-[#fcb976] text-[#281E30] px-8 py-3 rounded-lg font-semibold hover:bg-[#cc955e] transition-colors text-center"
            >
              Hire Me
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/HezekiahsDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/hezekiah-olushola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/hezekiahsdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
