import * as Components from "./Components/Index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post pictureprofile="https://i.pinimg.com/originals/c2/4a/af/c24aaf49f7dc286dd0f7020a5bb820ac.png" user="Juliibc_" ubi="Lamentablemente, LATAM" content="https://i.pinimg.com/564x/ae/db/ff/aedbffb55bd3e4610a9456de30c4ef46.jpg" 
        likes="1363 Likes" description="Casi me pasa con esto pero digamos que es meme. <span>#Humor</span>" coments="View all 623 coments" date="2 DAYS AGO"></my-post>
        `;
    }
}

customElements.define("app-container",AppContainer);