import Http from "./utils/Http";
import NProgress from "nprogress";
import "./forms";
const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://andela-stackoverflow.herokuapp.com/api/v1.1/"
        : "http://127.0.0.1:5000/api/v1.1/";

window.Http = new Http(BASE_URL);

window.addEventListener("DOMContentLoaded", () => NProgress.start());
window.addEventListener("load", () => NProgress.done());
