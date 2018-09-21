import CustomInput from "./CustomInput";

class CustomTextarea extends CustomInput {
    /**
     * Sets the input node
     * @return {self}
     */
    setInputNode() {
        const placeholder = this.getAttribute("placeholder") || "";
        this.inputNode = document.createElement("textarea");
        this.inputNode.setAttribute("rows", this.getAttribute("rows") || 3);
        this.inputNode.setAttribute("placeholder", placeholder);
        this.inputNode.className = "input";
        this.shadow.appendChild(this.inputNode);
        this.computed = null;
        return this;
    }
    /**
     * Listens for when the custom text area has been mounted to the dom
     */
    connectedCallback() {
        this.inputNode.addEventListener("input", this.autoSize.bind(this));
        window.customElements
            .whenDefined("custom-textarea")
            .then(this.autoSize.bind(this));
    }
    /**
     * Auto sizes the text area based on the content it has
     */
    autoSize() {
        // reset height
        this.inputNode.style.height = "inherit";

        this.computed = window.getComputedStyle(this.inputNode);

        const height =
            this.inputNode.scrollHeight +
            this.boxValue("border-top-width") +
            this.boxValue("padding-top") +
            this.boxValue("padding-bottom") +
            this.boxValue("border-bottom-width");

        this.inputNode.style.height = height + "px";
    }
    boxValue(name) {
        return parseFloat(this.computed.getPropertyValue(name), 10);
    }
}

export default CustomTextarea;
