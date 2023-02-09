import CarouselAbout from "@/src/About/CarouselAbout";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TitleAndText from "@/src/TitleAndText";

export default function About() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>A ferramenta VS Code</h1>
        <p>
          <span className="emphasis">
            O Visual Studio Code é um editor de código-fonte leve mas poderoso
          </span>
          , executado em sua área de trabalho e disponível para Windows, macOS e
          Linux. Ele vem com suporte integrado para JavaScript, TypeScript e
          Node.js e possui um rico ecossistema de extensões para outras
          linguagens e tempos de execução (como C++, C#, Java, Python, PHP, Go,
          .NET)
        </p>
      </TitleAndText>
      <CarouselAbout />
      <TitleAndText>
        <h2>História</h2>
        <p>
          A Microsoft anunciou o Visual Studio Code em 2015 na conferencia
          Microsoft Build. Pouco tempo depois lançou a primeira compilação de
          visualização.
        </p>
        <p>
          No final do mesmo ano, o código fonte do VS Code foi disponibilizada
          com a licença MIT no GitHub, e o suporte de extensão também foi
          anunciado. No inicio de 2016 o Visual Studio Code foi lançado na Web.
        </p>
      </TitleAndText>
      <TitleAndText>
        <h2>Recepção</h2>
        <p>
          Em 2016 pela Stack Overflow na categoria de IDE mais utilizada, o
          Visual Studio Code ficou em 13° lugar, com apenas 7,2% dos 47.000
          entrevistados. Em 2018, o VS Code ficou em primeiro lugar, com 35% dos
          mais de 100.000 entrevistados. Na pesquisa de 2019, também ficou em
          primeiro com 50% dos quase 90.000 entrevistados. Na pesquisa de 2022,
          o VS Code subiu ainda mais sua porcentagem chegando a 74,48% das
          71.010 entrevistados.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/About/stack-overflow-graph.png"
          alt="Gráfico Stack Overflow com as principais IDEs utilizados no ano de 2021"
        />
      </ImgCard>
      <TitleAndText>
        <div id="annotation">
          <p>
            Desde 2011 todos os anos o Stack Overflow faz uma pesquisa de
            desenvolvedores para saber as principais informações sobre essa
            área, como qual a IDE mais utilizada, quanta cafeína é consumida,
            qual o salario por linguagem de programação, entre outros.{" "}
          </p>
        </div>
      </TitleAndText>
      <Footer />
    </>
  );
}
