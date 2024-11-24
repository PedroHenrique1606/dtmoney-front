import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray1 to-gray3 flex items-center justify-center text-center text-white px-6">
      <div className="max-w-lg w-full p-8 bg-green bg-opacity-80 rounded-xl shadow-lg backdrop-blur-md">
        <h1 className="text-6xl font-extrabold mb-4 text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray7">
          Oops, parece que não temos nada por aqui!
        </h2>
        <p className="mb-6 text-white">
          Pedimos desculpas pelo ocorrido, retorne para a tela de Home!
        </p>
        <Link href={"/"}>
          <Button className="bg-green text-white hover:bg-green-light transition duration-200">
            Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  );
}
