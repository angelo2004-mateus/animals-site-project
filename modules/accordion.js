export default function initAccordion() {


    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active';
    
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    
    function activeAcordion() {
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass)
    }
    
    accordionList.forEach((item) => {
        item.addEventListener('click',  activeAcordion);
    })

}