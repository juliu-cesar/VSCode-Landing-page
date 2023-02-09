import CodeCard from "@/src/CodeCard";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import Table from "@/src/Table";
import TitleAndText from "@/src/TitleAndText";

export default function Emmet() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Emmet no Visual Studio Code</h1>
        <p>
          O suporte para snippets e expansão do Emmet é incorporado diretamente
          no Visual Studio Code, sem necessidade de extensão. O
          <span className="emphasis">Emmet 2.0</span> tem suporte para a maioria
          das ações do Emmet, incluindo a expansão de abreviações e trechos do
          Emmet.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Como expandir abreviaturas e snippets de Emmet</h2>
        <p>
          Ao começar a digitar uma abreviação Emmet, você verá a abreviação
          exibida na lista de sugestões. Se você tiver o fly-out da documentação
          de sugestões aberto, verá uma visualização da expansão enquanto
          digita. Se você estiver em um arquivo de folha de estilo, a abreviação
          expandida aparecerá na lista de sugestões classificada entre as outras
          sugestões de CSS.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Emmet/emmet-open.gif"
          alt="IntelliSense aberto com o emmet correspondente ao comando digitado."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          A abreviatura Emmet e as expansões de snippet são ativadas por padrão
          em{" "}
          <span className="code2 underline">
            html, haml, pug, slim, jsx, xml, xsl, css, scss,
          </span>{" "}
          e arquivos <span className="code2 underline">sass</span>, bem como
          qualquer idioma que herde de qualquer um dos itens acima.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Emmet quando as sugestões rápidas estão desativadas</h2>
        <p>
          Se você desativou a opção{" "}
          <span className="codeSnippet_2">editor.quickSuggestions</span> nas
          <span className="emphasis">configurações</span>, não verá as sugestões
          enquanto digita. Você ainda pode acionar as sugestões manualmente
          pressionando{" "}
          <span className="emphasis color_principal">Ctrl+Espaço</span>, assim
          exibindo as sugestões.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Emmet com multi-cursores</h2>
        <p>
          Você também pode usar a maioria das ações do Emmet com vários
          cursores:
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Emmet/emmet-multi-cursor.gif"
          alt="Multi cursores executando um emmet para tags 'li'."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Usando snippets Emmet personalizados</h2>
        <p>
          Os snippets personalizados do Emmet precisam ser definidos em um
          arquivo json chamado{" "}
          <span className="code2 underline"> snippets.json</span>. Na
          configuração{" "}
          <span className="codeSnippet_2"> emmet.extensionsPath</span> deve ter
          o caminho para o diretório desse arquivo.
        </p>
        <p>
          Abaixo está um exemplo para o conteúdo do arquivo{" "}
          <span className="code2 underline">snippets.json</span>.
        </p>
      </TitleAndText>
      <CodeCard>
        <TitleAndText>
          <p>
            &#123;
            <br />
            <span className="code1">"html"</span>:&#123;
            <br />
            <span className="code1">"snippets"</span>:&#123;
            <br />
            <span className="code1">"ull"</span>:
            <span className="code2">
              "
              {
                "ul>li[id=${1} class=${2}]*2{ Will work with html, pug, haml and slim }"
              }
              "
            </span>
            ,
            <br />
            <span className="code1">"oll"</span>:
            <span className="code2">
              "{"<ol><li id=${1} class=${0}> Will only work in html </ol>"}"
            </span>
            ,
            <br />
            <span className="code1">"ran"</span>:
            <span className="code2">
              "{"{ Wrap plain text in curly braces }"}"
            </span>
            ,
            <br />
            &#125;
            <br />
            &#125;,
            <br />
            <span className="code1">"css"</span>:&#123;
            <br />
            <span className="code1">"snippets"</span>:&#123;
            <br />
            <span className="code1">"cb"</span>:
            <span className="code2">"color: black"</span>,
            <br />
            <span className="code1">"bsd"</span>:
            <span className="code2">"{"border: 1px solid ${1:red}"}"</span>,
            <br />
            <span className="code1">"ls"</span>:
            <span className="code2">"{"list-style: ${1}"}"</span>
            <br />
            &#125;
            <br />
            &#125;
            <br />
            &#125;
          </p>
        </TitleAndText>
      </CodeCard>
      <TitleAndText>
        <p>
          A criação de trechos personalizados no Emmet 2.0 por meio do arquivo{" "}
          <span className="code2 underline">snippets.json</span> difere da
          maneira antiga de fazer o mesmo de algumas maneiras:
        </p>
      </TitleAndText>
      <Table thMinMiWidth={100} tdMinWidth={150} td2MinWidth={300}>
        <table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Velho Emmet</th>
              <th>Emmet 2.0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Snippets x Abreviaturas</th>
              <td>
                <TitleAndText>
                  Suporta ambos em 2 propriedades separadas chamadas{" "}
                  <span className="code2 underline">snippets</span> e{" "}
                  <span className="code2 underline">abbreviations</span>.
                </TitleAndText>
              </td>
              <td>
                <TitleAndText>
                  Os 2 foram combinados em uma única propriedade chamada
                  snippets.{" "}
                  <span className="code1 underline">Ver snippets de HTML</span>{" "}
                  padrão e{" "}
                  <span className="code1 underline">snippets de CSS</span>.
                </TitleAndText>
              </td>
            </tr>
            <tr>
              <th>Nomes de trechos CSS</th>
              <td>
                <TitleAndText>
                  pode conter <span className="codeSnippet_2 emphasis">:</span>
                </TitleAndText>
              </td>
              <td>
                <TitleAndText>
                  Não use <span className="codeSnippet_2">:</span> ao definir
                  nomes de trechos. Ele é usado para separar o nome e o valor da
                  propriedade quando o Emmet tenta fazer uma correspondência
                  difusa da abreviação fornecida com um dos trechos.
                </TitleAndText>
              </td>
            </tr>
            <tr>
              <th>Valores de fragmentos de CSS</th>
              <td>
                <TitleAndText>
                  pode terminar com <span className="codeSnippet_2 emphasis">;</span>
                </TitleAndText>
              </td>
              <td>
                <TitleAndText>
                  Não adicione <span className="codeSnippet_2">;</span> no final
                  do valor do snippet. O Emmet adicionará o rastreamento ; com
                  base no tipo de arquivo (css/less/scss vs sass/stylus) ou a
                  preferência do emmet definida para{" "}
                  <span className="code2 underline">
                    css.propertyEnd, sass.propertyEnd, stylus.propertyEnd
                  </span>
                  .
                </TitleAndText>
              </td>
            </tr>
            <tr>
              <th>Localização do cursor</th>
              <td>
                <TitleAndText>
                  <span className="code2 underline">{"${cursor}"}</span> ou{" "}
                  <span className="codeSnippet_2 emphasis">`</span>
                </TitleAndText>
              </td>
              <td>
                <TitleAndText>
                  <span className="codeSnippet_2">`</span> pode ser usado.
                </TitleAndText>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
      <Footer />
    </>
  );
}
