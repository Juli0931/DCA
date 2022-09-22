export var AttributeStories;
(function (AttributeStories) {
    AttributeStories["pic"] = "pic";
    AttributeStories["username"] = "username";
})(AttributeStories || (AttributeStories = {}));
class MyStories extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            pic: null,
            username: null
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
            <link rel="stylesheet" href="./app/components/Stories/Stories.css">
            <section class="Container">
                <section>
                    <img src="${this.pic}" alt="PicStories">
                    <p>${this.username}</p>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-stories", MyStories);
export default MyStories;
