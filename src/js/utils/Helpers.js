export const getAPIUrl = () =>
    process.env.NODE_ENV === "production"
        ? "https://andela-stackoverflow.herokuapp.com/api/v1.1/"
        : "http://127.0.0.1:5000/api/v1.1/";

export const interceptUnathourizedHttpErrors = () => {
    window.Http.addErrorInterceptor(response => {
        const { status } = response;

        if (status === 401) {
            window.Notify.onNextLoad().error("Unauthorized, Please login!");
            window.href = "login.html";
        }
    });
};
