<script>
  import confetti from 'canvas-confetti';
  import { suffleCartas } from './helpers/suffleCartas';

  const cards = suffleCartas();

  let cardSelect = [];
  let cartaEncontrada = [];
  let gameOver = false;

  // ---------------------- FUNCIONES ----------------------

  const jugarCarta = (index) => {
    if (
      cardSelect.length > 1 ||
      cartaEncontrada.includes(cards[index]) ||
      cardSelect.includes(index)
    )
      return;

    cardSelect = [...cardSelect, index];
    if (cardSelect.length == 2) {
      cards[cardSelect[0]] === cards[cardSelect[1]]
        ? (cartaEncontrada = [...cartaEncontrada, cards[index]])
        : null;
      setTimeout(() => (cardSelect = []), 500);
    }
    if (cartaEncontrada.length === cards.length / 2) {
      gameOver = true;
      confetti();
    }
  };
  // ---------------------- FUNCIONES ----------------------
</script>

<main class="container">
  <h1>{gameOver ? 'Congratulation' : 'Memo'}</h1>
  <div class="memo">
    {#each cards as card, index}
      <div
        class="carta"
        on:click={() => jugarCarta(index)}
        on:keydown={() => jugarCarta(card)}
      >
        {cardSelect.includes(index) || cartaEncontrada.includes(card)
          ? card
          : '?'}
      </div>
    {/each}
  </div>
</main>

<style>
  .container {
    font-size: 5px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 5em;
    place-items: center;
  }
  h1 {
    font-size: 6em;
  }
  .memo {
    margin-top: 4em;
    display: grid;
    grid-template-columns: repeat(3, minmax(30%, 1fr));
    gap: 3em;
  }
  .carta {
    align-items: center;
    background-color: rgb(23, 57, 109);
    border-radius: 25%;
    border: 0.1em solid rgb(255, 238, 0);
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 7em;
    inline-size: 2.5em;
    text-align: center;
    aspect-ratio: 1/1;
  }
  @media (min-width: 768px) {
    .container {
      font-size: 10px;
    }

  }
  @media (min-width: 992px) {
    .memo {
      margin-top: 7em;
      flex: 4;
      max-width: 125em;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
      gap: 5%;
    }
    .carta {
      align-items: center;
      background-color: rgb(23, 57, 109);
      border-radius: 25%;
      border: 0.1em solid rgb(255, 238, 0);
      cursor: pointer;
      display: flex;
      justify-content: center;
      font-size: 10em;
      padding: 0.5em;
      text-align: center;
      aspect-ratio: 1/1;
    }
  }
</style>
