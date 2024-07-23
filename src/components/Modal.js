
import {LitElement, html, css} from 'lit';

export class ModalComponent extends LitElement {
  static styles = css`
    .modalWrapper{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    .modalContent{
      position: fixed;
      top: 45%;
      left: 50%;
      width: 80%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    .form div{
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .formGroup {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 80%;
}
    .formField{
      width: 100%;
      padding: 12px 16px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }
    .formField:focus{
      outline: none;
  border-color: #66afe9; /* Cambia el color del borde al enfocar */
  box-shadow: 0 0 8px rgba(102, 175, 233, 0.6); /* Sombra al enfocar */
    }
    .formGroup label {
  width: 100%; /* Ocupa todo el ancho disponible */
  text-align: left; /* Alinea el texto a la izquierda */
  margin-bottom: 8px; /* Espacio entre el label y el input */
  color: #333; /* Color del texto del label */
}
  .addButton {
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff; /* Color de fondo del botón */
  color: #fff; /* Color del texto */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
  .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }

    .modal-title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      margin: 0;
    }

    .closeModal {
      background: none;
      border: none;
      font-size: 24px;
      color: #999;
      cursor: pointer;
    }
  `;
  static properties = {
    isOpen: {type: Boolean}
  }

  constructor(){
    super();

    this.isOpen = false;
  }

  render(){
    if(!this.isOpen){
      return html``
    }
    return html`
      <div class="modalWrapper">
        <div class="modalContent">
          <div class="modal-header">
            <h2>Add task</h2>
            <button class="closeModal" @click=${this.closeModal}>X</button>
          </div>
          <div class="addForm">
            <form class="form">
              <div class="formGroup">
                <label>Title</label>
                <input class="formField" type="text" placeholder="add a title for the task"/>
              </div>
              <div class="formGroup">
                <label>Description</label>
                <textarea class="formField" type="text" placeholder="add a description for the task"></textarea>
              </div>
              <div class="formGroup">
                <label>Details</label>
                <textarea class="formField" type="text" placeholder="add a title for the task"></textarea>
              </div>
            </form>
          </div>
          <button @click=${this.addTask} class="addButton">Add task</button>
          
        </div>
      </div>
    `;
  }
  addTask(){
    console.log('diste clic');
    this.isOpen = false;
  }

  closeModal(){
    console.log('diste clic');
    this.isOpen = false;
  }
}

customElements.define('modal-component', ModalComponent);