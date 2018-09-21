class AnswersComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.addChildComponents();
        window.addEventListener("hashchange", this.hashChanged.bind(this));
        this.fetchQuestionWithAnswers();
    }
    addChildComponents() {
        this.question = document.createElement("single-question");
        this.answers = document.createElement("all-answers");
        this.answerForm = document.createElement("answer-form");
        this.shadowRoot.appendChild(this.question);
        this.shadowRoot.appendChild(this.answers);
        this.shadowRoot.appendChild(this.answerForm);
    }
    fetchQuestionWithAnswers() {
        const id = window.location.hash.replace("#", "");
        window.Http.get(`/questions/${id}`)
            .then(({ data }) => {
                this.question.setTemplate(data);
                console.log(this.question);
            })
            .catch(this.onErrorFetching.bind(this));
    }
    onErrorFetching(e) {}
    hashChanged(e) {
        this.fetchQuestionWithAnswers();
    }
}

export default AnswersComponent;
