import { StyledReasons } from "./components/StyledReasons";

export default function MainReasons(){

  return(
    <StyledReasons>
      <div className="title_reasons">
        <h2>Por que utilizar o VS Code?</h2>
      </div>
      <div className="card_reasons">
        <div className="card_title">
          <div className="bg_img"><img src="img/Home/speed.png" alt="ícone velocidade" /></div>
          <h3>Velocidade</h3>
        </div>
        <p><span className="text_main">Primeiramente pelo fato de o editor não ficar no seu caminho.</span> <span className="text_general">Os ciclos de construção, edição e depuração ocorrem suavemente sem perder mais tempo mexendo no ambiente do que executando suas ideias.</span></p>
      </div>
      <div className="card_reasons">
        <div className="card_title">
          <div className="bg_img"><img src="img/Home/produtividade.png" alt="ícone produtividade" /></div>
          <h3>Produtividade</h3>
        </div>
        <p><span className="text_main">O editor de código-fonte do Visual Studio Code é ultrarrápido,</span> <span className="text_general">com foco na sintaxe, recuo automático, seleção de caixa, Snippets, entre outros. Possui diversos atalhos de teclado intuitivos e de fácil personalização. Todas essas características tornam o seu trabalho instantaneamente mais produtivo.</span></p>
      </div>
      <div className="card_reasons">
        <div className="card_title">
          <div className="bg_img"><img src="img/Home/debug-icon.png" alt="ícone velocidade" /></div>
          <h3>Depuração</h3>
        </div>
        <p><span className="text_main">Foi integrado ao VS Code uma ferramenta de depuração interativa,</span> <span className="text_general">o que permite percorrer o código-fonte, inspecionar variáveis, visualizar pilhas de chamadas e diversas outras funções.</span></p>
      </div>
      <div className="card_reasons">
        <div className="card_title">
          <div className="bg_img"><img src="img/Home/start-coding-icon.png" alt="ícone velocidade" /></div>
          <h3>Start coding</h3>
        </div>
        <p className="text_main">Se você valoriza a ferramenta de desenvolvimento centrada no editor de código, e estiver criando aplicativos de nuvem e Web multiplataforma, certamente vale a pena dar uma chance ao Visual Studio Code.</p>
      </div>
    </StyledReasons>
  )
}