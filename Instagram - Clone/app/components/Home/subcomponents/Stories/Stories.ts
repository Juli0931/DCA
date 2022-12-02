export enum AttributeStories {
    "pic" = "pic",
    "username" = "username"
}

class MyStory extends HTMLElement {
    pic?: any;
    username?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeStories, null> = {
            pic: null,
            username: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeStories,
        oldValue: string | undefined,
        newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/subcomponents/Stories/Stories.css">
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

customElements.define("my-stories", MyStory);
export default MyStory;