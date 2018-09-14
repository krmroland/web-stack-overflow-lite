class SubmitButton extends HTMLButtonElement {
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
