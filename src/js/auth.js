import "./bootstrap";

class AuthenticationForm {
    /**
     * Creates an instance of the AuthenticationForm Class
     * @param  {HTMLFormElement} form
     * @return {AuthenticationForm}
     */
    constructor(form) {
        this.form = form;
        form.addEventListener("submitted", this.login.bind(this));
    }
    /**
     * Logins a user given a token
     * @param  {CustomEvent} e
     */
    login(e) {
        const { name, token } = e.detail;

        if (!token) {
            new Error("Token not available in the data");
        }

        window.localStorage.setItem("auth-token", token);
        window.localStorage.setItem("auth-name", name);

        window.Notify.onNextLoad().success(`Welcome ${name}`);
        window.location.replace("index.html");
    }

    /**
     * Sets the form node
     * @param {HTMLFormElement} node
     * @return {AuthenticationForm}
     */
    static setFormNode(node) {
        if (!node) {
            new Error("No form with #auth-id has been found on the page");
        }
        return new AuthenticationForm(node);
    }
}

(formNode => {
    AuthenticationForm.setFormNode(formNode);
})(document.getElementById("auth-form"));
