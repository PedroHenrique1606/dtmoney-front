import { MarqueeDemo } from "@/components/Marquee";
import WordRotate from "@/components/ui/word-rotate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SafariDemo } from "@/components/SafariDemo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import HomeDesktop from "@/assets/home-desktop.svg";

const beneficios = [
  {
    id: "item-1",
    pergunta: "O dtmoney é fácil de usar?",
    resposta:
      "Sim. O dtmoney possui uma interface intuitiva e fácil de navegar.",
  },
  {
    id: "item-2",
    pergunta: "Posso cadastrar minhas transações de forma rápida?",
    resposta:
      "Sim. O dtmoney permite o cadastro rápido de transações com apenas alguns cliques.",
  },
  {
    id: "item-3",
    pergunta: "O dtmoney é seguro?",
    resposta:
      "Sim. Utilizamos autenticação segura e proteção dos seus dados financeiros.",
  },
  {
    id: "item-4",
    pergunta: "É possível visualizar relatórios financeiros?",
    resposta:
      "Sim. O dtmoney oferece relatórios financeiros detalhados para análise de gastos.",
  },
  {
    id: "item-5",
    pergunta: "O dtmoney é gratuito?",
    resposta: "Sim. O dtmoney é totalmente gratuito para uso pessoal.",
  },
  {
    id: "item-6",
    pergunta: "Posso acessar o dtmoney de qualquer dispositivo?",
    resposta:
      "Sim. O dtmoney é responsivo e funciona em qualquer dispositivo, seja desktop ou mobile.",
  },
];

const Home = () => {
  return (
    <div className="bg-gray1 text-gray6 min-h-screen flex flex-col">
      {/* Hero Section */}
      <Navbar />
      <header className="text-white py-16 px-8 mt-20">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between 
          motion-safe:animate-fade-in-down"
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight motion-safe:animate-fade-in-left">
              Controle Financeiro Simplificado com o{" "}
              <span className="text-green-light">
                <WordRotate
                  className="text-4xl md:text-6xl font-bold text-green-light dark:text-white"
                  words={["DT MONEY", "seu melhor site de gestão"]}
                />
              </span>
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-gray5 
              motion-safe:animate-fade-in-right"
            >
              Uma ferramenta poderosa para gerenciar suas finanças pessoais com
              praticidade e eficiência.
            </p>
            <button
              className="mt-8 bg-green hover:bg-green-light text-gray1 font-semibold py-3 px-6 rounded-lg 
              shadow-md transition motion-safe:animate-pulse"
            >
              Comece Agora
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray1 space-y-10 ">
        <div
          className="max-w-7xl mx-auto
          motion-safe:animate-fade-in-up"
        >
          <SafariDemo />
          <h2 className="text-3xl md:text-4xl font-bold text-gray7 mt-20 text-center ">
            Por que escolher o DT Money?
          </h2>
          <p className="mt-4 text-gray6 mb-20 text-center ">
            Oferecemos as melhores funcionalidades para você alcançar sua
            independência financeira.
          </p>
          <div className="flex gap-8 space-y-16 flex-col md:flex-row">
            <div>
              <Image src={HomeDesktop} alt="Home" />
            </div>
            <Accordion type="single" collapsible className="w-full">
              {beneficios.map((beneficio) => (
                <AccordionItem key={beneficio.id} value={beneficio.id}>
                  <AccordionTrigger className="text-base">
                    {beneficio.pergunta}
                  </AccordionTrigger>
                  <AccordionContent>{beneficio.resposta}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <MarqueeDemo />

      <Footer />
    </div>
  );
};

export default Home;
