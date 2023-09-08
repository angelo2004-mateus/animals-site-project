export default function initToolTip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
});


function onMouseOver(event) {
    const tooltipBox = createToolTipBox(this)
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';

    onMouseLeave.toolTipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave)
}

const onMouseLeave = {
    toolTipBox: '',
    handleEvent() {
        this.toolTipBox.remove()
    }
}

function createToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox)
    return toolTipBox
}