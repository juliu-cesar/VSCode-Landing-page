# Landing Page com o tema "Principais motivos para utilizar o Visual Studio Code"

## Conceito

O intuito do projeto é de *vender* a ferramenta Visual Studio Code, apresentando os principais motivos para utilizar essa IDE. Conforme o usuário navega pelas paginas, mais motivos são apresentados, além de informações técnicas sobre o funcionamento do VS Code.

<div align="center">

  <img src="https://user-images.githubusercontent.com/121033909/218164533-77645be5-5401-4f64-9675-d94dd2a28525.png" height="700" />
  
</div>

## Design

<img src="https://user-images.githubusercontent.com/121033909/218165711-ae671012-7b07-44bf-b453-ae777dee69b4.png" height="250" align="right" />

Todos os estilos e disposição das paginas foram desenvolvidos no Figma no conceito de Mobile First, buscando uma pagina amigável ao usuário porem que ainda transmitisse o *ar* de uma pagina de documentação. Ao lado temos um exemplo da pagina Sobre. O projeto conta atualmente com 8 paginas além da pagina principal.

## Tecnologias utilizadas

<ul list-style="none">
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="17"/> Figma</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="17" /> React</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="17" /> TypeScript</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092081-8feb03b4-7444-4018-a550-e704a77bc53f.svg" height="17" /> Next</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092677-03759c36-3450-4cdb-be27-24e892913862.png" height="17"/> Styled Components</li>
</ul>

O **React** dispensa apresentações, uma das bibliotecas mais utilizadas para desenvolvimento web, sendo alguns dos motivos, o virtual DOM, evitando a renderização de toda a pagina a cada pequena atualização, o componentes reutilizáveis e encapsulados, a performance da aplicação, entre outros.

Que o **TypeScript** possui inúmeros benefícios, isso já é conhecido, porem para este projeto, como as paginas possuem pouco conteúdo passando entre componentes, essas vantagens não foram o foco. Porem ainda assim vale a pena.


<img src="https://user-images.githubusercontent.com/121033909/218168778-d2d3398e-c95e-40af-b8ed-af150cb9bc16.png" height="100" align="right" />
  
Com o **Next** é possível criar paginas estáticas, garantindo maior velocidade no carregamento, paginas geradas no lado do servidor(SSR), dessa forma ajudando os mecanismos de busca(SEO) a encontrar e ranquear o site, entre outros benefícios. O principal motivo para implementa-lo no projeto foi, que como uma Landing Page é uma pagina simples sem muito dinamismo, ela se beneficia bastante de uma renderização estática.


Já trabalhei anteriormente com a biblioteca **Styled Components**, e o fator mais interessante é poder estilizar um elemento no escopo dele mesmo, ou seja, o css utilizado nesse elemento, sera aplicado somente a ele e seus elementos filhos. Isso evita colisão de CSS, conflito de classes, CSS vazando para outros elementos, etc. Os seletores CSS também são outro diferencial, poder encapsular os elementos é uma mão na roda e garante que apenas o elemento selecionado tera aquele estilo.

<div align="center">
  
  <img src="https://user-images.githubusercontent.com/121033909/218092814-2cc80674-fd42-4e03-84fa-3baeac52bee2.png" height="500" />
  
</div>

> A disposição e os estilos da pagina foram adaptados para outras plataformas apos o projeto ficar pronto na versão Mobile.

### Comandos utilizados para criar o projeto

Na documentação do Next na parte do TypeScript, podemos encontrar o comando para criar uma projeto com React, Next e TypeScript disponibilizado pela Vercel.

```bash
npx create-next-app@latest --ts
```

#### Comandos para inciar o projeto

```bash
npm run dev
```
