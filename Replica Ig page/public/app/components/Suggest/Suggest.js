export var AttributeSuggest;
(function (AttributeSuggest) {
    AttributeSuggest["pictureprofile"] = "pictureprofile";
    AttributeSuggest["user"] = "user";
})(AttributeSuggest || (AttributeSuggest = {}));
class MySuggest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            pictureprofile: null,
            user: null,
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
            <link rel="stylesheet" href="./app/components/Suggest/Suggest.css">
            <section class="suggestBoxContainer">
                <section class="suggestProfile">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                    <h3>Juliibc_ <br> <span>Juliana Buitrago</span></h3>
                </section>
                <section class="suggestText">
                    <h2>Suggestions for you</h2>
                    <h3>View all</h3>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80">
                        <h1>Koavinci <br> <span>Followed by Akhana.png and 23 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://images.unsplash.com/photo-1620456456327-264dbf934b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80">
                        <h1>Dilancanoli <br> <span>Followed by Jhojocor and 8 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80">
                        <h1>Anagudelo <br> <span>Followed by Mangobiche and 16 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>

            </section>`;
        }
    }
}
customElements.define("my-suggest", MySuggest);
export default MySuggest;
