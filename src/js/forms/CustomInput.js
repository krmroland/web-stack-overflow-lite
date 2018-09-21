class CustomInput extends HTMLElement {
    /**
     * Creates an instance of the CustomInput class
     * @return {CustomInput}
     */
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.form = null;
        this.setName()
            .setStyleNode()
            .setInputNode()
            .setErrorNode();
    }
    /**
     * Sets the form instance
     * @param {FormComponent} form
     * @return {this}
     */
    setForm(form) {
        this.form = form;
        this.form.addEventListener("errors", this.updateError.bind(this));
        this.form.addEventListener("submitted", () => this.resetInput());
        return this;
    }
    /**
     * Updates the error for the input
     */
    updateError() {
        this.form.errors.has(this.name)
            ? this.displayError(this.form.errors.first(this.name))
            : this.removeError();
    }
    /**
     * Sets the name of the input field
     * @return {self}
     */
    setName() {
        this.name = this.getAttribute("name");

        if (!this.name) {
            throw new Error("Custom Field has no name attribute");
        }
        return this;
    }
    /**
     * Sets the error node for appending input errors
     * @return {self}
     */
    setErrorNode() {
        this.errorNode = document.createElement("span");
        this.errorNode.className = "field-error";
        this.errorNode.setAttribute("hidden", true);
        this.shadow.appendChild(this.errorNode);

        return this;
    }
    /**
     * Sets the Style node for component styles since webcomponents are independent
     * @return {self}
     */
    setStyleNode() {
        this.styleNode = document.createElement("style");
        this.styleNode.textContent = `
            .field-error{
                color:#E3342F;
            }
            .input {
              box-sizing: border-box;
              display: block;
              width: 100%;
              font-size: 1rem;
              border: 2px solid #b8c2cc;
              padding: 0.25em 0.5em;
              resize: none;
              color: #323232;

            }
            .input:focus {
              outline: none;
              box-shadow: inset 0 0 0 0.075em #dae1e7;
            }
            .input:invalid{
               border-top-color:#E3342F;
               border-top-width:4px;
            }
        `;
        this.shadow.appendChild(this.styleNode);
        return this;
    }
    /**
     * Sets the input node
     * @return {self}
     */
    setInputNode() {
        const type = this.getAttribute("type") || "text";
        this.inputNode = document.createElement("input");
        this.inputNode.setAttribute("type", type);
        this.inputNode.className = "input";
        this.shadow.appendChild(this.inputNode);
        return this;
    }
    /**
     * Gets the name of this input Element
     * @return {String}
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the value of the input element
     * @return {String}
     */
    getValue() {
        return this.inputNode.value;
    }
    /**
     * Adds a given error to the error node
     * @param  {String} error
     */
    displayError(error) {
        this.errorNode.textContent = error;
        this.inputNode.setCustomValidity(error);
        this.errorNode.removeAttribute("hidden");
    }
    /**
     * Clears an existing error
     */
    removeError() {
        this.errorNode.textContent = "";
        this.inputNode.setCustomValidity("");
        this.errorNode.setAttribute("hidden", true);
    }
    /**
     * resets the input value
     * @param {String|Null} value
     */
    resetInput() {
        this.inputNode.value = "";
    }
}

export default CustomInput;
