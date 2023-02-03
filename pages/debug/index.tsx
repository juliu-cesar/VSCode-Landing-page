import CarouselMarketplace from "@/src/CarouselMarketplace";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import ImgCard from "@/src/ImgCard";
import TitleAndText from "@/src/TitleAndText";

export default function Debug() {
  return (
    <>
      <Header isHomePage={false} />
      <TitleAndText>
        <h1>Debugging</h1>
        <p>
          <span className="emphasis">
            Um dos principais recursos do Visual Studio Code é seu excelente
            suporte à depuração
          </span>
          . O depurador integrado do VS Code ajuda a acelerar sua edição,
          compilação e loop de depuração.
        </p>
      </TitleAndText>
      <ImgCard>
        <img
          src="img/Debug/debug-principal.png"
          alt="Aba de depurar aberta durante uma depuração."
        />
      </ImgCard>
      <TitleAndText>
        <h2>Debugging</h2>
        <p>
          O VS Code tem suporte de depuração integrado para o tempo de execução
          do Node.js e pode depurar JavaScript, TypeScript ou qualquer outra
          linguagem que seja transpilada para JavaScript.
        </p>
        <p>
          Para depurar outras linguagens em tempo de execução (incluindo PHP,
          Ruby, Go, C#, Python, C++ , PowerShell e muitos outros ), procure por
          extensões Debuggers no VS Code <span className="color_principal emphasis">Marketplace</span> ou selecione a opção
          Instalar depuradores adicionais no menu Executar na parte superior da
          janela.
        </p>
      </TitleAndText>
      <CarouselMarketplace />

      <Footer />
    </>
  );
}
