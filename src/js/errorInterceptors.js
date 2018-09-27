import { logout } from "./utils/Helpers";

/**
 * HTTP Error codes that should be intercepted
 * @type {Array}
 */
const INTERCEPTABLE_ERROR_CODES = [404, 500];

/**
 * Module for intercepting and handling HTTP erros
 */
class HttpErrorInterceptors {
    /**
     * Creates an instance of this class
     * @return {self}
     */
    constructor() {
        window.Http.addErrorInterceptor(this.handleErrors.bind(this));
    }
    /**
     * Handles a given error
     * @param  {Response} response
     * @return {Mixed}
     */
    handleErrors(response) {
        const { status } = response;

        if (status === 401) {
            window.Notify.onNextLoad().error("Unauthorized, Please login!");
            return logout();
        }
        if (INTERCEPTABLE_ERROR_CODES.includes(status)) {
            return this.redirectToErrorPage(response);
        }
        return null;
    }
    /**
     * Redirects to the error page
     * @param  {Response} response
     */
    redirectToErrorPage(response) {
        window.location.href = "errorsPage.html";
    }
}

new HttpErrorInterceptors();
