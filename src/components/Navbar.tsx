import React from "react";
import Image from "next/image";
import Logo from "@/assets/logodtmoney.svg";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray1 text-gray6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="DT Money" className="w-10 h-10" />
          <span className="ml-3 text-xl font-bold text-green-light">
            DT Money
          </span>
        </Link>
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
        <div className="space-x-3">
          <a href="login">
            <Button>Login</Button>
          </a>
          <a href="singin">
            <Button>Cadastrar</Button>
          </a>
        </div>
        <button className="bg-green hover:bg-green-light text-gray1 font-semibold py-2 px-4 rounded-lg shadow-md transition md:hidden">
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
