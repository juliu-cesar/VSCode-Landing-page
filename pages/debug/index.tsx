import CarouselMarketplace from "@/src/CarouselMarketplace";
import CodeCard from "@/src/CodeCard";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import Table from "@/src/Table";
import TitleAndText from "@/src/TitleAndText";

export default function Debug() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Debugging</h1>
        <p>
          <span className="emphasis">
            Um dos principais recursos do Visual Studio Code é seu excelente
            suporte à depuração
          </span>
          . O depurador integrado do VS Code ajuda a acelerar sua edição,
          compilação e loop de depuração.
        </p>
      </TitleAndText>
      <ImgCard
        Src="debug-principal"
        Alt="Aba de depurar aberta durante uma depuração."
      />
      <TitleAndText>
        <h2>Debugging</h2>
        <p>
          O VS Code tem suporte de depuração integrado para o tempo de execução
          do Node.js e pode depurar JavaScript, TypeScript ou qualquer outra
          linguagem que seja transpilada para JavaScript.
        </p>
        <p>
          Para depurar outras linguagens em tempo de execução (incluindo PHP,
          Ruby, Go, C#, Python, C++ , PowerShell e muitos outros ), procure por
          extensões Debuggers no VS Code{" "}
          <span className="color_principal emphasis">Marketplace</span> ou
          selecione a opção Instalar depuradores adicionais no menu Executar na
          parte superior da janela.
        </p>
      </TitleAndText>
      <CarouselMarketplace />
      <TitleAndText>
        <h2>Aba de execução e depuração</h2>
        <p>
          Para abrir a aba de depuração, selecione o ícone{" "}
          <span className="emphasis">Executar e Depurar</span> na{" "}
          <span className="emphasis">Barra de Atividade</span> ao lado do VS
          Code. Você também pode usar o atalho de teclado{" "}
          <span className="emphasis color_principal">Ctrl+Shift+D</span>.
        </p>
      </TitleAndText>
      <ImgCard
        Src="debug-tab"
        Alt="Localização do botão para abrir a aba de Depurar, situada na Barra de Atividade."
      />
      <TitleAndText>
        <p>
          Se o depurador ainda não estiver configurado (nenhuma launch.json foi
          criada), o VS Code mostrará a opção{" "}
          <span className="emphasis">Iniciar e Depurar</span>, além de outras
          opções como para criar o arquivo{" "}
          <span className="code2 underline">launch.json</span>.
        </p>
      </TitleAndText>
      <ImgCard
        Src="debug-first-start"
        Alt="Aba de depurar quando aberta pela primeira vez."
      />
      <TitleAndText>
        <h2>Iniciar configurações</h2>
        <p>
          Para executar ou depurar um aplicativo simples no VS Code, selecione
          <span className="emphasis">Iniciar e Depurar</span> na aba inicial de
          depuração ou pressione{" "}
          <span className="emphasis color_principal">F5</span> e o VS Code
          tentará executar seu arquivo ativo no momento.
        </p>
        <p>
          No entanto, para a maioria dos cenários de depuração, criar um arquivo
          de configuração de inicialização é benéfico porque permite configurar
          e salvar detalhes de configuração de depuração. O VS Code mantém as
          informações de configuração de depuração no arquivo{" "}
          <span className="code2 underline">launch.json</span> na pasta{" "}
          <span className="color_principal">.vscode</span> em seu espaço de
          trabalho (pasta raiz do projeto) ou nas configurações do usuário.
        </p>
        <p>
          Para criar o arquivo{" "}
          <span className="code2 underline">launch.json</span>, clique no link{" "}
          <span className="emphasis">criar um arquivo launch.json</span>.
        </p>
      </TitleAndText>
      <ImgCard
        Src="debug-create-launch"
        Alt="Opção para criar o arquivo launch.json destacada, logo abaixo do botão 'Iniciar e Depurar'."
      />
      <TitleAndText>
        <p>
          O VS Code tentará detectar automaticamente seu ambiente de depuração,
          mas se isso falhar, você terá que escolher manualmente:
        </p>
      </TitleAndText>
      <ImgCard
        Src="debug-select-language"
        Alt="Janela para selecionar a linguagem de programação da depuração aberta."
      />
      <TitleAndText>
        <p>
          Abaixo temos uma configuração de inicialização gerada para depuração
          do Node.js:
        </p>
      </TitleAndText>
      <CodeCard>
        <TitleAndText>
          <p className="emphasis">
            &#123;
            <br />
            <span className="code1">"version"</span>:
            <span className="code2">"0.2.0"</span>
            <br />
            <span className="code1">"configurations"</span>:&#91;
            <br />
            &#123;
            <br />
            <span className="code1">"type"</span>:
            <span className="code2">"node"</span>,
            <br />
            <span className="code1">"request"</span>:
            <span className="code2">"launch"</span>,
            <br />
            <span className="code1">"name"</span>:
            <span className="code2">"Launch Program"</span>,
            <br />
            <span className="code1">"skipFiles"</span>:
            <span className="code2">
              &#91;"&#60;node_internals&#62;/**"&#93;
            </span>
            ,<br />
            <span className="code1">"program"</span>:
            <span className="code2">"$&#123;workspaceFolder&#125;\app.js"</span>
            ,<br />
            &#125;
            <br />
            &#93;
            <br />
            &#125;
          </p>
        </TitleAndText>
      </CodeCard>
      <TitleAndText>
        <h2>Ações de depuração</h2>
        <p>
        Assim que uma sessão de depuração for iniciada, a barra de Ferramentas de Depuração aparecerá na parte superior do editor.
        </p>
      </TitleAndText>
      <ImgCard
        Src="debug-actions"
        Alt="Botões de ação da depuração, como 'proxima linha de código', 'entrar na função', entre outros."
      />
      <Table>
        
      </Table>

      <Footer />
    </>
  );
}
