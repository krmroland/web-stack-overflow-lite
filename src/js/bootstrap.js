import Http from "./utils/Http";
import "./utils/Notifications";
import "./utils/PageLoader";
import { getAPIUrl } from "./utils/Helpers";
import "./forms";

window.Http = new Http(getAPIUrl());

