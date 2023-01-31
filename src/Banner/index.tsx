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
          Baixar Visual Studio Code
        </button>
        <button className="btn_webVersion">Testar versão Web</button>
      </div>
      <img
        src="img/Home/vscode-svg-icon.svg"
        alt="Imagem principal logo Visual Studio Code"
      />
    </StyledMain>
  );
}
