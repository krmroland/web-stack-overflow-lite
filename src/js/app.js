import "../sass/app.scss";
import "./bootstrap";
import "./sidebar";
import { interceptUnathourizedHttpErrors } from "./utils/Helpers";
import "./links";
import "./textArea";
import "./voting";

(function() {
    interceptUnathourizedHttpErrors();
})();
