import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TitleAndText from "@/src/TitleAndText";

export default function CodeNavigation() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Code Navigation</h1>
      </TitleAndText>
      <TitleAndText>
        <p>
          O Visual Studio Code possui um editor de código de alta produtividade
          que, quando combinado com serviços de linguagem de programação,
          oferece o poder de um IDE e a velocidade de um editor de texto.
        </p>
        <p>
          Neste tópico, primeiro descreveremos os recursos de inteligência de
          linguagem do VS Code (sugestões, dicas de parâmetro, navegação de
          código inteligente) e, em seguida, mostraremos o poder do editor de
          texto principal.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Ir para Definição</h2>
        <p>
          Se a linguagem de programação suportar, você pode ir para a definição
          de um símbolo pressionando{" "}
          <span className="color_principal emphasis">F12</span>.
        </p>
        <p>
          Se você pressionar Ctrl e passar o mouse sobre um símbolo, uma
          visualização da declaração aparecerá:
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Code_navigation/code-navigation-go-to-definition.png"
          alt="Tipos de símbolos que é possível utilizar o 'Ir para definição'"
        />
      </ImgCard>
      <TitleAndText>
        <h2>Breadcrumbs</h2>
        <p>
          O editor possui uma barra de navegação acima de seu conteúdo chamada{" "}
          <span className="emphasis">Breadcrumbs</span> . Ele mostra a
          localização atual e permite que você navegue rapidamente entre pastas,
          arquivos e símbolos.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Code_navigation/code-navigation-breadcrumb.png"
          alt="Barra de navegação tipo Breadcrumb na parte superior da pagina, logo abaixo do nome do arquivo atual"
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Selecionar uma trilha de navegação no caminho exibe uma lista suspensa
          com os irmãos desse nível para que você possa navegar rapidamente para
          outras pastas e arquivos.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Code_navigation/code-navigation-breadcrumb-2.png"
          alt="Clicando em um dos itens do Breadcrumb, uma lista é aberta, exibindo todos os irmãos dele que são possíveis navegar."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Espiar</h2>
        <p>
          Achamos que não há nada pior do que uma grande mudança de contexto
          quando tudo o que você quer é verificar algo rapidamente. Quando você
          executa uma pesquisa Go to References (via{" "}
          <span className="color_principal emphasis">Shift+F12</span> ), ou Peek
          Definition (via{" "}
          <span className="color_principal emphasis">Alt+F12</span> ),
          incorporamos o resultado inline:
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Code_navigation/code-navigation-peek.png"
          alt="Trecho de código de outro arquivo aberto no arquivo atual, logo abaixo do código onde foi utilizado o comando 'Ir para referencia' com a tecla de atalho ( Shift+F12 )"
        />
      </ImgCard>
      <TitleAndText>
        <h2>Renomear símbolo</h2>
        <p>
          A maioria das linguagens de programação suportam renomear símbolos
          entre arquivos. Pressione{" "}
          <span className="color_principal emphasis">F2</span> e digite o novo
          nome desejado e pressione <span className="emphasis">Enter</span>.
          Todas as ocorrências do uso do símbolo serão renomeados em todos os
          arquivos do projeto.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Code_navigation/code-navigation-rename.png"
          alt="Campo onde para renomear simbolo aberto logo abaixo do simbolo selecionado."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Ação de código</h2>
        <p>
          Avisos e erros podem fornecer ações de código (também conhecidas como
          correções rápidas) para ajudar a corrigir problemas. Estes serão
          exibidos no editor na margem esquerda como uma lâmpada. Clicar na
          lâmpada exibirá as opções de ação de código ou executará a ação.
        </p>
      </TitleAndText>
      <Footer />
    </>
  );
}
