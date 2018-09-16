import FormErrors from "./FormErrors";
import { waitForCustomChildElements } from "../utils/Helpers";

class FormComponent extends HTMLFormElement {
    /**
     * Creates an instance of the FormComponent
     * @return {FormComponent}
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
     * @return {FormComponent}
     */
    connectedCallback() {
        waitForCustomChildElements(this).then(() =>
            this.setInputs().setSubmitButton()
        );
        // const undefinedElements = this.querySelectorAll(":not(:defined)");
        // // get all undefined inputs and wait until they have all been parsed
        // return Promise.all(
        //     Array.from(undefinedElements, this.elementIsDefined.bind(this))
        // ).then(() => this.setInputs().setSubmitButton());
    }
    /**
     * Wait until a custom web element has been defined
     * @param  {HtmlElement} element
     * @return {Promise}    A promise that resolves after  element definition
     */
    elementIsDefined(element) {
        return window.customElements.whenDefined(
            element.getAttribute("is") || element.localName
        );
    }
    /**
     * Sets the form inputs and buttons
     */
    setInputs() {
        this.querySelectorAll("custom-input").forEach(
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

export default FormComponent;
