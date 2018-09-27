import NProgress from "nprogress";
import { waitForCustomChildElements } from "./Helpers";

class PageLoader extends HTMLElement {
  /**
   * Creates an instance of the page loader class
   * @return {PageLoader}
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.containerNode = this.makeContainerNode();
    this.shadow.appendChild(this.containerNode);
  }
  /**
   * Activates the page loader
   */
  start() {
    this.containerNode.classList.add("show");
    NProgress.start();
  }
  /**
   * Deactivates the page loader
   */
  done() {
    this.containerNode.classList.remove("show");
    NProgress.done();
  }
  /**
   * Makes a template for the page loader
   * @return {HTMLDivElement}
   */
  makeContainerNode() {
    const containerNode = document.createElement("div");
    containerNode.className = "container";
    // SVG by sam Herbert http://goo.gl/7AJzbL
    containerNode.innerHTML = `
        <style>
            .container{
                position:fixed;
                background-color:#343435;
                z-index:50;
                top:0; 
                bottom:0;
                right:0;
                left:0;
                justify-content:center;
                align-items:center;
                opacity:0.6;
                display:none;
                cursor: not-allowed;
            }
            svg{
                fill:#1bcc46;
                height:6rem;
                width:6rem;

            }
            .show{
                display:flex;
            }
        </style>
        <svg width="135" height="140" xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <rect y="10" width="15" height="120" rx="6">
            <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/>
            <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/>
          </rect>
          <rect x="30" y="10" width="15" height="120" rx="6">
            <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/>
            <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/>
          </rect>
          <rect x="60" width="15" height="140" rx="6">
            <animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/>
            <animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/>
          </rect>
          <rect x="90" y="10" width="15" height="120" rx="6">
            <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/>
            <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/>
          </rect>
          <rect x="120" y="10" width="15" height="120" rx="6">
            <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/>
            <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/>
          </rect>
        </svg>
        `;
    return containerNode;
  }
}

window.customElements.define("page-loader", PageLoader);

const loader = document.createElement("page-loader");

document.body.appendChild(loader);

window.PageLoader = loader;

window.addEventListener("DOMContentLoaded", () => loader.start());

window.addEventListener("unload", loader.start());

window.addEventListener("load", () => loader.done());

waitForCustomChildElements(document.body).then(() => loader.done());
