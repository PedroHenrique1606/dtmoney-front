import Link from "next/link";
import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="bg-gray1 text-white min-h-screen px-6 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-8 text-green">
          Termos de Uso e Política de Privacidade
        </h1>

        {/* Seção de Termos de Uso */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-light">
            Termos de Uso
          </h2>
          <p className="text-gray6 leading-7 mb-4">
            Bem-vindo ao nosso site dtmoney. Ao acessar e usar este site, você
            concorda em cumprir os seguintes Termos de Uso. Por favor, leia-os
            atentamente antes de continuar.
          </p>
          <p className="text-gray6 leading-7 mb-4">
            1. Você deve utilizar este site apenas para fins legais e de acordo
            com as condições estabelecidas aqui.
          </p>
          <p className="text-gray6 leading-7 mb-4">
            2. É proibido copiar, reproduzir ou distribuir qualquer conteúdo
            deste site sem a permissão expressa dos proprietários.
          </p>
          <p className="text-gray6 leading-7 mb-4">
            3. Podemos modificar ou descontinuar o site a qualquer momento sem
            aviso prévio.
          </p>
          {/* Adicione mais termos conforme necessário */}
        </section>

        {/* Seção de Política de Privacidade */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-light">
            Política de Privacidade
          </h2>
          <p className="text-gray6 leading-7 mb-4">
            Sua privacidade é importante para nós. Esta Política de Privacidade
            descreve como coletamos, usamos e protegemos suas informações.
          </p>
          <p className="text-gray6 leading-7 mb-4">
            1. Coletamos informações pessoais fornecidas por você, como nome e
            e-mail, apenas para fins específicos.
          </p>
          <p className="text-gray6 leading-7 mb-4">
            2. Utilizamos cookies para melhorar sua experiência de navegação e
            analisar o tráfego do site.
          </p>
          <p className="text-gray6 leading-7 mb-4">
            3. Não compartilhamos suas informações pessoais com terceiros sem o
            seu consentimento, exceto conforme exigido por lei.
          </p>
          {/* Adicione mais detalhes conforme necessário */}
        </section>

        {/* Botão de Voltar */}
        <div className="mt-8">
          <Link href={"/"} className="bg-green-dark text-white py-2 px-4 rounded hover:bg-green transition duration-200">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
