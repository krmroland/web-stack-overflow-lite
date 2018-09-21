import FormErrors from "./FormErrors";
import { waitForCustomChildElements } from "../utils/Helpers";

class AjaxForm extends HTMLFormElement {
    /**
     * Creates an instance of the AjaxForm
     * @return {AjaxForm}
     */
    constructor() {
        super();
        this.addEventListener("submit", this.submitForm.bind(this));
        this.inputs = {};
        this.submitButton = null;
        this.errors = new FormErrors({});
    }
    /**
     * Listen for when this component is mounted to the dom
     * @return {AjaxForm}
     */
    connectedCallback() {
        waitForCustomChildElements(this).then(() =>
            this.setInputs().setSubmitButton()
        );
    }

    /**
     * Sets the form inputs and buttons
     */
    setInputs() {
        this.querySelectorAll("custom-input,custom-textarea").forEach(
            input => (this.inputs[input.getName()] = input.setForm(this))
        );
        return this;
    }
    setSubmitButton() {
        this.submitButton = this.querySelector("button[is='submit-button']");
        if (!this.submitButton) {
            new Error("Form has no button of type submit-button");
        }

        return this;
    }
    /**
     * Submit this form using ajax
     * @param  {Event} e
     */
    submitForm(e) {
        e.preventDefault();
        this.submitButton.activateLoading();
        window.Http.post(this.getAttribute("action"), this.getData())
            .then(this.successSubmission.bind(this))
            .catch(({ errors }) => this.updateInputErrors(errors))
            .finally(() => this.submitButton.deactivateLoading());
    }
    /**
     * Do some cleanups after the form has been submitted
     * @param  {Mixed} data
     */
    successSubmission(data) {
        //clear errors
        this.updateInputErrors({});
        this.dispatchEvent(new CustomEvent("submitted", { detail: data }));
    }
    /**
     * Gets the form data
     */
    getData() {
        const data = {};
        this.forAllInputs((input, name) => (data[name] = input.getValue()));
        return data;
    }

    /**
     * Updates the input errors
     * @param  {Object} options.error
     */
    updateInputErrors(errors) {
        this.errors.update(errors);
        this.dispatchEvent(new Event("errors"));
    }

    /**
     * Iterates through all inputs invoking the given callback function
     * @param  {Function} callback 

     */
    forAllInputs(callback) {
        for (let name in this.inputs) {
            callback(this.inputs[name], name);
        }
    }
}

export default AjaxForm;
