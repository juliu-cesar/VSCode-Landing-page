import Link from "next/link";
import { StyledHeader } from "./components/StyledHeader";

interface Props{
  isHomePage: boolean
}

export default function Header({isHomePage}:Props) {
  return (
    <StyledHeader>
      <nav>
        <ul className="text_main">
          {!isHomePage && 
          <Link href={"/"}><img className="btn_homePage" src="img/Header-Footer/vscode-svg-icon.svg" alt="Botão para voltar a pagina principal com o logo do VS Code." /></Link>
          }          
          <li className="resources_menu">
            Funcionalidades
            <img src="img/Header-Footer/expand-more-dropdown.svg" alt="ícone dropdown do menu" />
          </li>
          <Link href={"/about"}>
            <li>Sobre</li>
          </Link>
          <a href="">
            <li>FAQ</li>
          </a>
        </ul>
      </nav>
    </StyledHeader>
  );
}
