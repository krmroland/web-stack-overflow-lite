/**
 * Animation class to be added when the notification is being shown
 * @type {String}
 */
const ANIMATE_IN_CLASS = "zoomIn";
/**
 * Animation class to remove when the notification is being removed
 * @type {String}
 */
const ANIMATE_OUT_CLASS = "fadeOutDown";
/**
 * The local storage name  key for notifications
 * @type {String}
 */
const LOCAL_STORAGE_KEY = "notificationsStorageKey";

/**
 * Module responsible for showing Notifications
 */
class NotificaitonsElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.addcontentNode();
    this.setStyleNode();
    this.shouldFlashNow = true;
  }
  onNextLoad() {
    this.shouldFlashNow = false;
    return this;
  }
  connectedCallback() {
    this.shadow.appendChild(this.styleNode);

    //flash any messages in localStorage if any
    this.flashMessageInStorage();
  }
  /**
   * Flash any messages in localStorage
   */
  flashMessageInStorage() {
    const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data === null) {
      //no messages to flash
      return;
    }

    const { message, flashClass } = JSON.parse(data);
    this.flash(message, flashClass);
    //remove the data from the localStorage
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
  /**
   * FLashes a message of type error to the dom
   * @param  {String} message
   */
  error(message) {
    this.flash(message, "danger");
  }
  /**
   * Flashes a message of type success to the dom
   * @param  {String} message
   */
  success(message) {
    this.flash(message, "success");
  }
  /**
   * Flashes a given message
   * @param  {String} message
   * @param  {String} flashClass
   */
  flash(message, flashClass) {
    if (!this.shouldFlashNow) {
      return this.flashLater(message, flashClass);
    }
    this.contentNode.textContent = message;

    this.contentNode.className = `notification ${flashClass} ${ANIMATE_IN_CLASS}`;

    this.shadow.appendChild(this.contentNode);

    window.setInterval(() => {
      this.contentNode.classList.remove(ANIMATE_IN_CLASS);
      this.contentNode.classList.add(ANIMATE_OUT_CLASS);
    }, 4000);
  }
  /**
   * Store the flash data in localStorage so that it can be flashed on the next request
   * usefull for flashing data on pages that reload
   * @param  {String} message
   * @param  {String} flashClass
   */
  flashLater(message, flashClass) {
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ message, flashClass })
    );
  }
  /**
   * Adds a content Node to the class
   */
  addcontentNode() {
    this.contentNode = document.createElement("div");
    this.contentNode.addEventListener(
      "animationend",
      this.doneAnimating.bind(this)
    );
  }
  /**
   * Handler for when the animations are done
   * @param  {Event} e
   */
  doneAnimating(e) {
    //hides the element after the animate out class
    if (this.contentNode.classList.contains(ANIMATE_OUT_CLASS)) {
      this.shadow.removeChild(this.contentNode);
    }
  }
  /**
   * Sets styles for the element
   * @see https://github.com/daneden/animate.css for animations
   */
  setStyleNode() {
    this.styleNode = document.createElement("style");
    this.styleNode.textContent = `

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }

          50% {
            opacity: 1;
          }
        }
        @keyframes fadeOutDown {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
          }
        }
        .notification{
            z-index:1;
            position:fixed;
            top:0;
            left:0;
            right:0;
            text-align:center;
            text-align:center;
            padding:0.2em;
            font-size:1.2rem;
            animation-duration: 1s;
            animation-fill-mode: both;
        }

        .success{
            color: #305c3d;
            border-left:4px solid #305c3d;
            background-color:#bfe1c9;
        }
        .danger{
            background-color: #e1bec7;
            color:#e3342f;
            border-left:4px solid #e3342f;
        }
     
        .zoomIn {
          animation-name: zoomIn;
        }
  
        .fadeOutDown {
           animation-name: fadeOutDown;
        }
        `;
  }
}

window.customElements.define("app-notifications", NotificaitonsElement);

const notifications = document.createElement("app-notifications");

document.body.appendChild(notifications);

window.Notify = notifications;
