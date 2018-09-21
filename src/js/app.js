import "../sass/app.scss";
import "./bootstrap";
import "./sidebar";
import "./common";
import "./questions";
import "./answers";
import "./voting";
import {
    interceptUnathourizedHttpErrors,
    ensureUserIsLoggedIn
} from "./utils/Helpers";

ensureUserIsLoggedIn();

interceptUnathourizedHttpErrors();
