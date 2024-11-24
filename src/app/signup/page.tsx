import Logo from "@/assets/logodtmoney.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex h-screen bg-gray2">
      {/* Container do Logo */}
      <div className="flex flex-1 items-center justify-center bg-gray1">
        <div className="relative">
          <Image src={Logo} alt="DT Money" className="" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div
              className="w-64 h-64 bg-green-600 rotate-45"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* Container do Formulário */}
      <div className="flex items-center justify-center px-16">
        <div className="w-full max-w-md space-y-6">
          <div className="flex gap-2">
            <Image src={Logo} alt="DT Money" className="w-10 h-10" />
            <h2 className="text-3xl font-semibold text-gray-100">DT Money</h2>
          </div>
          <p className="mt-2 text-gray6 font-bold text-2xl">Crie sua conta</p>

          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Seu Nome
              </label>
              <Input type="text" placeholder="Nome" />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                E-mail
              </label>
              <Input type="email" placeholder="E-mail" />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Sua senha
              </label>
              <Input type="password" placeholder="Sua senha" />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Confirme sua senha
              </label>
              <Input type="password" placeholder="Confirme sua senha " />
            </div>

            <div>
              <Button className="w-full py-6 font-bold">Criar conta</Button>
            </div>

            <p className="text-sm text-gray-400">
              Ao se cadastrar, você aceita nossos{" "}
              <a href="#" className="text-green-500 hover:underline">
                termos de uso
              </a>{" "}
              e a nossa{" "}
              <a href="#" className="text-green-500 hover:underline">
                política de privacidade
              </a>
              .
            </p>
          </form>
          <div className="space-y-4">
            <div className="p-[1.5px] bg-gray4"></div>
            <Link href={"/login"}>
              <div className="bg-gray-800 text-gray-300 rounded-lg p-4 flex justify-between items-center shadow-lg max-w-md">
                <div className="flex items-center">
                  <LogIn size={20} className="text-green-light mr-2" />
                  <div>
                    <p className="text-sm">Já possui uma conta?</p>
                    <Link
                      href="/login"
                      className="text-green-light font-semibold hover:underline"
                    >
                      Entre na plataforma
                    </Link>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
