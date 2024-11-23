import { MarqueeDemo } from "@/components/Marquee";
import WordRotate from "@/components/ui/word-rotate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SafariDemo } from "@/components/SafariDemo";
import HorizontalCard from "@/components/HorizontalCard";

const Home = () => {
  return (
    <div className="bg-gray1 text-gray6 min-h-screen flex flex-col">
      {/* Hero Section */}
      <Navbar />
      <header className="text-white py-16 px-8">
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
      <section className="py-16 px-8 bg-gray1 space-y-10">
        <div
          className="max-w-7xl mx-auto text-center 
          motion-safe:animate-fade-in-up"
        >
          <SafariDemo />
          <h2 className="text-3xl md:text-4xl font-bold text-gray7 mt-20">
            Por que escolher o DT Money?
          </h2>
          <p className="mt-4 text-gray6 mb-20">
            Oferecemos as melhores funcionalidades para você alcançar sua
            independência financeira.
          </p>
          <div className="flex flex-col space-y-16 items-center justify-center">
            <HorizontalCard
              imageSrcOne="https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Gerencie suas finanças"
              description="Tenha controle total dos seus gastos, prioridades e projeção de gastos"
              link="#"
              imageSrcTwo=""
            />
            <HorizontalCard
              imageSrcOne=""
              imageSrcTwo="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Planeje seus gastos"
              description="Saiba gerenciar cada gasto com base nos gastos anteriores"
              link="#"
            />
            <HorizontalCard
              imageSrcOne="https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Gerencie suas finanças"
              description="Tenha controle total dos seus gastos, prioridades e projeção de gastos"
              link="#"
              imageSrcTwo=""
            />
            <HorizontalCard
              imageSrcOne=""
              imageSrcTwo="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Planeje seus gastos"
              description="Saiba gerenciar cada gasto com base nos gastos anteriores"
              link="#"
            />
            <HorizontalCard
              imageSrcOne="https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Gerencie suas finanças"
              description="Tenha controle total dos seus gastos, prioridades e projeção de gastos"
              link="#"
              imageSrcTwo=""
            />
            <HorizontalCard
              imageSrcOne=""
              imageSrcTwo="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Planeje seus gastos"
              description="Saiba gerenciar cada gasto com base nos gastos anteriores"
              link="#"
            />
          </div>
        </div>
      </section>
      <MarqueeDemo />

      <Footer />
    </div>
  );
};

export default Home;
