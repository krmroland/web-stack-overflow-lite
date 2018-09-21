class AllQuestions extends HTMLElement {
    /**
     * Creates an instance of the AllQuestions class
     * @return {self}
     */
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.questions = [];
        this.renderedQuestions = {};
    }
    /**
     * Callback for when all questions has been mounted to the DOM
     */
    connectedCallback() {
        window.Http.get("/questions").then(this.renderQuestions.bind(this));
        // .catch(error =>
        //     window.Notify.error("There was an error fetching questions")
        // );
    }
    /**
     * Renders the Fetched QUestions to the DOM
     * @param  {Array} options.data
     */
    renderQuestions({ data }) {
        data
            .sort(this.sortQuestions.bind(this))
            .forEach(this.renderQuestion.bind(this));
    }
    /**
     * Sorts the questions by the updated_at attribute
     * @param  {Object} a
     * @param  {Object} b
     * @return {Number}
     */
    sortQuestions(a, b) {
        return new Date(b.updated_at) - new Date(a.updated_at);
    }
    /**
     * Creates an renders a single Question
     * @param  {Object} question
     */
    renderQuestion(question) {
        const questionNode = document.createElement("single-question");
        this.renderedQuestions[question.id] = questionNode;
        questionNode.summarize().setTemplate(question);
        this.shadowRoot.appendChild(questionNode);
    }
}

export default AllQuestions;
