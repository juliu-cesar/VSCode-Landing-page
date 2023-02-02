import { StyledCrAbout } from "./components/StyledCrAbout";

export default function CarouselAbout() {
  return (
    <StyledCrAbout>
      <div className="container">
        <div className="frame_crAbout">
          <div className="carousel_about">
            <div className="card_crAbout">
              <div className="frame_img_crAbout">
                <img
                  src="img/About/intelligent-code-about.png"
                  alt="linha de código sendo digitada e o IntelliSense aberto mostrando possíveis conclusões de códigos."
                />
              </div>
              <div className="frame_text_crAbout">
                <h3>Conclusão de código inteligente</h3>
                <p>
                  Codifique de forma mais inteligente com o{" "}
                  <a href="">IntelliSense</a> - conclusões para variáveis,
                  métodos e módulos importados.
                </p>
              </div>
            </div>
            <div className="card_crAbout">
              <div className="frame_img_crAbout">
                <img
                  src="img/About/debug-about.png"
                  alt="Aba de depurar aberta com os principais comandos durante a depuração, como Próximo comando, Entrar na função, entre outros."
                />
              </div>
              <div className="frame_text_crAbout">
                <h3>Depuração simplificada</h3>
                <p>
                  A depuração de impressão ficou no passado.{" "}
                  <a href="">Depure</a> no VS Code com suas ferramentas de
                  terminal.
                </p>
              </div>
            </div>
            <div className="card_crAbout">
              <div className="frame_img_crAbout">
                <img
                  src="img/About/fast-editing-about.png"
                  alt="Editando linhas de código com múltiplos cursores."
                />
              </div>
              <div className="frame_text_crAbout">
                <h3>Edição rápida e poderosa</h3>
                <p>
                  Linting , edição com vários cursores, dicas de parâmetros e
                  outros recursos de edição poderosos
                </p>
              </div>
            </div>
            <div className="card_crAbout">
              <div className="frame_img_crAbout">
                <img
                  src="img/About/peek-about.png"
                  alt="Trecho de código de outro arquivo aberto no arquivo atual, logo abaixo do código onde foi utilizado o comando 'Ir para referencia' com a tecla de atalho ( Shift+F12 )"
                />
              </div>
              <div className="frame_text_crAbout">
                <h3>Navegação de código e refatoração</h3>
                <p>
                  Navegue pelo seu código-fonte rapidamente usando peek e
                  <a href="">navegue até a definição</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ButtonsCrAbout">
          <button className="active"></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </StyledCrAbout>
  );
}
