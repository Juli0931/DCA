import "./components/index.js";
import { getData } from "./data.js";

import MyCard, { AttributeCard } from "./components/Card/Card.js";

class AppContainer extends HTMLElement{
    cards: MyCard[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const data = await getData();
        console.log(data);

        data?.forEach((user) => {
            const card = this.ownerDocument.createElement('my-card') as MyCard;
            card.setAttribute(AttributeCard.name, user.name);
            card.setAttribute(AttributeCard.birth_year, user.birth_year);
            card.setAttribute(AttributeCard.gender, user.gender);
            card.setAttribute(AttributeCard.height, user.height);
            card.setAttribute(AttributeCard.mass, user.mass);
            this.cards.push(card);
        });
        this.render(data);
    }

    render(data:any){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.cards.forEach((card)=>{
                this.shadowRoot?.appendChild(card);
            })
        }
    }
}

customElements.define("app-container",AppContainer);