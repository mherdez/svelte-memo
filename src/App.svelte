<script>
  import confetti from 'canvas-confetti';
  import { suffleCartas } from './helpers/suffleCartas';

  const cards = suffleCartas();

  let cardSelect = [];
  let cartaEncontrada = [];
  let gameOver = false;

  // ---------------------- FUNCIONES ----------------------

  const jugarCarta = (index) => {
    if (cardSelect.length > 1 || cartaEncontrada.includes(index)) return;

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
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 40px;
    place-items: center;
    width: 100vw;
  }
  .memo {
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 50px;
    width: 80%;
  }
  .carta {
    background-color: rgb(23, 57, 109);
    border: 4px solid rgb(255, 238, 0);
    border-radius: 25%;
    font-size: 6rem;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
