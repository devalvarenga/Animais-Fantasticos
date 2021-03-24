function initTabNav() {
    // isolando a funçao de forma simples
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');
        
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((intemMenu, index) => {
            intemMenu.addEventListener('click', function(){
                activeTab(index);
            });
        });
    }
}
initTabNav(); // para a função funcionar precisa ser inivciada 


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionList.length) {
    accordionList[0].classList.add('activeClass');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
        //console.log(this);
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
    }
}
initAccordion();

//srcollSuave 

//function initScrollSuave() {
//    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
//
//    function scrollToSection(event) {
//        event.preventDefault();
//        const href = event.currentTarget.getAttribute('href');
//        const section = document.querySelectorAll(href);
//
//        section.scrollIntoview({
//            behavior: 'smooth',
//            block: 'start',
//        });
//        
//        // forma alternativa
//        //const topo = section.offsetTop;
//        //window.scrollTo({
//        //    top: topo,
//        //    behavior: 'smooth',
//        //});
//    }
//
//    linksInternos.forEach((link) => {
//        link.addEventListener('click', scrollToSection);
//    });
//}
//initScrollSuave();


function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
                section.classList.add('ativo');
            else 
                section.classList.remove('ativo');
        })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();

 