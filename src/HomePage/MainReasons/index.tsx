import TitleAndText from "@/src/TitleAndText";
import { StyledReasons } from "./components/StyledReasons";

export default function MainReasons() {
  return (
    <StyledReasons>
      <div className="title_reasons">
        <h2>Por que utilizar o VS Code?</h2>
      </div>
      <div className="frame_reasons">
        <div className="card_reasons">
          <div className="card_title">
            <div className="bg_img">
              <img src="img/Home/speed.png" alt="ícone velocidade" />
            </div>
            <h3>Velocidade</h3>
          </div>
          <TitleAndText>
            <p>
              <span className="emphasis">
                Primeiramente pelo fato de o editor não ficar no seu caminho.
              </span>{" "}
              Os ciclos de construção, edição e depuração ocorrem suavemente sem
              perder mais tempo mexendo no ambiente do que executando suas
              ideias.
            </p>
          </TitleAndText>
        </div>
        <div className="card_reasons">
          <div className="card_title">
            <div className="bg_img">
              <img src="img/Home/produtividade.png" alt="ícone produtividade" />
            </div>
            <h3>Produtividade</h3>
          </div>
          <TitleAndText>
            <p>
              <span className="emphasis">
                O editor de código-fonte do Visual Studio Code é ultrarrápido,
              </span>{" "}
              com foco na sintaxe, recuo automático, seleção de caixa, Snippets,
              entre outros. Possui diversos atalhos de teclado intuitivos e de
              fácil personalização. Todas essas características tornam o seu trabalho instantaneamente mais produtivo.
            </p>
          </TitleAndText>
        </div>
        <div className="card_reasons">
          <div className="card_title">
            <div className="bg_img">
              <img src="img/Home/debug-icon.png" alt="ícone velocidade" />
            </div>
            <h3>Depuração</h3>
          </div>
          <TitleAndText>
            <p>
              <span className="emphasis">
                Foi integrado ao VS Code uma ferramenta de depuração interativa,
              </span>{" "}
              o que permite percorrer o código-fonte, inspecionar variáveis,
              visualizar pilhas de chamadas e diversas outras funções.
            </p>
          </TitleAndText>
        </div>
        <div className="card_reasons">
          <div className="card_title">
            <div className="bg_img">
              <img
                src="img/Home/git-original.svg"
                alt="ícone velocidade"
              />
            </div>
            <h3>Controle de versões</h3>
          </div>
          <TitleAndText>
            <p>
              <span className="emphasis">
                O Visual Studio Code possui gerenciamento de controle de origem
                integrado (SCM)
              </span>{" "}
              e inclui suporte ao Git pronto para uso. Muitos outros provedores
              de controle de versão estão disponíveis através de extensões no VS
              Code Marketplace.
            </p>
          </TitleAndText>
        </div>
        <div className="card_reasons">
          <div className="card_title">
            <div className="bg_img">
              <img
                src="img/Home/terminal-icon.png"
                alt="ícone velocidade"
              />
            </div>
            <h3>Terminal</h3>
          </div>
          <TitleAndText>
            <p>
              <span className="emphasis">
                O Visual Studio Code inclui um terminal integrado com recursos
                completos
              </span>
              , que começa convenientemente na raiz do seu espaço de trabalho.
              Ele fornece integração com o editor para suportar recursos como
              links e detecção de erros.
            </p>
          </TitleAndText>
        </div>
        <div className="card_reasons">
          <div className="card_title">
            <div className="bg_img">
              <img
                src="img/Home/start-coding-icon.png"
                alt="ícone velocidade"
              />
            </div>
            <h3>Start coding</h3>
          </div>
          <TitleAndText>
            <p>
              Se você valoriza a ferramenta de desenvolvimento centrada no
              editor de código, e estiver criando aplicativos de nuvem e Web
              multiplataforma,{" "}
              <span className="emphasis">
                certamente vale a pena dar uma chance ao Visual Studio Code.
              </span>
            </p>
          </TitleAndText>
        </div>
      </div>
    </StyledReasons>
  );
}
