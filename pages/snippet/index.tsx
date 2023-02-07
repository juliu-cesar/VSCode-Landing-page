import Annotation from "@/src/Annotation";
import CarouselMarketplace from "@/src/CarouselMarketplace";
import CodeCard from "@/src/CodeCard";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TableIcons from "@/src/Intellisense/TableIcons";
import Table from "@/src/Table";
import TitleAndText from "@/src/TitleAndText";

export default function Snippet() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Snippets</h1>
      </TitleAndText>
      <TitleAndText>
        <h2>Aumente o poder do Visual Studio Code por meio de extensões</h2>
        <p>
          Snippets são modelos que facilitam a inserção de padrões de código
          repetidos, como loops ou declarações condicionais.
        </p>
        <p>
          No Visual Studio Code, os snippets aparecem no IntelliSense (
          <span className="emphasis color_principal">Ctrl+Space</span> )
          misturados com outras sugestões, bem como em um seletor de snippet
          dedicado. Também há suporte para preenchimento de tabulação:
          habilite-o dentro das <span className="emphasis">Configurações</span>{" "}
          na opção <span className="codeSnippet_2">"editor.tabCompletion"</span>{" "}
          : <span className="codeSnippet_1">"on"</span>, então digite um prefixo
          de trecho e pressione Tab para inserir o código.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Snippet/snippet-principal-gif.gif"
          alt="Adicionando um snippet de ajax."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Trechos integrados</h2>
        <p>
          O VS Code possui snippets integrados para várias linguagens, como:
          JavaScript, TypeScript, Markdown e PHP.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Snippet/snippet-built-in.png"
          alt="Adicionando um snippet de ajax."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Você pode ver os snippets disponíveis para um idioma executando o
          comando Insert Snippet na Paleta de Comandos ({" "}
          <span className="emphasis color_principal">Ctrl+shift+P</span> ) para
          obter uma lista dos snippets no idioma atual do arquivo. No entanto,
          lembre-se de que esta lista também inclui snippets de usuário que você
          definiu e quaisquer snippets fornecidos por extensões que você
          instalou.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Instalar snippets do Marketplace</h2>
        <p>
          Muitas extensões no VS Code Marketplace incluem snippets. Você pode
          pesquisar extensões que contenham snippets na aba de Extensões ({" "}
          <span className="emphasis color_principal">Ctrl+Shift+X</span> )
          usando o filtro{" "}
          <span className="code2 underline">@category:"snippets"</span> no campo
          de busca.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Snippet/snippet-marketplace.png"
          alt="Adicionando um snippet de ajax."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Crie seus próprios trechos</h2>
        <p>
          Você pode definir facilmente seus próprios snippets sem qualquer
          extensão. Para criar ou editar seus próprios snippets, selecione{" "}
          <span className="emphasis">Configurar snippets do usuário</span> em{" "}
          <span className="emphasis">Arquivo {">"} Preferências</span> ({" "}
          <span className="emphasis">Código {">"} Preferências</span> no macOS)
          e selecione a linguagem de programação para o qual os snippets devem
          aparecer. Também existe a opção{" "}
          <span className="emphasis">Arquivo de novos snippets globais</span>,
          se eles deve aparecer para todos os idiomas. O VS Code gerencia a
          criação e a atualização dos arquivos de snippets subjacentes para
          você.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Snippet/snippet-select-language.png"
          alt="Adicionando um snippet de ajax."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Os arquivos de snippets são escritos em JSON, suportam comentários no
          estilo <span className="color_principal emphasis">C</span> e podem
          definir um número ilimitado de snippets. Os snippets suportam a
          maioria das sintaxes do TextMate para comportamento dinâmico, formatam
          espaços em branco de forma inteligente com base no contexto de
          inserção e permitem fácil edição de várias linhas.
        </p>
        <p>
          Abaixo está um exemplo de um trecho de código{" "}
          <span className="codeSnippet_2">for</span> de loop para JavaScript:
        </p>
      </TitleAndText>
      <CodeCard>
        <TitleAndText>
          <p>
            <span className="comment">
              // No arquivo 'Code/User/snippets/javascript.json'
            </span>
            <br />
            {"{"}
            <br />
            <span className="code1">"For Loop"</span> : {"{"}
            <br />
            <span className="code1">"prefix"</span> : {"["}
            <span className="code2">"for", "for-const"</span>
            {"]"},
            <br />
            <span className="code1">"body"</span> : {"["}
            <span className="code2">
              "for (const {"${"}2:element{"}"} of {"${"}1:array{"}"}) {"{"}",
              "\t$0", "{"}"}"
            </span>
            {"]"},
            <br />
            <span className="code1">"description"</span> :{" "}
            <span className="code2">"A for loop."</span>
            <br />
            {"}"}
            <br />
            {"}"}
          </p>
        </TitleAndText>
      </CodeCard>
      <TitleAndText>
        <p>No exemplo acima:</p>
        <div className="list">
            <ul>
              <li>
                <span className="codeSnippet_1">For Loop</span> é o nome do trecho. Ele é exibido via IntelliSense se
                nenhum <span className="code1">description</span> for fornecido, o que não é o caso acima.
              </li>
              <li>
                <span className="codeSnippet_1">prefix</span> define uma ou mais palavras de gatilho que exibem o trecho no
                IntelliSense. A correspondência de substring é executada em
                prefixos, portanto, neste caso, "fc" pode corresponder a
                "for-const".
              </li>
              <li>
                <span className="codeSnippet_1">body</span> é o conteúdo que sera inserido quando o snippet
                for executado, pode conter uma ou mais linhas de código. Novas
                linhas e guias incorporadas serão formatadas de acordo com o
                contexto em que o snippet é inserido.
              </li>
              <li>
                <span className="codeSnippet_1">description</span> é uma descrição opcional do trecho exibido pelo IntelliSense.
              </li>
            </ul>
        </div>
      </TitleAndText>
      <TitleAndText>
        <div id="annotation">
          <p>
            Explicando o body mais detalhadamente. O{" "}
            <span className="codeSnippet_2 small">$2</span> indica a posição
            inicial do cursor, o <span className="codeSnippet_2 small">$1</span>{" "}
            a segunda posição e <span className="codeSnippet_2 small">$0</span>{" "}
            a terceira, além de a string após o : (se houver) é o texto padrão
            que estará selecionado após o snippet se acionado. Você pode pular
            rapidamente para a próxima posição do cursor com o{" "}
            <span className="emphasis color_principal">Tab</span>. Na segunda
            linha temos o comando{" "}
            <span className="codeSnippet_2 small">\t</span> que indica a
            tabulação, ou seja em espaço entes de inserir o conteúdo, dando
            assim a indentação correta.
          </p>
        </div>
      </TitleAndText>

      <Footer />
    </>
  );
}
