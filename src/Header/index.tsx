import Link from "next/link";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
import { StyledHeader } from "./components/StyledHeader";

interface Props {
  isHomePage: boolean;
}

export default function Header({ isHomePage }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  function dropdown() {
    setShowDropdown(showDropdown ? false : true);
  }
  return (
    <StyledHeader>
      <nav>
        <ul className="text_main">
          {!isHomePage && (
            <Link href={"/"}>
              <img
                className="btn_homePage"
                src="img/Header-Footer/vscode-svg-icon.svg"
                alt="Botão para voltar a pagina principal com o logo do VS Code."
              />
            </Link>
          )}
          <span>
            <button onClick={dropdown} style={{backgroundColor: "unset"}}>
              <li className="resources_menu">
                Funcionalidades
                <img
                  src="img/Header-Footer/expand-more-dropdown.svg"
                  alt="ícone dropdown do menu"
                />
              </li>
            </button>
            {showDropdown && (
              <>
                <Dropdown showDropdown={showDropdown} />
                <div id="CoverDisplay" onClick={dropdown}></div>
              </>
            )}
          </span>
          <Link href="/about">
            <li>Sobre</li>
          </Link>
          <Link href="/faq">
            <li>FAQ</li>
          </Link>
        </ul>
      </nav>
    </StyledHeader>
  );
}
