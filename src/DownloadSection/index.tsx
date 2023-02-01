import { StyledDwSection } from "./components/StyledDwSection";

export default function DownloadSection() {
  return (
    <StyledDwSection>
      <div>
        <h3 className="subtitle">Baixar versão de computador</h3>
        <button className="btn_DwSection subtitle">Download</button>
        <div className="DwDescription">
          <p className="text_general">
            <img className="icon" src="img/Home/windows-icon.png" alt="ícone windows" />
            Windows
          </p>
          <p className="text_general">
            <img className="icon" src="img/Home/apple-icon.svg" alt="ícone Apple" />
            Mac
          </p>
          <p className="text_general">
            <img className="icon" src="img/Home/linux-icon.svg" alt="ícone Linux" />
            Linux
          </p>
        </div>
      </div>
      <div>
        <h3 className="subtitle">Utilizar versão para Web</h3>
        <button className="btn_WebVSection">VS Code Web</button>
        <div className="WebDescription">
          <p className="text_small">
            A versão Web fornece uma experiência gratuita e sem instalação.
            Executando diretamente no navegador, permite navegar entre
            repositórios e fazer leves alterações no código.
            <img className="icon" src="img/Home/web-icon.png" alt="ícone web" />
          </p>
        </div>
      </div>
    </StyledDwSection>
  );
}
