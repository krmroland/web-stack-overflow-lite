import { strLimit } from "../utils/Helpers";
class SingleQuestion extends HTMLElement {
  /**
   * Creates an instance of a Single Question
   * @return {self}
   */
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.contentNode = document.createElement("div");
    this.shadowRoot.appendChild(this.contentNode);
    this.isSummarized = false;
  }
  /**
   * Summarizes the question description
   * @param  {Boolean} value
   * @return {SingleQuestion}
   */
  summarize(value = true) {
    this.isSummarized = value;
    return this;
  }

  /**
   * Sets the single question template
   */
  setTemplate(question) {
    const { author } = question;

    let { description, updated_at } = question;

    description = this.isSummarized ? strLimit(description) : description;

    this.contentNode.innerHTML = `
            <style>
              :host{
                display:block;
                box-shadow:var(--shadow);
                margin-bottom:1em;
                width:100%;
              }
              a{
                text-decoration:none;
              }
              a:hover{
                text-decoration:underline;
              }
              img{
                width:50px;
                heigth:50px;
                border-radius:50%;
              }
              .container{
                display:flex;
                padding:1em;
              }
              .title{
                display:block;
                font-weight:900;
                color:var(--dark);
                font-family:var(--font-serif);
                font-size:1.1rem;

              }
              .question-body{
                margin-left:0.5em;
                line-height:1.6;
                width:100%;
              }
              p{
                color:var(--grey-dark);
                line-height:1.8;
              }
            </style>
            <div class="container">
              <div>
                <img src="images/user.png" alt="${author.name} image" >
              </div>
              <div class="question-body">
                <a href="answers.html#${question.id}" class="title">
                  ${question.title}
                </a>

                <p> ${description}</p>
                 <author-details when="${updated_at}" name="${author.name}">
                 </author-details>
             </div>
           </div>

        `;
  }
}

export default SingleQuestion;
