import CarouselAbout from "@/src/About/CarouselAbout";
import Header from "@/src/Header";
import TitleAndText from "@/src/TitleAndText";

export default function About(){

  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>A ferramenta VS Code</h1>
        <p><span className="emphasis">O Visual Studio Code é um editor de código-fonte leve mas poderoso</span>, executado em sua área de trabalho e disponível para Windows, macOS e Linux. Ele vem com suporte integrado para JavaScript, TypeScript e Node.js e possui um rico ecossistema de extensões para outras linguagens e tempos de execução (como C++, C#, Java, Python, PHP, Go, .NET)</p>
      </TitleAndText>
      <CarouselAbout />
    </>
  )
}