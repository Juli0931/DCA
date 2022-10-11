export class Home extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <h1>OMG, NO PUEDO CREER QUE FUNCIONE</h1>
        <h3>Mientras yo chillo de la felicidad, tú mira un meme</h3>
        <img src="https://i.pinimg.com/564x/8c/4d/aa/8c4daa8e37b65cdf12d386b3658ff928.jpg">`
    }
}

customElements.define("app-home",Home);