import CarouselMarketplace from "@/src/CarouselMarketplace";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TitleAndText from "@/src/TitleAndText";

export default function Marketplace() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Marketplace</h1>
      </TitleAndText>
      <TitleAndText>
        <h2>Aumente o poder do Visual Studio Code por meio de extensões</h2>
        <p>
          Os recursos que o Visual Studio Code possui integrado são apenas o
          começo. As extensões do VS Code permitem adicionar idiomas,
          depuradores e ferramentas para auxiliar o seu fluxo de trabalho de
          desenvolvimento. O vasto modelo de extensibilidade do VS Code permite
          que os autores de extensão se conectem diretamente à IU do VS Code e
          contribuam com a funcionalidade por meio das mesmas APIs usadas pelo
          VS Code.
        </p>
      </TitleAndText>
      <CarouselMarketplace />
      <TitleAndText>
        <h2>Procurar extensões</h2>
        <p>
          Você pode navegar e instalar extensões de dentro do VS Code. Abra a
          aba de Extensões clicando no ícone Extensões na Barra de atividades na
          lateral esquerda ou no comando ({" "}
          <span className="emphasis color_principal">Ctrl+Shift+X</span> ).
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Marketplace/marketplace-search.png"
          alt="Aba de extensões abertas na seção de pesquisa e com a extensão 'Vetur' aberta."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Cada extensão na lista inclui uma breve descrição, o editor, a
          contagem de downloads e uma classificação de cinco estrelas. Você pode
          selecionar o item de extensão para exibir a página de detalhes da
          extensão onde você pode saber mais.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Encontre e instale uma extensão</h2>
        <p>
          Por exemplo, vamos instalar a popular extensão{" "}
          <span className="color_principal underline">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight"
              target={"_blank"}
            >
              TODO Highlight
            </a>
          </span>
          . Esta extensão destaca textos como 'TODO:' e 'FIXME:' em seu
          código-fonte para que você possa encontrar rapidamente as seções
          desfeitas.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Marketplace/marketplace-todo-extension.png"
          alt="Funcionamento da extensão 'TODO Highlight', que colore a parte do comentário que contem as palavras 'FIXME' e 'TODO'."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Na aba de Extensões digite 'todo' na caixa de pesquisa, isso ira
          filtrar as opções do Marketplace para apenas extensões com 'todo' no
          título ou nos metadados. Você deve ver a extensão{" "}
          <span className="emphasis">TODO Highlight</span> na lista.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Marketplace/marketplace-searching-todo.png"
          alt="Pesquisando pela extenção 'TODO Highlight' através da barra de pesquisa da aba de extensões."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Selecione o botão{" "}
          <span className="emphasis color_principal">Instalar</span> e o VS Code
          baixará e instalará a extensão do Marketplace. Quando a instalação
          estiver concluída, o botão Instalar será substituído pelo botão de{" "}
          <span className="emphasis color_principal">Gerenciar</span> com o
          ícone de uma engrenagem.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Marketplace/marketplace-after-install.png"
          alt="Destaque no ícone de engrenagem que apareceu no canto inferior direito do card da extensão apos a conclusão da instalação."
        />
      </ImgCard>
      <TitleAndText>
        <p>
          Se uma extensão for um{" "}
          <span className="emphasis">Pacote de Extensão</span>, na tela de
          detalhes será exibido todas as extensões do Pacote que serão
          instaladas.{" "}
          <span className="color_principal underline">
            <a
              href="https://marketplace.visualstudio.com/search?target=VSCode&category=Extension%20Packs&sortBy=Installs"
              target={"_blank"}
            >
              Os pacotes de extensão
            </a>
          </span>{" "}
          agrupam extensões separadas para que possam ser facilmente instaladas
          de uma só vez.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Marketplace/marketplace-extension-pack.png"
          alt="Pagina do pacote de extensão aberto, mostrando as extensões que serão instaladas."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Gerenciar extensões</h2>
        <p>
          O VS Code facilita o gerenciamento de suas extensões. Você pode
          instalar, desabilitar, atualizar e desinstalar extensões por meio da
          aba de Extensões na Paleta de Comandos ({" "}
          <span className="emphasis color_principal">Ctrl+Shift+P</span> ) ou
          das opções de linha de comando.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Atualização automática da extensão</h2>
        <p>
          O VS Code verifica se há atualizações de extensão e as instala
          automaticamente. Após uma atualização, você será solicitado a
          recarregar o VS Code. Se preferir atualizar suas extensões
          manualmente, você pode desabilitar a atualização automática com o
          comando{" "}
          <span className="emphasis">Disable Auto Updating Extensions</span> nas
          Configurações passando a opção{" "}
          <span className="codeSnippet_2">extensions.autoUpdate</span> para
          false. Se você não quiser que o VS Code verifique se há atualizações,
          defina a opção{" "}
          <span className="codeSnippet_2">extensions.autoCheckUpdates</span>{" "}
          como false.
        </p>
      </TitleAndText>
      <Footer />
    </>
  );
}
