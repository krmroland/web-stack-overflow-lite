import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

/**
 * HTML Tag for representing the author details
 */
class AuthorDetails extends HTMLElement {
    /**
     * Creates an instance of this class
     * @return {self}
     */
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.setStyleNode().setContentNodes();
    }
    /**
     * Element attributes to be observed for changes
     * @return {Array}
     */
    static get observedAttributes() {
        return ["when", "name"];
    }
    /**
     * Handle for when a given element attribute changes
     * @param  {String} name
     * @param  {String} oldValue
     * @param  {String} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    /**
     * Sets the time when the author made this change
     * @param  {String} time
     */
    set when(time) {
        this.whenNode.textContent =
            distanceInWordsToNow(time, { includeSeconds: true }) + " ago";
    }
    /**
     * Sets the name of the author
     * @param  {String} name
     */
    set name(name) {
        this.nameNode.textContent = name;
    }
    /**
     * Sets the elements style node
     */
    setStyleNode() {
        this.styleNode = document.createElement("style");
        this.styleNode.textContent = `
            div{
               font-size:1.2rem;
               display:flex;
               justify-content:flex-end;
               flex-wrap:wrap;
               font-size:var(--font-small);
               color:var(--grey-dark);
               border-top:1px solid var(--light);
               padding-top:0.5em;
            }
            #when{
                font-weight:600;
            }
            .px-2{
              padding-left:1.5em;
              padding-right:0.5em;
            }

        `;
        this.shadowRoot.appendChild(this.styleNode);
        return this;
    }
    /**
     * Sets the content Node
     */
    setContentNodes() {
        const contentNode = document.createElement("div");
        contentNode.innerHTML = `
            <span id="when"></span>
            <span class="px-2">By</span>
            <strong class="text-primary" id="name"></strong>
        `;

        this.shadowRoot.appendChild(contentNode);
        this.whenNode = contentNode.querySelector("#when");
        this.nameNode = contentNode.querySelector("#name");
    }
}

export default AuthorDetails;
