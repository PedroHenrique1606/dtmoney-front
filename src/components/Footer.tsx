import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray1 text-gray6 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e Sobre */}
        <div>
          <h3 className="text-xl font-bold text-green-light">DT Money</h3>
          <p className="mt-4 text-sm text-gray5">
            Uma ferramenta poderosa para gerenciar suas finanças pessoais com
            praticidade e segurança.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="text-lg font-bold text-gray6">Links Rápidos</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-green-light transition">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-light transition">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-light transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-bold text-gray6">Contato</h4>
          <ul className="mt-4 text-sm space-y-2">
            <li>Email: contato@dtmoney.com</li>
            <li>Telefone: +55 11 99999-9999</li>
            <li>Endereço: São Paulo, SP - Brasil</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray3 pt-4 text-center text-sm text-gray5">
        © {new Date().getFullYear()} DT Money. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
