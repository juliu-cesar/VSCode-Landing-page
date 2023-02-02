import Footer from "@/src/Footer";
import Header from "@/src/Header";
import TitleAndText from "@/src/TitleAndText";

export default function faq() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Perguntas frequentes sobre o código do Visual Studio</h1>
      </TitleAndText>
      <TitleAndText>
        <h2>Quais sistemas operacionais são suportados?</h2>
        <p>
          O VS Code é executado no macOS, Linux e Windows. Consulte a
          documentação de Requisitos para obter as versões com suporte.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>O VS Code é gratuito?</h2>
        <p>Sim, o VS Code é gratuito para uso privado ou comercial.</p>
      </TitleAndText>
      <TitleAndText>
        <h2>Quais serviços online o VS Code usa?</h2>
        <p>
          Além de relatórios de falhas e telemetria, o VS Code usa serviços
          online para várias outras finalidades, como download de atualizações
          de produtos, localização, instalação e atualização de extensões ou
          fornecimento de pesquisa de linguagem natural no editor de
          configurações.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>O que significa "Construído em Código Aberto"?</h2>
        <p>
          O Microsoft Visual Studio Code é uma distribuição licenciada da
          Microsoft de 'Código - OSS' que inclui ativos de propriedade da
          Microsoft (como ícones) e recursos (integração do Visual Studio
          Marketplace, pequenos aspectos da habilitação do Desenvolvimento
          Remoto). Embora essas adições representem uma porcentagem muito
          pequena da base geral do código de distribuição, é mais preciso dizer
          que o Visual Studio Code é "construído" em código aberto, em vez de
          "ser" código aberto, devido a essas diferenças.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Posso executar uma versão portátil do VS Code?</h2>
        <p>
          Sim, o VS Code possui um Modo Portátil que permite manter
          configurações e dados no mesmo local de sua instalação, por exemplo,
          em um pendrive.
        </p>
      </TitleAndText>
      <Footer />
    </>
  );
}
