export const getAPIUrl = () =>
    process.env.NODE_ENV === "production"
        ? "https://andela-stackoverflow.herokuapp.com/api/v1.1/"
        : "http://127.0.0.1:5000/api/v1.1/";

