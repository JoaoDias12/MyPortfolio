////////////////////////////Texts/////////////////////////////////////
const TaboutMe = document.getElementById('TaboutMe')
const Tprojects = document.getElementById('Tprojects')
const Tnows = document.getElementById('Tnows')

const TchooseColor = document.getElementById('TchooseColor')

const welcomeIam = document.getElementById('welcomeIam')
const helloWorld = document.getElementById('helloWorld')

const aboutMeH = document.getElementById('aboutMeH')
const aboutMe = document.getElementById('aboutMe')

const myProjects = document.getElementById('myProjects')

const myProject1 = document.getElementById('myProject1')
const myProject2 = document.getElementById('myProject2')

const myKnowledge = document.getElementById('myKnowledge')

const myAmple = document.getElementById('myAmple')
const myMedium = document.getElementById('myMedium')
const myIntend = document.getElementById('myIntend')

const allDirects = document.getElementById('allDirects')

///////////////////////////////////////////////////////////////////////

const selectLanguage = document.getElementById('selectLanguage')
selectLanguage.addEventListener('change', function () {
  var selectedValue = selectLanguage.value

  switch (selectedValue) {
    case 'Portuguese':
      Portuguese()
      break
    case 'English':
      English()
      break
  }

  window.selectedValue = selectedValue
})

/////////////////////////////PortugueseBrazil///////////////////////////////////

function Portuguese() {
  let msgHello = 'Olá Mundo!'
  let msgWelcome = 'Bem Vindo, Eu sou João Vitor e esse é o meu Portifolio'

  helloWorld.textContent = msgHello

  var TimeLeft = 0
  var TimeDown = setInterval(function () {
    if (TimeLeft == 54) {
      clearInterval(TimeDown)
    }
    welcomeIam.textContent += msgWelcome.charAt(TimeLeft)
    TimeLeft += 1
  }, 80)

  msgAbout = 'Sobre Mim'
  msgProject = 'Projetos'
  msgNows = 'Conhecimentos'

  msgChooseC = 'Escolha a <span> cor </span> que prefirir'

  msgMyProjects = 'Meus Projetos'

  //#region

  msgAboutMe =
    'Olá! Meu nome é João Vitor Dias e tenho 17 anos. Sou apaixonado por programação e estou sempre buscando aprender coisas novas nessa área. Atualmente, estou focado em aprimorar minhas habilidades em <span>HTML, CSS</span> e <span>JavaScript</span>, mas também possuo um conhecimento básico em ferramentas como <span>Tailwind, Bootstrap, Node, React, PHP, MySQL, C#</span> e <span>jQuery</span>. Tive a oportunidade de estudar na <span>Rocketseat</span>, onde adquiri conhecimentos valiosos em desenvolvimento web. Além disso, fiz um mini curso de 17 horas no Crieseusjogos para aprender a utilizar a <span>Unity</span> , uma plataforma de desenvolvimento de jogos. Também completei outros mini cursos, como o de Lógica de Programação no <span>Senai</span> e o de Criação de um Site Simples com <span>HTML, CSS</span> e <span>JS</span> no <span>Bradesco</span>. Atualmente, estou cursando no <span>Cedaspy</span>, continuando minha jornada de aprendizado e aprimorando minhas habilidades em programação. Estou sempre em busca de desafios e oportunidades para colocar em prática o que aprendo. Acredito que a programação é uma forma poderosa de criar soluções e estou animado para continuar explorando esse campo incrível.'

  msgAboutMeHtml =
    'Olá! Gostaria de compartilhar minhas habilidades em HTML. Sou experiente na criação de sites usando HTML puro, especialmente em formulários interativos com <input>, <select> e <textarea>. Além disso, tenho conhecimentos em outros elementos do HTML, como listas, tabelas e links. Também possuo habilidades em CSS para melhorar a aparência visual das páginas. Estou sempre atualizado com as novas tecnologias e práticas em HTML. Se precisar de ajuda nessa área, estou à disposição!'

  msgAboutMeCss =
    'Olá! Sou especializado em CSS para criar estilos atraentes em páginas da web. Tenho experiência em animações usando @keyframes e posso adicionar movimento às páginas. Também sou habilidoso em criar layouts responsivos usando flexbox e grid. Estou atualizado com as últimas tendências e práticas em CSS. Se precisar de ajuda nessa área, estou à disposição!'

  msgAboutMeJs =
    'Olá! Tenho habilidades em JavaScript, incluindo estruturas de controle (if-else, switch) e laços de repetição (for, forEach). Também estou familiarizado com o uso do querySelector e querySelectorAll para manipular elementos do DOM. Já desenvolvi projetos como personalização de camisas, um Quiz, um jogo de tabuleiro com escolha de classe e raça, e um inventário interativo usando jQuery. Atualmente, estou trabalhando em um projeto de agenda personalizada com sistema de gacha, usando Electron.js. Também estou envolvido em um jogo de cartas de matemática com comunicação em tempo real usando Socket.IO. Estou sempre em busca de aprendizado e atualização em JavaScript. Se precisar de ajuda nessa área ou em projetos relacionados, estou à disposição!'

  msgAboutMeNode =
    'Olá! Gostaria de compartilhar minhas habilidades em Node.js. Tenho experiência no uso do Node.js para diversas finalidades, como a utilização do npm para gerenciamento de pacotes e dependências em meus projetos. Também utilizei o Node.js em conjunto com o Electron.js para desenvolver aplicações desktop. Além disso, utilizei o Socket.IO, que é uma biblioteca para comunicação em tempo real, com o Node.js para criar interações em tempo real em meus projetos. Estou familiarizado com as documentações e recursos relacionados ao Node.js e utilizo-os como referência para desenvolver minhas aplicações. Estou sempre aprendendo e explorando novas funcionalidades e bibliotecas do ecossistema do Node.js. Se você precisar de ajuda com Node.js, npm, Electron.js, Socket.IO ou qualquer outra documentação relacionada, estou à disposição para ajudar!'

  //#endregion

  //#region
  msgProject1 =
    'Decidi expandir meu conhecimento para o desenvolvimento de aplicativos e ao mesmo tempo organizar minha rotina, então tive a ideia de criar uma agenda personalizada. Como sou fã de gacha, pensei em tornar essa agenda não apenas uma ferramenta para gerenciar meu tempo, mas também uma forma divertida de colecionar novos personagens. Fiquei muito satisfeito com o design atual, mas ainda pretendo concluir e aprimorar ao máximo esse projeto.'

  msgProject2 =
    'Este foi um projeto que fiz principalmente para aprimorar minhas habilidades. Usei JavaScript e jQuery para permitir uma interação significativa do usuário com a personalização. A ideia de criar este site surgiu quando a proposta de camisetas para o 3º ano surgiu na minha escola. Como havia muita confusão e ninguém sabia ao certo o que queria, decidi criar este site para expressar melhor as ideias de cada um. No entanto, todos acabaram desistindo e acabei não dedicando muito tempo ao projeto. Mas, apesar disso, considero que o projeto ficou bastante interessante e pretendo aprimorá-lo significativamente no futuro.'
  //#endregion

  msgKnowledge = 'Meus Conhecimento'
  msgAmple = 'Conhecimento Amplo'
  msgMedium = 'Conhecimento Médio'
  msgIntend = 'Pretendo Estudar'

  msgDirects = 'Todos os direitos reservados.'

  //////////////////////EXECUÇÃO DA TRADUÇÃO//////////////////////////////

  TaboutMe.textContent = msgAbout
  Tprojects.textContent = msgProject
  Tnows.textContent = msgNows

  TchooseColor.innerHTML = msgChooseC

  aboutMe.innerHTML = msgAboutMe
  aboutMeH.innerHTML = msgAbout

  myProjects.innerHTML = msgMyProjects

  myProject1.innerHTML = msgProject1
  myProject2.innerHTML = msgProject2

  myKnowledge.textContent = msgKnowledge

  myAmple.textContent = msgAmple
  myMedium.textContent = msgMedium
  myIntend.textContent = msgIntend

  allDirects.textContent = msgDirects

  return {
    RmsgAboutMe: msgAboutMe,
    RmsgAboutMeHtml: msgAboutMeHtml,
    RmsgAboutMeCss: msgAboutMeCss,
    RmsgAboutMeJs: msgAboutMeJs,
    RmsgAboutMeNode: msgAboutMeNode
  }
}

/////////////////////////////English///////////////////////////////////

function English() {
  msgWelcome = 'Welcome, Im João Vitor and this is my Portfolio.'
  msgHello = 'Hello, World!'

  helloWorld.textContent = msgHello

  var TimeLeft = 0
  var TimeDown = setInterval(function () {
    if (TimeLeft == 54) {
      clearInterval(TimeDown)
    }
    welcomeIam.textContent += msgWelcome.charAt(TimeLeft)
    TimeLeft += 1
  }, 80)

  //////////////////////MENSAGENS//////////////////////////////
  msgAbout = 'About me'
  msgProject = 'Projects'
  msgNows = 'Knowledge'

  msgChooseC = 'Choose the <span> color </span> you prefer'

  //#region
  EmsgAboutMe =
    "Hello! My name is João Vitor Dias and I'm 17 years old. I am passionate about programming and I am always looking to learn new things in this area. Currently, I'm focused on improving my <span>HTML, CSS</span> and <span>JavaScript</span> skills, but I also have a basic understanding of tools like <span>Tailwind, Bootstrap, Node, React, PHP, MySQL, C#</span> and <span>jQuery</span>. I had the opportunity to study at <span>Rocketseat</span>, where I acquired valuable knowledge in web development. In addition, I took a 17-hour mini course on Createyourgames to learn how to use <span>Unity</span>, a game development platform. I also completed other mini courses, such as Programming Logic at <span>Senai</span> and Creating a Simple Website with <span>HTML, CSS</span> and <span>JS</span> at <span>Bradesco</span>. I am currently studying at <span>Cedaspy</span>, continuing my learning journey and improving my programming skills. I am always looking for challenges and opportunities to put what I learn into practice. I believe that programming is a powerful way to create solutions and I'm excited to continue exploring this amazing field."

  EmsgAboutMeHtml =
    "Hello! I would like to share my HTML skills. I am experienced in creating websites using pure HTML, especially in interactive forms with <input>, <select> and <textarea>. In addition, I have knowledge in other elements of HTML, such as lists, tables and links. I also have CSS skills to improve the visual appearance of pages. I am always up to date with new technologies and practices in HTML. If you need help in this area, I'm available!"

  EmsgAboutMeCss =
    "Hello! I specialize in CSS to create attractive styles on web pages. I have experience with animations using @keyframes and can add motion to pages. I'm also skilled at creating responsive layouts using flexbox and grid. I am up to date with the latest trends and practices in CSS. If you need help in this area, I am available!"

  EmsgAboutMeJs =
    "Hello! I have JavaScript skills, including control structures (if-else, switch) and loops (for, forEach). I'm also familiar with using querySelector and querySelectorAll to manipulate DOM elements. I have already developed projects such as customization of shirts, a Quiz, a board game with class and race choice, and an interactive inventory using jQuery. I'm currently working on a custom diary project with a gacha system, using Electron.js. I'm also involved in a math card game with real-time communication using Socket.IO. I'm always looking to learn and update JavaScript. If you need help in this area or on related projects, I'm here for you!"

  EmsgAboutMeNode =
    "Hello! I would like to share my Node.js skills. I have experience using Node.js for various purposes, such as using npm for package and dependency management in my projects. I also used Node.js in conjunction with Electron.js to develop desktop applications. Also, I used Socket.IO, which is a library for real-time communication, with Node.js to create real-time interactions in my projects. I am familiar with Node.js related documentation and resources and use them as a reference to develop my applications. I'm always learning and exploring new features and libraries in the Node.js ecosystem. If you need help with Node.js, npm, Electron.js, Socket.IO or any other related documentation, I'm happy to help!"

  //#endregion

  msgMyProjects = 'My Projects'

  //#region
  msgProject1 =
    "I decided to expand my knowledge to app development and at the same time organize my routine, so I had the idea of ​​creating a personalized schedule. Since I'm a gacha fan, I thought I'd make this diary not only a tool to manage my time, but also a fun way to collect new characters. I was very satisfied with the current design, but I still intend to complete and improve this project as much as possible."

  msgProject2 =
    "This was a project I did mainly to hone my skills. I used JavaScript and jQuery to allow for meaningful user interaction with the personalization. The idea of ​​creating this site came up when the proposal for t-shirts for the 3rd year came up at my school. As there was a lot of confusion and no one knew exactly what they wanted, I decided to create this site to better express everyone's ideas. However, everyone ended up giving up and I ended up not dedicating much time to the project. But despite that, I think the project turned out to be quite interesting and I intend to improve it significantly in the future."
  //#endregion

  msgKnowledge = 'My Knowledge'
  msgAmple = 'Broad Knowledge'
  msgMedium = 'Middle Knowledge'
  msgIntend = 'I intend to study'

  msgDirects = 'All rights reserved.'

  //////////////////////EXECUÇÃO DA TRADUÇÃO//////////////////////////////

  TaboutMe.textContent = msgAbout
  Tprojects.textContent = msgProject
  Tnows.textContent = msgNows

  TchooseColor.innerHTML = msgChooseC

  aboutMe.innerHTML = EmsgAboutMe
  aboutMeH.innerHTML = msgAbout

  myProjects.innerHTML = msgMyProjects

  myProject1.innerHTML = msgProject1
  myProject2.innerHTML = msgProject2

  myKnowledge.textContent = msgKnowledge

  myAmple.textContent = msgAmple
  myMedium.textContent = msgMedium
  myIntend.textContent = msgIntend

  allDirects.textContent = msgDirects

  return {
    ERmsgAboutMe: EmsgAboutMe,
    ERmsgAboutMeHtml: EmsgAboutMeHtml,
    ERmsgAboutMeCss: EmsgAboutMeCss,
    ERmsgAboutMeJs: EmsgAboutMeJs,
    ERmsgAboutMeNode: EmsgAboutMeNode
  }
}

setTimeout(function () {
  if (selectLanguage.value == '') {
    alert('Nenhuma Linguagem Selecionada, por padrão será Portugues')
    Portuguese()
  }
}, 50000)
