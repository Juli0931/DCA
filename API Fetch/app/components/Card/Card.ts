export enum AttributeCard {
    "name" = "name",
    "birth_year" = "birth_year",
    "gender" = "gender",
    "height" = "height",
    "mass" = "mass"
}

class MyCard extends HTMLElement{
    name?: string;
    birth_year?: string;
    gender?: string;
    height?: string;
    mass?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeCard,null> = {
            name: null,
            birth_year: null,
            gender: null,
            height: null,
            mass: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeCard, 
        oldValue: string | undefined, 
        newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Card/Card.css">
            <section class="Container">
                <section class="Card">
                    <h2>${this.name}'s info is:</h2>
                    <p>Birth year: ${this.birth_year} <br> Gender: ${this.gender} <br> Height: ${this.height} <br> Mass: ${this.mass}</p>
                </section>
            </section>
            `
        }
    }

}

customElements.define("my-card", MyCard);
export default MyCard;