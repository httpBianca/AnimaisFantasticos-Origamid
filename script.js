/*---- JS da parte de Animais Fantasticos (Lista de fotos e Seção de texto) Navegação por tab ---- */

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo') //primeiro ele limpa/retira, tirando a classe ativo de todos os elementos dessa div com o forEach.
            })
            tabContent[index].classList.add('ativo'); //depois ele adiciona a classe ativo de acordo com o index, ou seja, a posição que ele se encontra no array
        }

        tabMenu.forEach((itemMenu, index) => { //itemMenu item do array tabMenu, index é a posição em que ele se encontra
            itemMenu.addEventListener('click', () => { //adiciona um evento a cada item.
                activeTab(index); //Função que executa outra função que recebe como argumento o index
            })
        });
    }
}

initTabNav(); //chamando a função, foi colocado todo o codigo dentro de uma função para isolar o mesmo, visto que pode ocorrer de querer criar uma variavel com o mesmo nome já criado.


/* ---- JS da parte FAQ (Perguntas e Respostas) com accordion List ---- */

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt'); //Pega todos dt de dentro da classe js-accordion
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.toggle(activeClass); //primeiro dt
        accordionList[0].nextElementSibling.classList.toggle(activeClass); 
        //irmão/proximo elemento depois do dt


        function activeAccordion() {
            this.classList.toggle(activeClass); //toggle- se tiver a classe ele remove e se não tiver ele adiciona
            this.nextElementSibling.classList.toggle(activeClass);
        }


        accordionList.forEach((item) => { //Vai rodar a função acima toda vez que clicar em um dt(uma pergunta)
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

/* ---- Js da parte do Nav, Scroll Suave ---- */

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    //Todo a(link) com o href começado com # (link interno)

    function scrollToSection(event) {
        event.preventDefault(); /*esse metodo impede a ação padrão de um elemento. Por exemplo: Se usar esse metodo em um checkbox, ao apertar no mesmo ele não irá fazer sua ação normal que é checar*/

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        //scroll suave com scrollIntoView
        section.scrollIntoView({
            behavior: 'smooth', //comportamento, smooth- animada suavemente
            block: 'start',
        });

        //forma alternativa de scroll suave com scrollTo

        /*
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });*/
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();
