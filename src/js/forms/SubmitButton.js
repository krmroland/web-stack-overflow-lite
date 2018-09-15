class SubmitButton extends HTMLButtonElement {
    /**
     * Creates an instance of this class
     * @return {[type]} [description]
     */
    constructor() {
        super();
        this.type = "submit";
    }
    /**
     * Activates the loading state of the button
     */
    activateLoading() {
        this.setAttribute("disabled", true);
    }
    /**
     * Deactivates the loading state of the button
     */
    deactivateLoading() {
        this.removeAttribute("disabled");
    }
}

export default SubmitButton;
