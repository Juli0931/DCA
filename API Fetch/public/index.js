var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/index.js";
import { getData } from "./data.js";
import { AttributeCard } from "./components/Card/Card.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.cards = [];
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield getData();
            console.log(data);
            data === null || data === void 0 ? void 0 : data.forEach((user) => {
                const card = this.ownerDocument.createElement('my-card');
                card.setAttribute(AttributeCard.name, user.name);
                card.setAttribute(AttributeCard.birth_year, user.birth_year);
                card.setAttribute(AttributeCard.gender, user.gender);
                card.setAttribute(AttributeCard.height, user.height);
                card.setAttribute(AttributeCard.mass, user.mass);
                this.cards.push(card);
            });
            this.render(data);
        });
    }
    render(data) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.cards.forEach((card) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
