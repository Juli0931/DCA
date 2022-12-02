import { addPost } from "../../services/db.js";

export class  CreatePost extends HTMLElement{
    image = "";
    description = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=>{
            
            if(this.image && this.description) {
                const postData = {
                    image: this.image,
                    description: this.description
                }
                try {
                    await addPost(postData);
                    alert("Post created");

                    const event: CustomEvent = new CustomEvent("form-fullfilled",{composed: true});
                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    alert("An error occurred while creating the post");
                }
            } else {
                alert("Required fields");
            }
        });
        
        const imageInput = this.shadowRoot?.querySelector('#image');
        const descriptionInput = this.shadowRoot?.querySelector('#comment');

        imageInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.image = value;
        });

        descriptionInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.description = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
       <div class="form-container">
        <article>
        <link rel="stylesheet" href="./components/Form/Form.css">
           
            <div class="input">
                <input class="input__field" type="text" placeholder="Image" id="image"/>
            </div>
            <div class="input">
                <input class="input__field" type="text" placeholder="Comment" id="comment"/>
            </div>
            
            <button type="submit">Create post</button>
            
        </article>
        </div>
        `
    }
}

customElements.define("app-create-post", CreatePost);