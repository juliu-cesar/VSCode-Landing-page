import { StyledHeader } from "./components/StyledHeader";

interface Props{
  isHomePage: boolean
}

export default function Header({isHomePage}:Props) {
  return (
    <StyledHeader>
      <nav>
        <ul className="text_main">
          {isHomePage && <img className="btn_homePage" src="img/Header-Footer/vscode-svg-icon.svg" alt="Botão para voltar a pagina principal com o logo do VS Code." />}          
          <li className="resources_menu">
            Funcionalidades
            <img src="img/Header-Footer/expand-more-dropdown.svg" alt="ícone dropdown do menu" />
          </li>
          <a href="">
            <li>Sobre</li>
          </a>
          <a href="">
            <li>FAQ</li>
          </a>
        </ul>
      </nav>
    </StyledHeader>
  );
}
