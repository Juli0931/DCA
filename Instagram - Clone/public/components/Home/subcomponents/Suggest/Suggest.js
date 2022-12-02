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
            <link rel="stylesheet" href="./components/Home/subcomponents/Suggest/Suggest.css">
            <section class="suggestBoxContainer">
                <section class="suggestProfile">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                    <h3>Juliibc_<br> <span>Juliana Buitrago</span></h3>
                </section>
                <section class="suggestText">
                    <h2>Suggestions for you</h2>
                    <h3>View all</h3>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://images.unsplash.com/photo-1620456456327-264dbf934b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80">
                        <h1>Jancarlo.gc <br> <span>Followed by valerialzate_ and 3 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80">
                        <h1>Gvr_22 <br> <span>Followed by Koavinci and 12 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://images.pexels.com/photos/12082485/pexels-photo-12082485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <h1>Hlhenshin <br> <span>Followed by juanezx7 and 69 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>

            </section>`;
        }
    }
}
customElements.define("my-suggest", MySuggest);
export default MySuggest;
