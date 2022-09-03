class MyProfile extends HTMLElement{
    static get observedAttributes(){
        return['picture', 'name', 'age', 'job', 'caption'];
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/Src/Components/Profile/Style.css">
        <div class="card">
            <img src="${this.picture}" alt="photo">
            <div class="contenido-card">
                <h3>${this.name}, ${this.age}</h3>
                <h4>${this.job}</h4>
                <p>${this.caption}</p>
                <div class="contenido-buttons">
                    <my-counter img="/Icons/Dislike.png"></my-counter>
                    <my-counter img="/Icons/Like.png"></my-counter>
                </div>  
            </div>
        </div>
        `;
    }
}

customElements.define("my-profile", MyProfile);
export default MyProfile;