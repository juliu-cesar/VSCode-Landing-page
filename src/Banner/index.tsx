import { StyledMain } from "./components/StyledBanner";

export default function Banner() {
  return (
    <StyledMain>
      <h1>Visual Studio Code</h1>
      <p>A simplicidade de um editor de código-fonte</p>
      <p>assimilada com poderosas ferramentas</p>
      <p>de desenvolvimento</p>
      <div>
        <button className="btn_downloadPrincipal">
          <a href="https://code.visualstudio.com/download">
            Baixar Visual Studio Code
          </a>
        </button>
        <button className="btn_webVersion">
          <a href="https://vscode.dev/" target={"_blank"}>
            Testar versão Web
          </a>
        </button>
      </div>
      <img
        src="img/Home/vscode-svg-icon.svg"
        alt="Imagem principal logo Visual Studio Code"
      />
    </StyledMain>
  );
}
