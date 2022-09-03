import * as components from './Components/IndexCOMP.js';
import data from './Components/data.js';

console.log(data);

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach(element => {
            this.shadowRoot.innerHTML += `
            <my-profile picture="${element.picture}" name="${element.name}" age="${element.age}" job="${element.job}" caption="${element.caption}"></my-profile>
            `; 
        });
    }
}

customElements.define('app-container', AppContainer);