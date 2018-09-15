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
        this.storeData(e.detail);
        window.Notify.onNextLoad().success("Welcome to stack overflow");
        window.location.href = "index.html";
    }
    /**
     * Stores the  token and the user name in localStorage
     * @param {Object} data
     */
    storeData(data) {
        const { name, token } = data;
        if (!token) {
            new Error("Token not available in the data");
        }

        window.localStorage.setItem("auth-token", token);
        window.localStorage.setItem("auth-name", name);
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
