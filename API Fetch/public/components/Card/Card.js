export var AttributeCard;
(function (AttributeCard) {
    AttributeCard["name"] = "name";
    AttributeCard["birth_year"] = "birth_year";
    AttributeCard["gender"] = "gender";
    AttributeCard["height"] = "height";
    AttributeCard["mass"] = "mass";
})(AttributeCard || (AttributeCard = {}));
class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            name: null,
            birth_year: null,
            gender: null,
            height: null,
            mass: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Card/Card.css">
            <section class="Container">
                <section class="Card">
                    <h2>${this.name}'s info is:</h2>
                    <p>Birth year: ${this.birth_year} <br> Gender: ${this.gender} <br> Height: ${this.height} <br> Mass: ${this.mass}</p>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-card", MyCard);
export default MyCard;
