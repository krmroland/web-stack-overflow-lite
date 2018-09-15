class Http {
    /**
     * Creates an instance of the http class
     * @param  {String} baseUrl
     * @return {self}
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.method = "GET";
        this.headers = {
            "content-type": "application/json"
        };
        this.showProgress = true;

        this.errrorInterceptors = [];

        this.addAuthroziationHeader();
    }
    /**
     * Adds an authorization Header
     * @return {self}
     */
    addAuthroziationHeader() {
        const token = window.localStorage.getItem("auth-token");

        if (token) {
            this.headers["Authorization"] = `Bearer ${token}`;
        }

        return this;
    }
    /**
     * Makes a get request
     * @param  {String} url
     * @return {Promise}
     */
    get(url) {
        return this.makeRequest(url, "GET");
    }
    /**
     * Makes a post Request
     * @param  {String} url
     * @param  {Object} data
     * @return {Promise}
     */
    post(url, data) {
        return this.makeRequest(url, "POST", data);
    }
    /**
     * Makes a put request
     * @param  {String} url
     * @param  {Object} data
     * @return {Promise}
     */
    put(url, data) {
        return this.makeRequest(url, "PUT", data);
    }
    /**
     * Makes a Patch request
     * @param  {String} url
     * @param  {Object} data
     * @return {Promise}
     */
    patch(url, data) {
        return this.makeRequest(url, "PATCH", data);
    }
    /**
     * Makes a Patch delete
     * @param  {String} url
     * @param  {Object} data
     * @return {Promise}
     */
    delete(url, data) {
        return this.makeRequest(url, "DELETE", data);
    }
    /**
     * Resets the current object state
     * @param  {String} method
     * @param  {String|undefined} data
     * @return {self}
     */
    resetState(method, data) {
        this.method = method;
        this.data = data;
    }
    /**
     * Makes request options based on the state of this instance
     * @return {Object}
     */
    makeOptions() {
        const options = {
            method: this.method,
            mode: "cors",
            headers: this.headers
        };

        if (this.data) {
            options.body = JSON.stringify(this.data);
        }

        return options;
    }
    /**
     * Makes an Http Request
     * @param  {String} url
     * @param  {String} method
     * @param  {Object} data
     * @return {Promise}
     */
    makeRequest(url, method, data = null) {
        this.resetState(method, data);
        if (this.showProgress) {
            window.PageLoader.start();
        }
        return window
            .fetch(this.prepareUrl(url), this.makeOptions())
            .then(this.validateResponse.bind(this))
            .catch(this.handleFailure.bind(this))
            .finally(() => window.PageLoader.done());
    }
    /**
     * Prepares a given URL
     * @param  {String} url
     * @return {URL}
     */
    prepareUrl(url) {
        if (!url) {
            throw new Error("Url is not given");
        }
        if (url.startsWith("/")) {
            url = url.replace("/", "");
        }
        return new URL(url, this.baseUrl);
    }
    /**
     * Checks to see if a response was okay
     * @param  {Response} response
     * @return {Promise}
     */
    validateResponse(response) {
        return this.convertResponse(response).then(data => {
            return response.ok
                ? Promise.resolve(data)
                : this.handleFailure(data, response);
        });
    }
    /**
     * Handle a failed fetch request
     * @param  {Object|Error|String} error
     * @return {Promise}
     */
    handleFailure(error, response) {
        let message;

        if (typeof error === "string") {
            message = error;
        } else {
            message = error.message || "Something went wrong";
        }
        this.fireErrorInterceptors(response);

        window.Notify.error(message);

        return Promise.reject(error);
    }

    /**
     * Adds an error interceptor
     * @param {Function} callback
     */
    addErrorInterceptor(callback) {
        this.errrorInterceptors.push(callback);
    }
    /**
     * Invokes all registered error interceptors
     * @param  {Response} response
     */
    fireErrorInterceptors(response) {
        if (response) {
            //interceptors may cause side effects, e.g redirect to other pages
            this.errrorInterceptors.forEach(callback => callback(response));
        }
    }
    /**
     * Converts a given response based on its content-type
     * @param  {Response} response
     * @return {Promise}
     */
    convertResponse(response) {
        const contentType = response.headers.get("content-type").toLowerCase();

        if (contentType.includes("json")) {
            return response.json();
        }
        if (contentType.includes("html")) {
            return response.text();
        }
        return Promise.reject({
            message: `Content-type: ${contentType} is not supported`
        });
    }
    /**
     * Turns off the progress bar during HTTP fetching
     * @return {self}
     */
    withNoProgress() {
        this.showProgress = false;
        return this;
    }
    /**
     * Turns on the progress bar during HTTP fetching
     * @return {self}
     */
    withProgress() {
        this.showProgress = false;
        return this;
    }
}

export default Http;
