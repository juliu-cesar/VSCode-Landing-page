import CarouselMarketplace from "@/src/CarouselMarketplace";
import CodeCard from "@/src/CodeCard";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TableIcons from "@/src/Intellisense/TableIcons";
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
      <TitleAndText>
        <h2>Conclusão da guia</h2>
        <p>
          O editor oferece suporte ao "completar tabulação", que insere a melhor
          conclusão correspondente ao pressionar{" "}
          <span className="emphasis color_principal">Tab</span>. Isso funciona
          independentemente da aba de sugestão ser exibido ou não. Além disso,
          pressionar <span className="emphasis color_principal">Tab</span> após
          inserir uma sugestão mostrara a próxima melhor sugestão.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/IntelliSense/intellisense-tab-completion.gif"
          alt="varias conclusões de tabulação que são alternadas precintando a tecla 'tab'"
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Por padrão, a conclusão da tabulação está desativada. Use a
          configuração <span className="code1">editor.tabCompletion</span> para
          ativá-lo. Esses valores existem:
        </p>
      </TitleAndText>
      <TitleAndText>
        <div className="list">
          <ul>
            <li>
              <span className="code2">off</span> - (padrão) A conclusão da
              tabulação está desativada.
            </li>
            <li>
              <span className="code2">on</span> - A conclusão da guia está
              habilitada para todas as sugestões e invocações repetidas inserem
              a próxima melhor sugestão.
            </li>
            <li>
              <span className="code2">onlySnippets</span> - A conclusão da
              tabulação apenas insere trechos estáticos cujo prefixo corresponde
              ao prefixo da linha atual.
            </li>
          </ul>
        </div>
      </TitleAndText>
      <TitleAndText>
        <h2>Configurações padrão</h2>
        <p>
          As configurações mostradas abaixo são as configurações padrão. Você
          pode alterar essas configurações no arquivo{" "}
          <span className="code2 underline">settings.json</span> conforme
          descrito em Configurações do usuário e do espaço de trabalho.
        </p>
      </TitleAndText>
      <CodeCard>
        <TitleAndText>
          <p>
            {"{"}
            <br />
            <span className="comment">
              // Define se as sugestões rápidas devem aparecer enquanto você
              digita.
            </span>
            <br />
            <span className="code2">"editor.quickSuggestions"</span>:{"{"}
            <br />
            <span className="code2">"other"</span> :{" "}
            <span className="code1">true</span>
            <br />
            <span className="code2">"strings"</span> :{" "}
            <span className="code1">false</span>
            <br />
            <span className="code2">"other"</span> :{" "}
            <span className="code1">false</span>
            <br />
            {"},"}
            <br />
            <span className="comment">
              // Define se as sugestões devem ser aceitas quando você pressiona
              um caractere de confirmação. Por exemplo, no JavaScript, o ponto e
              vírgula (';') pode ser um caractere de confirmação que aceita uma
              sugestão e digita esse caractere.
            </span>
            <br />
            <span className="code2">
              "editor.acceptSuggestionOnCommitCharacter"
            </span>{" "}
            : <span className="code1">true</span> ,
            <br />
            <span className="comment">
              // Define se as sugestões devem ser aceitas quando você pressiona
              Enter, além de Tab. Ajuda a evitar ambiguidade entre inserir novas
              linhas ou aceitar sugestões. O valor "smart" significa que só
              aceita uma sugestão com Enter quando ela faz uma mudança textual.
            </span>
            <br />
            <span className="code2">
              "editor.acceptSuggestionOnEnter"
            </span> : <span className="code1">"on"</span>,
            <br />
            <span className="comment">
              // Define o atraso em milissegundos após o qual as sugestões
              rápidas aparecerão.
            </span>
            <br />
            <span className="code2">"editor.quickSuggestionsDelay"</span> :{" "}
            <span className="code_number">10</span>,
            <br />
            <span className="comment">
              // Define se as sugestões devem aparecer automaticamente quando
              você digita caracteres de gatilho.
            </span>
            <br />
            <span className="code2">
              "editor.suggestOnTriggerCharacters"
            </span> : <span className="code1">true</span>,
            <br />
            <span className="comment">
              // Define se pressionar Tab insere a melhor sugestão e se Tab
              passa por outras sugestões.
            </span>
            <br />
            <span className="code2">"editor.tabCompletion"</span> :{" "}
            <span className="code1">"off"</span>,
            <br />
            <span className="comment">
              // Define se a ordenação favorece palavras que aparecem perto do
              cursor.
            </span>
            <br />
            <span className="code2">"editor.suggest.localityBonus"</span> :{" "}
            <span className="code1">true</span>,
            <br />
            <span className="comment">
              // Define como as sugestões são pré-selecionadas quando mostram a
              lista de sugestões.
            </span>
            <br />
            <span className="code2">"editor.suggestSelection"</span> :{" "}
            <span className="code1">"first"</span>,
            <br />
            <span className="comment">
              // Ativa as sugestões baseadas em palavras.
            </span>
            <br />
            <span className="code2">"editor.wordBasedSuggestions"</span> :{" "}
            <span className="code1">true</span>,
            <br />
            <span className="comment">// Ativa as dicas de parâmetros.</span>
            <br />
            <span className="code2">
              "editor.parameterHints.enabled"
            </span> : <span className="code1">true</span>,
            <br />
            {"}"}
          </p>
        </TitleAndText>
      </CodeCard>
      <Footer />
    </>
  );
}
