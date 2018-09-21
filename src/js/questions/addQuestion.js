/**
 * The HTML selector for selecting the question form
 * @type {String}
 */
const FORM_SELECTOR = "#QuestionForm";

class AddQuestion {
    /**
     * Creates an instance of this class
     * @return {self}
     */
    constructor() {
        const form = document.querySelector(FORM_SELECTOR);
        if (form) {
            form.addEventListener("submitted", this.onSubmit.bind(this));
        }
    }
    /**
     * Listens for when the add question form is being submitted
     */
    onSubmit() {
        window.Notify.onNextLoad().success("Question was added successfully");
        window.location.replace("index.html");
    }
}

new AddQuestion();
