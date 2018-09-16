import "../sass/app.scss";
import "./bootstrap";
import "./sidebar";
import "./questions";
import "./links";
import "./textArea";
import "./voting";
import {
    interceptUnathourizedHttpErrors,
    ensureUserIsLoggedIn
} from "./utils/Helpers";

ensureUserIsLoggedIn();

interceptUnathourizedHttpErrors();

