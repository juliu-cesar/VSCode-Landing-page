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
      <ImgCard>
        <img src="img/Debug/debug-principal.png" alt="Aba de depurar aberta durante uma depuração." />
      </ImgCard>
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
      <ImgCard>
        <img src="img/Debug/debug-tab.png" alt="Localização do botão para abrir a aba de Depurar, situada na Barra de Atividade." />
      </ImgCard>
      <TitleAndText>
        <p>
          Se o depurador ainda não estiver configurado (nenhuma launch.json foi
          criada), o VS Code mostrará a opção{" "}
          <span className="emphasis">Iniciar e Depurar</span>, além de outras
          opções como para criar o arquivo{" "}
          <span className="code2 underline">launch.json</span>.
        </p>
      </TitleAndText>
      <ImgCard>
        <img src="img/Debug/debug-first-start.png" alt="Aba de depurar quando aberta pela primeira vez." />
      </ImgCard>
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
      <ImgCard>
        <img src="img/Debug/debug-create-launch.png" alt="Opção para criar o arquivo launch.json destacada, logo abaixo do botão 'Iniciar e Depurar'." />
      </ImgCard>
      <TitleAndText>
        <p>
          O VS Code tentará detectar automaticamente seu ambiente de depuração,
          mas se isso falhar, você terá que escolher manualmente:
        </p>
      </TitleAndText>
      <ImgCard>
        <img src="img/Debug/debug-select-language.png" alt="Janela para selecionar a linguagem de programação da depuração aberta." />
      </ImgCard>
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
          Assim que uma sessão de depuração for iniciada, a barra de Ferramentas
          de Depuração aparecerá na parte superior do editor.
        </p>
      </TitleAndText>
      <ImgCard>
        <img src="img/Debug/debug-actions.png" alt="Botões de ação da depuração, como 'proxima linha de código', 'entrar na função', entre outros." />
      </ImgCard>
      <Table thWidth={100} tdWidth={250}>
        <table>
          <thead>
            <tr>
              <th>Ação</th>
              <th>Explicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                Continuar / Pausar
                <br />
                <span className="emphasis">F5</span>
              </th>
              <td>
                <span className="emphasis">Continuar</span>: Retoma a execução
                normal do programa/script (até o próximo ponto de interrupção).
                <br />
                <span className="emphasis">Pausa</span>: inspecionar o código em
                execução na linha atual e depurar linha por linha.
              </td>
            </tr>
            <tr>
              <th>
                Passar
                <br />
                <span className="emphasis">F10</span>
              </th>
              <td>
                Execute o próximo método como um único comando sem inspecionar
                ou seguir as etapas de seus componentes.
              </td>
            </tr>
            <tr>
              <th>
                Entre no
                <br />
                <span className="emphasis">F11</span>
              </th>
              <td>
                Insira o próximo método para acompanhar sua execução linha por
                linha.
              </td>
            </tr>
            <tr>
              <th>
                Sair
                <br />
                <span className="emphasis">Shift+F11</span>
              </th>
              <td>
                Quando estiver dentro de um método ou sub-rotina, retorne ao
                contexto de execução anterior completando as linhas restantes do
                método atual como se fosse um único comando.
              </td>
            </tr>
            <tr>
              <th>
                Reiniciar
                <br />
                <span className="emphasis">Ctrl+Shift+F5</span>
              </th>
              <td>
                Encerre a execução do programa atual e inicie a depuração
                novamente usando a configuração de execução atual.
              </td>
            </tr>
            <tr>
              <th>
                Parar
                <br />
                <span className="emphasis">Shift+F5</span>
              </th>
              <td>Termina a execução do programa atual.</td>
            </tr>
          </tbody>
        </table>
      </Table>
      <Footer />
    </>
  );
}
