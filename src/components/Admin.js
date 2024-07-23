import {html, LitElement, css} from 'lit';
import { MyElement } from './MyElement';

export class Admin extends LitElement { 
  static styles = css`
    .crudWrapper {
      margin: 0 0 0 0;
      text-align: center;
      height: 100vh;
      background-color: #d0d0d0; /* Color de fondo principal más oscuro */
  background-image: linear-gradient(to bottom right, #f2f2f2, #e6f2ff);
      overflow: 0;
    }
    .headerWrapper {
      background-color: #ffffff; /* Color de fondo */
  border-radius: 8px; /* Borde redondeado */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  margin: 20px; /* Margen exterior */
      padding: 10px 0 10px 0;
      min-width: 345px;
      width: 80%;
      margin: 0 auto 0 auto;
      display: flex;
      height: 50px;
      justify-content: space-around;
      align-items: center;
    }
    .addButton {
      display: inline-block;
      padding: 12px 24px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .contentWrapper {
      margin: 20px auto 20px auto;
      min-width: 345px;
      width: 80%;
      background-color: #ffffff; /* Color de fondo */
      border-radius: 8px; /* Borde redondeado */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
      min-height: 24em;
      border-radius: 2%;
      padding: 10px 0 10px 0;
    }
      .modernTitle {
  font-size: 24px; /* Tamaño de la fuente */
  font-weight: bold; /* Peso de la fuente */
  color: #333; /* Color del texto */
  margin-bottom: 16px; /* Espacio inferior */
}
  `;

  static properties = {
    isDisabled: {type: Boolean},
    tasks: {type: Array}
  }

  constructor(){
    super();
    this.isDisabled = true;
    this.tasks = [];
  }

  render() {
  return html`
    <div class="crudWrapper">
      <div class="headerWrapper">
        <h2 class="modernTitle">Task manager</h2>
        <button class="addButton" @click=${this.handleOpenModal}>Agregar</button>
      </div>
      <div class="contentWrapper">
        <my-element .tasks=${this.tasks}></my-element>
      </div>
    </div>
    <modal-component></modal-component>
  `;
  }

  handleOpenModal(){
    const modal = this.shadowRoot.querySelector('modal-component');
    modal.isOpen = true;
  }

}
customElements.define('admin-component', Admin);