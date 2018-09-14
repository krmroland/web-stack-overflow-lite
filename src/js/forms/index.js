import FormComponent from "./FormComponent";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

customElements.define("ajax-form", FormComponent, { extends: "form" });
customElements.define("custom-input", FormInput);
customElements.define("submit-button", SubmitButton, { extends: "button" });


