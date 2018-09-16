import { logout } from "./utils/Helpers";
/**
 * Selector for sidebar markup in the DOM
 * @type {String}
 */
const SIDEBAR_SELECTOR = "#JS-Sidebar";
/**
 * The use profile selector in the dome
 * @type {String}
 */
const USER_PROFILE_SELECTOR = "#JS-sidebar-user-profile";
/**
 * Selector for logout link in the DOM
 * @type {String}
 */
const LOGOUT_LINK_SELECTOR = "#JS-logout-link";
/**
 * The Current URL path name
 * @type {String}
 */
const URL_PATH_NAME = window.location.pathname;

class Sidebar {
    /**
     * Creates an instance of the sidebar
     * @param  {HTMLElement} sidebarNode
     * @return {self}
     */
    constructor(sidebarNode) {
        this.sidebarNode = sidebarNode;
        this.links = this.getLinks();
        this.links.forEach(this.activateSidebarLink.bind(this));
        this.addUserName();
        this.listenForLogout();
    }
    /**
     * Gets the links in the sidebar that match the selector
     * @return {NodeList}
     */
    getLinks() {
        return this.sidebarNode.querySelectorAll(".sidebar-link");
    }
    /**
     * Activates the link in the sidebar that matches the current
     * @param  {HTMLAnchorElement} link
     */
    activateSidebarLink(link) {
        URL_PATH_NAME === link.pathname ? link.classList.add("active") : null;
    }
    /**
     * Register an event listener for when a user tries to logout
     */
    listenForLogout() {
        const link = this.sidebarNode.querySelector(LOGOUT_LINK_SELECTOR);
        if (link) {
            link.addEventListener("click", this.logout.bind(this));
        }
    }

    /**
     * Event Listener for logout
     * @param  {Event} event
     */
    logout(event) {
        event.preventDefault();
        logout();
    }
    /**
     * Adds the currently logged in username to the sidebar
     */
    addUserName() {
        const userProfileNode = this.sidebarNode.querySelector(
            USER_PROFILE_SELECTOR
        );
        if (userProfileNode) {
            const name = document.createElement("h5");
            name.className = "fw-600";
            name.textContent = window.localStorage.getItem("auth-name") || "";
            userProfileNode.appendChild(name);
        }
    }
    /**
     *  Creates an instance of the Sidebar class
     * @param  {HTMLElement} sidebarNode
     * @throws {TypeError}
     * @return {Sidebar}
     */
    static activateSidebar(sidebarNode) {
        if (sidebarNode) {
            return new Sidebar(sidebarNode);
        }
        throw new TypeError(
            `No id with ${SIDEBAR_SELECTOR} was found in the document`
        );
    }
}

(sidebarNode => {
    Sidebar.activateSidebar(sidebarNode);
})(document.querySelector(SIDEBAR_SELECTOR));
