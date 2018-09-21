/*ensure the browser supports custom web components*/
if (!HTMLElement.prototype.attachShadow) {
    window.location.replace("browserNotSupported.html");
}
