/**
 * Gets the application URL based on the environment
 * @return {String}
 */
export const getAPIUrl = () =>
    process.env.NODE_ENV === "production"
        ? "https://andela-stackoverflow.herokuapp.com/api/v1.1/"
        : "http://127.0.0.1:5000/api/v1.1/";

/**
 * Intercepts all HTTP 401 errors and redirects to the login.html
 */
export const interceptUnathourizedHttpErrors = () => {
    window.Http.addErrorInterceptor(response => {
        const { status } = response;
        if (status === 401) {
            window.Notify.onNextLoad().error("Unauthorized, Please login!");
            logout();
        }
    });
};

/**
 * Logs out a given user

 */
export const logout = () => {
    window.localStorage.removeItem("auth-token");
    window.localStorage.removeItem("auth-name");
    window.location.replace("login.html");
};

/**
 * Ensures that a user is logged in
 */
export const ensureUserIsLoggedIn = () => {
    const isLoggedIn =
        window.localStorage.getItem("auth-token") &&
        window.localStorage.getItem("auth-name");
    if (!isLoggedIn) {
        logout();
    }
};

export const waitForCustomChildElements = parentElement => {
    // get all undefined child elements
    const undefinedElements = parentElement.querySelectorAll(":not(:defined)");
    // Wait for them to be defined
    return Promise.all(
        Array.from(undefinedElements, element =>
            window.customElements.whenDefined(
                element.getAttribute("is") || element.localName
            )
        )
    );
};
