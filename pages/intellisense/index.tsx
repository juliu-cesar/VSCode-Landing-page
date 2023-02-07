import CarouselMarketplace from "@/src/CarouselMarketplace";
import CodeCard from "@/src/CodeCard";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TableIcons from "@/src/Intellisense/TableIcons";
import Table from "@/src/Table";
import TitleAndText from "@/src/TitleAndText";

export default function IntelliSense() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>IntelliSense</h1>
        <p>
          IntelliSense é um termo geral para vários recursos de edição de
          código, incluindo:{" "}
          <span className="emphasis">
            conclusão de código, informações de parâmetro, informações rápidas e
            listas de membros
          </span>
          . Os recursos do IntelliSense às vezes são chamados por outros nomes,
          como "conclusão de código"(code completion), "assistente de
          conteúdo"(content assist) e "dicas de código"(code hinting).
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/IntelliSense/intellisense-principal-gif.gif"
          alt="IntelliSense aberto mostrando a provável conclusão do código."
        />
      </ImgCard>
      <TitleAndText>
        <h2>IntelliSense para sua linguagem de programação</h2>
        <p>
          O Visual Studio Code IntelliSense é fornecido para JavaScript,
          TypeScript, JSON, HTML, CSS e SCSS. O VS Code oferece suporte a
          conclusões baseadas em palavras para qualquer linguagem de
          programação, mas também pode ser configurado para ter um IntelliSense
          mais completo instalando uma extensão de linguagem de programação.
        </p>
        <p>
          Abaixo estão as extensões de idioma mais populares no Marketplace:
        </p>
      </TitleAndText>
      <CarouselMarketplace />
      <TitleAndText>
        <h2>IntelliSense para sua linguagem de programação</h2>
        <p>
          Os recursos do VS Code IntelliSense são alimentados por um serviço de
          idioma. Um serviço de linguagem fornece conclusões de código
          inteligentes com base na semântica da linguagem e uma análise de seu
          código-fonte. Se um serviço de idiomas souber as conclusões possíveis,
          as sugestões do IntelliSense serão exibidas enquanto você digita. Se
          você continuar digitando caracteres, a lista de membros (variáveis,
          métodos, etc.) será filtrada para incluir apenas os membros que contêm
          seus caracteres digitados. Pressionar{" "}
          <span className="emphasis color_principal">Tab</span> ou{" "}
          <span className="emphasis color_principal">Enter</span> irá inserir o
          membro selecionado.
        </p>
        <p>
          Você pode acionar o IntelliSense em qualquer janela do editor
          digitando{" "}
          <span className="emphasis color_principal">Ctrl+Espaço</span> ou
          digitando um caractere de acionamento (como o caractere de ponto ({" "}
          <span className="codeSnippet_2">.</span> ) em JavaScript).
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/IntelliSense/intellisense-features.gif"
          alt="IntelliSense filtrando as opções a cada novo caractere digitado pelo usuário."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Tipos de conclusões</h2>
        <p>
          O código JavaScript abaixo ilustra as conclusões do IntelliSense. O
          IntelliSense fornece propostas inferidas e os identificadores globais
          do projeto. Os símbolos inferidos são apresentados primeiro, seguidos
          pelos identificadores globais.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/IntelliSense/intellisense-types-of-completions.png"
          alt="Intellisense mostrando primeiro as opções inferidas e depois os identificadores globais."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          O VS Code IntelliSense oferece diferentes tipos de conclusões,
          incluindo sugestões de servidores de idiomas, trechos e conclusões
          textuais baseadas em palavras simples.
        </p>
      </TitleAndText>
      <TableIcons />

      <Footer />
    </>
  );
}
