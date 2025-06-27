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
    cardWrapper.className = `fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4 sm:p-8`;
    cardWrapper.style.display = 'none'; // Start hidden, show only when button is clicked
    cardWrapper.innerHTML = `
      <div class="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl text-center max-w-sm sm:max-w-md w-full relative overflow-hidden outline-none max-h-[90vh] overflow-y-auto">
        <button aria-label="Close" class="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors touch-manipulation" id="close-card-btn" tabindex="0">&times;</button>
        <div class="border-4 border-gray-100 rounded-xl p-4 sm:p-6 m-2">
          <div class="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-5 animate-bounce">👟</div>
          <div class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 drop-shadow">Please Remove<br>Your Shoes</div>
          <div class="text-sm sm:text-base text-gray-500 mb-4 sm:mb-5 md:mb-6 italic">Before entering our home</div>
          <div class="flex justify-center gap-3 sm:gap-4 md:gap-5 my-3 sm:my-4 md:my-5 text-lg sm:text-xl md:text-2xl">
            <span class="animate-pulse opacity-70">👣</span>
            <span class="animate-pulse opacity-70 delay-150">👣</span>
          </div>
          <div class="text-green-600 font-semibold px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 bg-green-50 rounded-full border-2 border-green-200 text-sm sm:text-base">Thank you for keeping our home clean!</div>
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
    
    // Safari mobile touch handling
    cardWrapper.addEventListener('touchstart', (e) => {
      e.preventDefault();
    }, { passive: false });
  }

  setupHouseRulesButton() {
    const houseRulesBtn = document.getElementById('house-rules-btn');
    if (houseRulesBtn) {
      houseRulesBtn.addEventListener('click', () => this.show());
      houseRulesBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.show();
      }, { passive: false });
    }
  }

  show() {
    const card = document.getElementById(this.cardId);
    if (!card) return;
    card.style.display = 'flex';
    card.focus();
    
    // Prevent body scroll on mobile (Safari specific)
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
  }

  hide() {
    const card = document.getElementById(this.cardId);
    if (!card) return;
    card.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.height = '';
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide();
    }
  }
}

// Create the card instance (starts hidden)
const card = new Card();