import { LitElement, html, css } from 'lit';

export class MyApp extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 80%;
        border: 1px solid blue;
        text-align: center;
        padding: 1em;
        align-items: center;
        background-color: #fff;
        border-radius: var(--bd-radius);
        overflow: hidden;
      }

      .container {
        padding: 1rem;
      }

      .title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .img {
        width: 100%;
      }

      .info {
        font-weight:300;
      }

      .song-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--Very-pale-blue);
        padding: 0.5rem;
        border-radius: var(--bd-radius);
      }

      .song-info-price {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .song-info-price p {
        margin: 0;
      }

      .btn {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        min-height: 12vh;
        align-items: stretch;
        justify-content: space-between;
      }

      .btn .btn-payment {
        padding: 1rem 0.5rem;
        color: #fff;
        border: none;
        background-color: var(--Bright-blue);
        border-radius: var(--bd-radius);
      }

      .btn .btn-cancel {
        background-color: #fff;
        border: none;
        font-weight: 700;
        color: var(--Desaturated-blue);
      }

      @media (orientation: landscape) {
        :host {
          width: 48%;
        }

        .btn {
          min-height: 20vh;
        }
      }

    `
  ];

  render() {
    return html `
      <img class="img" src="./src/assets/images/illustration-hero.svg" alt="illustration-hero" />
    
      <div class="container">
        <h1 class="title" >Order Summary</h1>
      
        <p class="info">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
      
        <div class="song-info">
          <img class="song-info-icon" src="./src/assets/images/icon-music.svg" alt="music-icon" />
          <div class="song-info-price">
            <p>Annual Plan</p>
            <p >$59.99/year</p>
          </div>
          <a href="#" class="song-info-change">Change</a>
        </div>
      
        <div class="btn">
          <button class="btn-payment" >Proceed to Payment</button>
          <button class="btn-cancel">Cancel Order</button>
        </div>
      </div>
    `;
  }
};

customElements.define('my-app', MyApp);
