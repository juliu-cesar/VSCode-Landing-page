import { StyledFooter } from "./components/StyledFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="text_general">
        <a href="https://twitter.com/code" target={"_blank"}>
          Siga o @Code
        </a>
      </div>
      <div className="text_general">
        <a className="github_link" href="https://github.com/Microsoft/vscode/" target={"_blank"}>
          <img src="img/Header-Footer/github-icon.png" alt="ícone Github" />
          GitHub
        </a>
      </div>
      <div>
        <p className="text_small">Visual Studio Code by</p>
        <p className="text_small_2 windows_copy">
          <img src="img/Home/windows-icon.png" alt="ícone windows" /> &copy;
          2023 Microsoft
        </p>
      </div>
    </StyledFooter>
  );
}
