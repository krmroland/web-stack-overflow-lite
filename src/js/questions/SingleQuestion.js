import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

class SingleQuestion extends HTMLElement {
  /**
   * Creates an instance of a Single Question
   * @return {self}
   */
  constructor() {
    super();
    this.template = document.createElement("template");
    this.attachShadow({ mode: "open" });
  }

  /**
   * Listen for when the Single Question is mounted to the dom
   */
  connectedCallback() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
  /**
   * Sets the single question template
   */
  setTemplate(question) {
    const { author } = question;
    this.template.innerHTML = `
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
              .question-footer{
                 display:flex;
                 justify-content:flex-end;
                flex-wrap:wrap;
                font-size:var(--font-small);
                color:var(--grey-dark);
                border-top:1px solid var(--light);
                padding-top:0.5em;
              }
              .px-2{
                padding-left:1.5em;
                padding-right:0.5em;
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

                <p>
                  ${question.description} ....
               </p>
                <div class="question-footer">
                  <span class="fw-600">
                    ${distanceInWordsToNow(question.updated_at)}
                  </span>
                  <span class="px-2">By</span>
                  <a href=""> 
                      <strong class="text-primary">${author.name}</strong>
                  </a>
                </div>
             </div>
           </div>

        `;
  }
}

export default SingleQuestion;
