import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    this.dispatchEvent(event);
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section class="generalContainer">
        <section class="Mockup">
        <img src="https://thecybersafetylady.com.au/wp-content/uploads/2018/10/Screen-Shot-2018-10-05-at-2.09.37-pm-600x900.png">
        </section>
        <section class="Login">
        <link href="./components/Login/Login.css" rel="stylesheet">
            <img class="Logo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">
            <app-form></app-form>
            <h3>OR</h3>
            <h5 class="Blue">Log in with Facebook</h5>
            <h6 class="Blue">Forgot password?</h6>

        <section class="GoRegister">
            <p>Don't have an account? <t id="GoSignUp">Register</t></p>
        </section>

        <section class="Download">
            <p>Download the app</p>
            <img class="Store" src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png">
            <img class="Store" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png">
        </section>

        </section>
        </section>

        <section>
            <p class="GreySmall">Meta  About  Blog  Jobs  Help  API  Privacy  Terms  Top Accounts  Hashtags  Locations  Instagram  Lite  Contact Uploading & Non-Users  Dance  Food & Drink  Home & Garden  Music  Visual Arts</p>
            <p class="GreySmall">English ??  ?? 2022 Instagram from Meta</p>
        </section>
        
        `;
    }
}
customElements.define("app-login", Login);
