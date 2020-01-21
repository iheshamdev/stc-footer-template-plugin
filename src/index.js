import './styles/main.scss'
import footerTemplate from './footer-template'
console.log('dev mode...');

// #1 Get all elements has `stc-footer` class
const stcFooterElements = document.querySelectorAll('.stc-footer');
stcFooterElements.forEach(el => {
    console.log(el.className);
    el.innerHTML = footerTemplate()
})
