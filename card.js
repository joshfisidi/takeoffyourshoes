class Card {
  constructor() {
    this.cardId = 'card-component';
    this.render();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setupHouseRulesButton();
  }

  render() {
    if (document.getElementById(this.cardId)) return;
    const cardWrapper = document.createElement('div');
    cardWrapper.id = this.cardId;
    cardWrapper.tabIndex = 0;
    cardWrapper.setAttribute('aria-label', 'Remove Your Shoes Card');
    cardWrapper.className = `fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50`;
    cardWrapper.style.display = 'none'; // Start hidden, show only when button is clicked
    cardWrapper.innerHTML = `
      <div class="bg-white rounded-2xl p-10 shadow-2xl text-center max-w-md w-full relative overflow-hidden outline-none">
        <button aria-label="Close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 focus:outline-none" id="close-card-btn" tabindex="0">&times;</button>
        <div class="border-4 border-gray-100 rounded-xl p-6 m-2">
          <div class="text-6xl mb-5 animate-bounce">👟</div>
          <div class="text-2xl font-bold text-gray-800 mb-3 drop-shadow">Please Remove<br>Your Shoes</div>
          <div class="text-base text-gray-500 mb-6 italic">Before entering our home</div>
          <div class="flex justify-center gap-5 my-5 text-2xl">
            <span class="animate-pulse opacity-70">👣</span>
            <span class="animate-pulse opacity-70 delay-150">👣</span>
          </div>
          <div class="text-green-600 font-semibold px-6 py-3 bg-green-50 rounded-full border-2 border-green-200">Thank you for keeping our home clean!</div>
        </div>
      </div>
    `;
    
    document.getElementById('root').appendChild(cardWrapper);
    cardWrapper.querySelector('#close-card-btn').addEventListener('click', () => this.hide());
    cardWrapper.addEventListener('keydown', this.handleKeyDown);
    
    // Close when clicking outside the card (on the backdrop)
    cardWrapper.addEventListener('click', (e) => {
      if (e.target === cardWrapper) {
        this.hide();
      }
    });
  }

  setupHouseRulesButton() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', () => {
      this.attachButtonListener();
    });
    
    // If DOM is already loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.attachButtonListener();
      });
    } else {
      this.attachButtonListener();
    }
  }

  attachButtonListener() {
    const houseRulesBtn = document.getElementById('house-rules-btn');
    if (houseRulesBtn) {
      houseRulesBtn.addEventListener('click', () => this.show());
    }
  }

  show() {
    const card = document.getElementById(this.cardId);
    if (!card) return;
    card.style.display = 'flex';
    card.focus();
  }

  hide() {
    const card = document.getElementById(this.cardId);
    if (!card) return;
    card.style.display = 'none';
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide();
    }
  }
}

// Create the card instance (starts hidden)
const card = new Card();