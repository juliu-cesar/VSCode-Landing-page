import { StyledMain } from "./components/StyledBanner";

export default function Banner() {
  return (
    <StyledMain>
      <div className="main_title">
        <h1>Visual Studio Code</h1>
        <div className="subtitle_banner">
          <p>A simplicidade de um editor de código-fonte</p>
          <p>assimilada com poderosas ferramentas</p>
          <p>de desenvolvimento</p>
        </div>
      </div>
      <div className="buttons_banner">
        <a
          className="btn_downloadPrincipal"
          href="https://code.visualstudio.com/download"
        >
          Baixar Visual Studio Code
        </a>
        <a
          className="btn_webVersion"
          href="https://vscode.dev/"
          target={"_blank"}
        >
          Testar versão Web
        </a>
      </div>
      <img
        src="img/Home/vscode-svg-icon.svg"
        alt="Imagem principal logo Visual Studio Code"
      />
    </StyledMain>
  );
}
