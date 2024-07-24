import {html, LitElement, css} from 'lit';
import { MyElement } from './MyElement';

export class Admin extends LitElement { 
  static styles = css`
    .crudWrapper {
      margin: 0 0 0 0;
      text-align: center;
      height: 100vh;
      background-color: #d0d0d0;
      background-image: linear-gradient(to bottom right, #f2f2f2, #e6f2ff);
      overflow: auto;
      width: 100%;
    }
    .headerWrapper {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin: 20px;
      padding: 10px 0 10px 0;
      min-width: 215px;
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
      min-width: 215px;
      width: 80%;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      min-height: 24em;
      border-radius: 2%;
      padding: 10px 0 10px 0;
    }
    .modernTitle {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      margin-bottom: 16px;
    }
    @media (max-width: 600px) {
      .modernTitle {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-bottom: 16px;
      }
        .addButton {
        display: inline-block;
        padding: 10px 18px;
        background-color: #007bff;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
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