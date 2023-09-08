export default function initModal() {
    
    const btnOpen = document.querySelector('[data-modal="abrir"]');
    const btnClose = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]')


    if(btnOpen && btnClose && containerModal) {

    function openModal(e) {
        e.preventDefault()
        containerModal.classList.add('ativo')
    }

    function closeModal(e) {
        containerModal.classList.remove('ativo')    
    }

    function cliqueForaModal(e) {
        if(e.target === this) // this é a variavel a quem passamos a função ou seja, é a containerModa 
            closeModal()
    }

    btnOpen.addEventListener('click', openModal);
    btnClose.addEventListener('click', closeModal)
    containerModal.addEventListener('click', cliqueForaModal)

    }
}

