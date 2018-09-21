import AjaxForm from "./AjaxForm";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import SubmitButton from "./SubmitButton";
import { defineCustomElements } from "../utils/Helpers";

defineCustomElements(
    { CustomInput, CustomTextarea, AjaxForm, SubmitButton },
    { AjaxForm: "form", SubmitButton: "button" }
);
