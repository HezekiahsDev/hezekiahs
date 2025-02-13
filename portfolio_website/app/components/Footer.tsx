"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#2d2732] text-[#D3B8C5] py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-[#F6D4CF] mb-4">
              Connect with Me
            </h3>
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
                href="https://twitter.com/HezekiahsDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-[#F6D4CF] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-[#F6D4CF] mb-4">
              Contact Me
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#D3B8C5]" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
                >
                  hezekiahs.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#D3B8C5]" />
                <a
                  href="tel:+1234567890"
                  className="text-[#D3B8C5] hover:text-[#D8928B] transition-colors"
                >
                  +2348022293496
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 border-t border-[#D3B8C5] pt-8 text-center">
          <p className="text-[#D3B8C5]">
            &copy; {new Date().getFullYear()} Hezekiahs Olushola. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
