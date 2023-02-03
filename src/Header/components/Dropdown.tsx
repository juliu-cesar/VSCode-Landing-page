import Link from "next/link";
import { useEffect } from "react";
import { StyledDropdown } from "./StyledDropdown";

interface Prop{
  showDropdown: boolean
}

export default function Dropdown({showDropdown}: Prop) {
  useEffect(() => {
    const dropdownLinks = document.querySelectorAll(
      ".Dropdown_nav div"
    ) as NodeListOf<HTMLElement>;
    dropdownLinks.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
      }, 30 * index);
    });
    return () => {
      if(showDropdown)return;
      console.log("entrou");
      
      for (let i = dropdownLinks.length - 1; i >= 0; i--) {
        const el = dropdownLinks[i];
        setTimeout(() => {
          el.style.opacity = "0";
        }, 30 * (dropdownLinks.length - i));
      }
    };
  }, []);

  return (
    <StyledDropdown className="Dropdown_nav">
      <Link href="/code-navigation">
        <div>Code Navigation</div>
      </Link>
      <Link href="/debug">
        <div>Debugging</div>
      </Link>
      <Link href="">
        <div>Emmet</div>
      </Link>
      <Link href="">
        <div>Intellisense</div>
      </Link>
      <Link href="">
        <div>Marketplace</div>
      </Link>
      <Link href="">
        <div>Snippets</div>
      </Link>
    </StyledDropdown>
  );
}
