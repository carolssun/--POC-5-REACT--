
# <h1 align="center">POC 5 - React </h1>

## Sumário
* [Estrutura do Projeto NextJS](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#estrutura-do-projeto-nextjs)
  * [app](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#app)
  * [public](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#public)
  * [Arquivos de Configuração](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#arquivos-de-configura%C3%A7%C3%A3o)
* [Componentes Simples](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#cria%C3%A7%C3%A3o-de-componentes-simples)
  * [Botão](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#bot%C3%A3o)
  * [Banner](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#banner)
* [Estilo CSS](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#estilo-css-global-e-m%C3%B3dulo)
   * [Global](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#global)
   * [Modulo](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#m%C3%B3dulo)
* [Autoras](https://github.com/carolssun/--POC-5-REACT--?tab=readme-ov-file#autoras)

# Objetivo
Estaa Prova de Conceito (PoC) com React, usando uma página de adoção de gatos, ensina os principais recursos da biblioteca ao criar uma aplicação interativa. Vamos explorar componentes reutilizáveis para apresentar dados dos gatos, como nome e foto, e usar estados e props para gerenciar essas informações. Com essa PoC, o objetivo é aprender como React facilita a criação de uma interface rápida e escalável, tanto para web quanto mobile.

# O que é? 
`React` é uma biblioteca JavaScript destinada ao desenvolvimento de interfaces de usuário (UI) de maneira interativa e eficiente, especialmente em projetos web e mobile. No contexto de webmobile, React permite criar aplicações que operam tanto em navegadores quanto em dispositivos móveis, proporcionando interfaces responsivas e altamente interativas.


# Estrutura do Projeto NextJS 
## App
Desde a versão 13, Next.js introduziu o App Router como um novo sistema de roteamento. Essa pasta substitui a antiga pasta pages, que era usada para criar rotas com base em arquivos.Dentro da pasta app, cada subpasta representa uma rota. Esta pasta é essencial para aplicação, porque é onde são definidas as rotas e componentes principais e ela contem subpastas para melhorar a organização:

- **`components`**: Pasta exclusiva para componentes que serão reutilizados ao longo do projeto.
  
![image](https://github.com/user-attachments/assets/1409922c-dd97-49c1-8fd4-5ca17fa0c2bd)

  
- **`favicon.ico`**: Arquivo de ícone de favorito. Esse ícone é exibido na aba do navegador ao lado do título da página, nos favoritos, e também em outros lugares onde o site está.
- **`globals.css`**: Este arquivo contém os estilos globais da aplicação. No `globals.css`  os estilos são aplicados em todas as aplicações. É o local ideal para definir estilos universais, pois, ele é carregado uma vez e afeta todos os componentes e páginas da aplicação.
```css
.vai {
  display: flex;
  flex-wrap: wrap;
}
```

- **`layout.tsx`**: Arquivo de layout comum a todas as páginas, contendo a estrutura básica da aplicação, como cabeçalhos e rodapés.

- **`page.module.css`**: Arquivo de estilos escopados, utilizado para aplicar estilos específicos ao componente page.tsx.
```css
.main {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40pt;
}
```


- **`page.tsx`**: Este arquivo representa a página inicial da aplicação, mapeada para a rota raiz (`/`).  Ele inclui os componentes React e lógicas de renderização específicas para a página inicial, como por exemplo a chamada do components `"banner"` . O arquivo `page.tsx` é fundamental porque serve como o ponto de entrada padrão para a aplicação. Se outras rotas não forem especificadas, essa página será exibida por padrão.

```css
  import Banner from "./components/banner";
  import styles from "./page.module.css";

  export default function Home() {
  return (
    <main>
      <h1 className={styles.titulo}>Adote um gatinho!</h1>
      <section className={styles.main}>
        <Banner
          url="/images/branco.png"
          name="Reginaldo"
          description="gato branco"
          breed="Persa da Pérsia"
          age="2 anos"
          text="Reginaldo é um gatinho super carinhoso e tranquilo. Ele adora passar o dia relaxando em um lugar confortável e vai te acompanhar em todos os momentos, sempre pronto para receber carinho."
        />
        <Banner
          url="/images/calico.png"
          name="Tom"
          description="gato cálico"
          breed="Chita"
          age="1 ano"
          text="Tom é um gato independente, mas também valoriza seus momentos de carinho. Ele é muito adaptável e se dá bem com todos, sendo um ótimo companheiro tanto para famílias quanto para lares mais tranquilos."
        />
        <Banner
          url="/images/cinza.png"
          name="Luna"
          description="gato cálico"
          breed="Gato de pelo curto inglês"
          age="4 anos"
          text="Luna é cheia de energia e curiosidade! Ela está sempre em movimento, explorando o ambiente e brincando com qualquer coisa que encontrar. Um lar com muita atenção e diversão é ideal para essa gatinha ativa."
        />
        <Banner
          url="/images/marrom.png"
          name="Mia"
          description="gato marrom"
          breed="LaPerm"
          age="1 ano"
          text="Mia é uma gatinha muito afetuosa e adora estar perto das pessoas. Ela é perfeita para quem busca uma companhia amorosa, sempre pronta para dar e receber carinho."
        />
        <Banner
          url="/images/laranja.png"
          name="Felix"
          description="gato laranja"
          breed="Bobtail Americano"
          age="1 ano"
          text="Felix é um gatinho muito brincalhão e curioso. Ele ama aventuras e está sempre à procura de novos jogos e interações. Se você procura um gatinho que vai encher sua casa de alegria, Felix é o companheiro certo"
        />
      </section>
    </main>
  );
}

 ```
- **`template.tsx`** (opcional): Estruturas de página reutilizáveis que podem ser usadas para criar novas páginas.

- **`error.tsx `** (opcional): Componente que define como a aplicação lida com erros.

## public
A pasta public armazena arquivos estáticos, como imagens e fontes. Qualquer arquivo nesta pasta pode ser acessado diretamente através de uma URL.

![Captura de tela 2024-10-25 200240](https://github.com/user-attachments/assets/e2b42aec-5310-45d1-8e56-2c735d6ddff4)

## Arquivos de Configuração
- **`.eslintrc.json`**: Arquivo de configuração do ESLint, utilizado para garantir a qualidade do código, definindo regras de formatação e boas práticas.

- **`.gitignore`**: Arquivo que define quais arquivos e pastas devem ser ignorados pelo Git e Github, como node_modules e outos arquivos.

- **`next.config.js`**: Arquivo de configuração do `Next.js`, usado para customizar o comportamento do framework.

- **`package.json`**: Contém as dependências, scripts e metadados do projeto. Aqui você pode gerenciar pacotes e scripts de execução.

- **`pnpm-lock.yaml`**: Arquivo de bloqueio do PNPM, gerando um snapshot das dependências instaladas, garantindo consistência entre instalações.

- **`postcss.config.js`**: Arquivo de configuração do PostCSS, utilizado principalmente para processar e otimizar o CSS.

- **`README.md`**: é um arquivo importante em projetos, pois serve como uma documentação inicial e como um guia para quem está utilizando ou contribuindo com o projeto.

- **`tailwind.config.ts`**: Arquivo de configuração do Tailwind CSS, onde você pode personalizar o design do tema, adicionar plugins e definir as opções de estilo.

- **`tsconfig.json`**: Arquivo de configuração do TypeScript, que controla o comportamento do compilador TypeScript.

- **`node_modules`**: Pasta gerada automaticamente, que contém todas as dependências do projeto, como React, Next.js, etc.

***

# Criação de componentes simples

  Em React, os imports são essenciais para trazer componentes, hooks, e outras funcionalidades de bibliotecas ou arquivos para o seu projeto. Esses são alguns aspectos importantes sobre imports em React:

  ### Importação de Componentes:

   Você pode importar componentes de outros arquivos usando a sintaxe `import NomeDoComponente from ./Caminho/Para/Componente `. Isso permite que você reutilize componentes em diferentes partes da sua aplicação.

  ### Importação de Hooks:

   Hooks como `useState`, `useEffect`, etc., são importados da biblioteca React com import { useState, useEffect } from 'react'. Esses hooks permitem que você gerencie estado e efeitos colaterais em componentes funcionais.

  ### Importação de Bibliotecas:

   Além de componentes e hooks, você pode importar bibliotecas de terceiros, como axios para requisições HTTP ou react-router-dom para navegação em aplicações React.

  ### Importação de Estilos:

   Você pode importar arquivos `CSS` diretamente em seus componentes, como `import './Estilos.css'`, permitindo que você estilize seus componentes de forma modular.

  ### Importação de Imagens:

   É comum importar imagens para usar como recursos em componentes, por exemplo: `import imagem from './imagem.png'`.

## Botão
O componente simples desenvolvido para essa POC foi o botão de “Quero Adotar”, que quando selecionado fica com a aparência colorida.

Para gerar esse resultado, é necessário fazer uso de uma variável de estado, o userState, que é um hook do React. Ele permite que os componentes tenham um estado interno que armazena dois valores: o primeiro valor é o do estado atual e o segundo valor é uma função que permite atualizar o estado.

Além do userState, fizemos a importação do módulo de CSS para a estilização do botão e também utilizamos o “user client”, já que será realizada renderização pelo navegador como resposta a interação do usuário com a aplicação.
```js
"use client";
import styles from "./adoteButton.module.css";
import { useState } from "react";
```

A parte lógica que realiza a ação de manter o botão selecionado é o que a função AdoteButton() retorna. Nela, a variável de estado selected é iniciada como falso e, quando o componente é clicado, os elementos dentro do botão são alterados.

```js
export default function AdoteButton() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={
        selected
          ? styles.adoteButton + " " + styles.selected
          : styles.adoteButton
      }
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <img
        src={selected ? "./images/icon-laranja.png" : "./images/icon-white.png"} // renderização condicional
      />
      <p>Quero Adotar</p>
    </div>
  );
}
```
<div style="display: flex; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/2b963f92-206f-4f82-b5a1-c60956df8fbc" alt="Image 1" width="250"/>
  <img src="https://github.com/user-attachments/assets/29cd7857-026f-4561-9446-762af040ac41" alt="Image 2" width="250"/>
  <img src="https://github.com/user-attachments/assets/a11f8f0f-0913-45dd-9c9c-f2c05e7257c0" alt="Image 3" width="250"/>
</div>

## Banner
Em conjunto ao botão, foi desenvolvido um banner para que os gatos em adoção fossem identificados, no qual as principais informações do animal pudessem ser facilmente identificadas.
Nessa função, as informações são exigidas como parâmetros, facilitando a personalização para cada gato.

```
"use client"; // sempre que tiver eventos de interação com o usuário, colocar essa linha

import styles from "./banner.module.css";
import AdoteButton from "./adoteButton";

export default function Banner({ url, name, description, breed, age, text }) {
  return (
    <div className={styles.banner}>
      <img src={url} alt={description} />
      <h1>{name}</h1>
      <p>{breed}</p>
      <p>{age}</p>
      <p className={styles.text}>{text}</p>
      <AdoteButton />
    </div>
  );
}

```
<div style="display: flex; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/1abd8bd4-e019-4680-b669-150fb7c198a6" alt="Image 1" width="250"/>
  <img src="https://github.com/user-attachments/assets/ef231745-932d-4322-a8fb-d5446b2a51c3" alt="Image 2" width="250"/>
</div>

***

# Estilo CSS (global e módulo)
## Global
Configurações visuais globais do projeto.

```css
.main {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40pt;
}

```

## Módulo
Escolhemos fazer o botão e o banner como módulos, fazendo assim com que estivessem isolados e como resultado, não alterassem o CSS global.

### Botão
```css
.adoteButton {
  background-color: #f0f0f0;
  display: flex;
  width: 280px;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  border-radius: 30px;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

.adoteButton:hover {
  background-color: rgb(248, 210, 217);
}

.adoteButton img {
  width: 20%;
  height: auto;
  padding: 7px 0px;
}

.selected {
  background-color: pink;
  color: #fff;
}

```

### Banner 

```css
.banner {
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  margin: 10px;
  box-shadow: 1px 3px 2px rgb(255, 182, 193);
  background-color: #fff; /* Fundo branco dos cards */
}

.banner:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.banner img {
  width: 180px;
  height: 180px;
}

.text {
  text-align: justify;
  padding: 5px;
}

```

***

# Autoras
* Carolina Sun Ramos Nantes de Castilho 
* Clara Beatriz Aguiar 
* Erica Gonçalves de Oliveira
* Laura Carolina Balbachan dos Santos 



