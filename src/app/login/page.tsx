"use client";

import Logo from "@/assets/logodtmoney.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

function loginToastTeste() {
  toast.success("Login feito com sucesso");
}

export default function Login() {
  return (
    <div className="flex h-screen bg-gray2">
      {/* Container do Logo */}
      <div className="flex-[0.7] flex items-center justify-center bg-gray1">
        <div className="relative">
          <Image src={Logo} alt="DT Money" className="max-w-[80%] h-auto" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div
              className="w-64 h-64 bg-green-600 rotate-45"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* Container do Formulário */}
      <div className="flex-[0.3] flex items-center justify-center px-16 bg-gray2">
        <div className="w-full max-w-md space-y-6">
          <div className="flex gap-2">
            <Image src={Logo} alt="DT Money" className="w-10 h-10" />
            <h2 className="text-3xl font-semibold text-gray-100">DT Money</h2>
          </div>
          <p className="mt-2 text-gray6 font-bold text-2xl">Acesse sua conta</p>

          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                E-mail
              </label>
              <Input type="email" placeholder="E-mail" />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Sua senha
              </label>
              <Input type="password" placeholder="Sua senha" />
            </div>
            <div>
              <Button
                className="w-full py-6 font-bold"
                onClick={loginToastTeste} 
                type="button"
              >
                Entrar
              </Button>
            </div>
          </form>
          <div className="space-y-4">
            <div className="p-[1.5px] bg-gray4"></div>
            <div className="p-1"></div>
            <div className="bg-gray-800 text-gray-300 rounded-lg p-4 flex justify-between items-center shadow-lg max-w-md cursor-pointer">
              <Link href={"/signup"} className="flex items-center w-full">
                <LogIn size={20} className="text-green-light mr-2" />
                <div>
                  <p className="text-sm">Não possui conta ainda?</p>
                  <p className="text-green-light font-semibold hover:underline">
                    Crie a sua agora
                  </p>
                </div>
                <ChevronRight size={20} className="text-gray-400 ml-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
