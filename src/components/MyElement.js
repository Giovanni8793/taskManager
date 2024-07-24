import {html, LitElement, css} from 'lit';

export class MyElement extends LitElement { 
  static styles = css`
  .elementWrapper {
    background-color: #D5DCF5;
    width: 90%; 
    margin: 0 auto 0 auto;
    min-height: 5em;
    border-radius: 1em;
    padding: 1em;
  }
    .actions {
      display: flex;
      justify-content: flex-end;
    }
    button {
      margin: .5em;
      font-family: Helvetica;
      font-size: 1em;
      cursor: pointer;
      color: black;
    }
    .success{
      border: 1px solid #4E72F5;
      border-radius: 10%; 
      background-color: #4E72F5;
    }
    .delete{
      border: 1px solid #BE95F5;
      border-radius: 10%; 
      background-color: #BE95F5;
    }
    .update {
      border: 1px solid #4EDCF5;
      border-radius: 10%; 
      background-color: #4EDCF5;
    }

    .noTasksMessage {
      font-size: 1.2em;
      font-style: italic;
      color: #999;
      text-align: center;
    }
    @media (max-width: 600px) {
      .noTasksMessage {
        font-size: 1em;
        font-style: italic;
        color: #999;
        text-align: center;
      }
    }
  `;

  static properties = {
    tasks: {type: Array},
    isOpen: {type: Boolean}
  }

  constructor(){
    super();
    /* this.tasks = [{
      title: '', 
      description: '',
      detail: null
    }]; */
    this.tasks = [];
  }

  render() {
    if (this.tasks.length === 0) {
      return html`<p class="noTasksMessage">You haven't added tasks yet.</p>`;
    }
    return html`
      ${this.tasks.map((item, index) => {
        console.log(item, index);
        return html`
        <div class="elementWrapper">
          <div class="actions">
            <button class="delete" @click=${() => this.deleteTask(index)}>Eliminar</button>
            <button class="update" @click=${this.updateTask(index)}>Editar</button>
            <button class="success" @click=${this.completeTask(index)}>completar</button>
          </div>
          <div class="dataBox">
            <h4 id="taskTitle">${item.title}</h4>
            <p id="taskDescription">${item.description}</p>
            <p>Detalles:</p>
            <p>${item.detail}</p>
          </div>
      </div>
        `
      })}
      `;
  }

  deleteTask(index) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
    this.requestUpdate('tasks');
  }

  updateTask(index) {
    console.log('Actualizaste la tarea');
  }

  completeTask(index) {
    console.log('Completaste la tarea');
  }

  openModal(){

  }
  
}
customElements.define('my-element', MyElement);