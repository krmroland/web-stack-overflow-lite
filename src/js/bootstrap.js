import NProgress from "nprogress";
import Http from "./utils/Http";
import "./utils/Notifications";
import { getAPIUrl } from "./utils/Helpers";
import "./forms";

window.Http = new Http(getAPIUrl());

window.addEventListener("DOMContentLoaded", () => NProgress.start());
window.addEventListener("load", () => NProgress.done());
