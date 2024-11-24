"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logodtmoney.svg";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray1 text-gray6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="DT Money" className="w-10 h-10" />
          <span className="ml-3 text-xl font-bold text-green-light">
            DT Money
          </span>
        </Link>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link
              href="#features"
              className="hover:text-green-light transition"
            >
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-light transition">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-light transition">
              Contato
            </Link>
          </li>
        </ul>
        <div className="space-x-3 hidden md:flex">
          <a href="login">
            <Button>Login</Button>
          </a>
          <a href="signup">
            <Button>Cadastrar</Button>
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="bg-green hover:bg-green-light text-gray1 font-semibold py-2 px-4 rounded-lg shadow-md transition md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray1 rounded-lg p-6 w-3/4 max-w-sm text-center">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="#features"
                  className="hover:text-green-light transition"
                  onClick={toggleMenu}
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-green-light transition"
                  onClick={toggleMenu}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-green-light transition"
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </li>
              <div className="space-y-2 mt-4 flex justify-center items-center flex-col">
                <a href="login">
                  <Button onClick={toggleMenu}>Login</Button>
                </a>
                <a href="singin">
                  <Button onClick={toggleMenu}>Cadastrar</Button>
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
