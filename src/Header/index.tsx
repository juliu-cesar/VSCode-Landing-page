import { StyledHeader } from "./components/StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul className="text_main">
          <li className="resources_menu">
            Funcionalidades
            <img src="img/Header-Footer/expand-more-dropdown.svg" alt="" />
          </li>
          <li>Sobre</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
