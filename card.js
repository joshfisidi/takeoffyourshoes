class Card {
  constructor() {
    this.cardId = 'card-component';
    this.currentCardIndex = 0;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.isMobile = this.checkIfMobile();
    this.render();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.setupHouseRulesButton();
  }

  checkIfMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // House rules data
  getHouseRules() {
    return [
      {
        icon: '👟',
        title: 'Please Remove Your Shoes',
        subtitle: 'Before entering our home',
        content: 'Thank you for keeping our home clean!',
        color: 'green',
        emoji: '👣'
      },
      {
        icon: '🤫',
        title: 'Keep It Quiet',
        subtitle: 'Respect our peaceful space',
        content: 'Please use your inside voice and avoid loud noises.',
        color: 'blue',
        emoji: '🔇'
      },
      {
        icon: '🧹',
        title: 'Clean Up After Yourself',
        subtitle: 'Leave it better than you found it',
        content: 'Please clean up any messes and put things back where you found them.',
        color: 'purple',
        emoji: '✨'
      },
      {
        icon: '🐕',
        title: 'Pet Rules',
        subtitle: 'Our furry friends have rules too',
        content: 'Please ask before bringing pets, and keep them on a leash.',
        color: 'orange',
        emoji: '🐾'
      },
      {
        icon: '🍽️',
        title: 'Kitchen Courtesy',
        subtitle: 'Respect our cooking space',
        content: 'Ask before using the kitchen, and clean up after cooking.',
        color: 'red',
        emoji: '🍴'
      },
      {
        icon: '🛋️',
        title: 'Living Room Etiquette',
        subtitle: 'Make yourself at home',
        content: 'Feel free to relax, but please be mindful of furniture and decor.',
        color: 'indigo',
        emoji: '🏠'
      }
    ];
  }

  render() {
    if (document.getElementById(this.cardId)) return;
    const cardWrapper = document.createElement('div');
    cardWrapper.id = this.cardId;
    cardWrapper.tabIndex = 0;
    cardWrapper.setAttribute('aria-label', 'House Rules Cards');
    cardWrapper.className = `fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-2 sm:p-4 md:p-8`;
    cardWrapper.style.display = 'none';
    
    const houseRules = this.getHouseRules();
    
    cardWrapper.innerHTML = `
      <div class="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl text-center max-w-xs sm:max-w-sm md:max-w-md w-full relative overflow-hidden outline-none max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <button aria-label="Close" class="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 text-gray-400 hover:text-gray-700 active:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation z-10 text-lg sm:text-xl md:text-base" id="close-card-btn" tabindex="0">&times;</button>
        
        <div class="relative overflow-hidden">
          <div class="flex transition-transform duration-300 ease-in-out" id="cards-container" style="width: ${houseRules.length * 100}%; transform: translateX(0%);">
            ${houseRules.map((rule, index) => this.createCardHTML(rule, index)).join('')}
          </div>
        </div>
        
        <!-- Navigation Dots -->
        <div class="flex justify-center mt-3 sm:mt-4 md:mt-6 space-x-1.5 sm:space-x-2" id="navigation-dots">
          ${houseRules.map((_, index) => `
            <button 
              class="w-3 h-3 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 touch-manipulation ${index === 0 ? 'bg-gray-600' : 'bg-gray-300'}" 
              data-index="${index}"
              aria-label="Go to rule ${index + 1}"
            ></button>
          `).join('')}
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          class="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 active:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 w-12 h-12 sm:w-10 sm:h-10 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation text-xl sm:text-lg md:text-base" 
          id="prev-btn" 
          aria-label="Previous rule"
        >
          ‹
        </button>
        <button 
          class="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 active:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 w-12 h-12 sm:w-10 sm:h-10 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation text-xl sm:text-lg md:text-base" 
          id="next-btn" 
          aria-label="Next rule"
        >
          ›
        </button>
      </div>
    `;
    
    document.getElementById('root').appendChild(cardWrapper);
    
    // Event listeners
    cardWrapper.querySelector('#close-card-btn').addEventListener('click', () => this.hide());
    cardWrapper.querySelector('#prev-btn').addEventListener('click', () => this.previousCard());
    cardWrapper.querySelector('#next-btn').addEventListener('click', () => this.nextCard());
    
    // Navigation dots
    const dots = cardWrapper.querySelectorAll('#navigation-dots button');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToCard(index));
    });
    
    cardWrapper.addEventListener('keydown', this.handleKeyDown);
    
    // Touch events for swipe
    cardWrapper.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    cardWrapper.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    cardWrapper.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    
    // Close when clicking outside
    cardWrapper.addEventListener('click', (e) => {
      if (e.target === cardWrapper) {
        this.hide();
      }
    });
  }

  createCardHTML(rule, index) {
    const colorClasses = {
      green: 'text-green-600 bg-green-50 border-green-200',
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      orange: 'text-orange-600 bg-orange-50 border-orange-200',
      red: 'text-red-600 bg-red-50 border-red-200',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    };
    
    return `
      <div class="w-full flex-shrink-0 px-1 sm:px-2" style="width: ${100 / this.getHouseRules().length}%;">
        <div class="border-4 border-gray-100 rounded-xl p-3 sm:p-4 md:p-6 m-1 sm:m-2">
          <div class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 animate-bounce">${rule.icon}</div>
          <div class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3 drop-shadow leading-tight">${rule.title}</div>
          <div class="text-xs sm:text-sm md:text-base text-gray-500 mb-3 sm:mb-4 md:mb-5 lg:mb-6 italic">${rule.subtitle}</div>
          <div class="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 my-2 sm:my-3 md:my-4 lg:my-5 text-base sm:text-lg md:text-xl lg:text-2xl">
            <span class="animate-pulse opacity-70">${rule.emoji}</span>
            <span class="animate-pulse opacity-70 delay-150">${rule.emoji}</span>
          </div>
          <div class="font-semibold px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2 lg:py-3 rounded-full border-2 text-xs sm:text-sm md:text-base leading-relaxed ${colorClasses[rule.color]}">${rule.content}</div>
        </div>
      </div>
    `;
  }

  show() {
    const card = document.getElementById(this.cardId);
    if (!card) return;
    card.style.display = 'flex';
    card.focus();
    
    // Reset to first card
    this.currentCardIndex = 0;
    this.updateCardPosition();
    this.updateNavigation();
    
    // Prevent body scroll on mobile (Safari specific)
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.top = '0';
    document.body.style.left = '0';
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
    document.body.style.top = '';
    document.body.style.left = '';
  }

  nextCard() {
    const houseRules = this.getHouseRules();
    this.currentCardIndex = (this.currentCardIndex + 1) % houseRules.length;
    this.updateCardPosition();
    this.updateNavigation();
  }

  previousCard() {
    const houseRules = this.getHouseRules();
    this.currentCardIndex = (this.currentCardIndex - 1 + houseRules.length) % houseRules.length;
    this.updateCardPosition();
    this.updateNavigation();
  }

  goToCard(index) {
    this.currentCardIndex = index;
    this.updateCardPosition();
    this.updateNavigation();
  }

  updateCardPosition() {
    const container = document.getElementById('cards-container');
    if (container) {
      const translateX = -(this.currentCardIndex * (100 / this.getHouseRules().length));
      container.style.transform = `translateX(${translateX}%)`;
    }
  }

  updateNavigation() {
    const dots = document.querySelectorAll('#navigation-dots button');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    dots.forEach((dot, index) => {
      if (index === this.currentCardIndex) {
        dot.classList.remove('bg-gray-300');
        dot.classList.add('bg-gray-600');
      } else {
        dot.classList.remove('bg-gray-600');
        dot.classList.add('bg-gray-300');
      }
    });
    
    // Update button states
    if (prevBtn) prevBtn.style.opacity = this.currentCardIndex === 0 ? '0.5' : '1';
    if (nextBtn) nextBtn.style.opacity = this.currentCardIndex === this.getHouseRules().length - 1 ? '0.5' : '1';
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide();
    } else if (e.key === 'ArrowLeft') {
      this.previousCard();
    } else if (e.key === 'ArrowRight') {
      this.nextCard();
    }
  }

  handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    if (!this.touchStartX) return;
    
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const diffX = this.touchStartX - touchX;
    const diffY = this.touchStartY - touchY;
    
    // Only prevent default if it's a horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      e.preventDefault();
    }
  }

  handleTouchEnd(e) {
    if (!this.touchStartX) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = this.touchStartX - touchEndX;
    const diffY = this.touchStartY - touchEndY;
    
    // Check if it's a horizontal swipe (reduced threshold for mobile)
    const swipeThreshold = this.isMobile ? 30 : 50;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
      if (diffX > 0) {
        this.nextCard();
      } else {
        this.previousCard();
      }
    }
    
    this.touchStartX = 0;
    this.touchStartY = 0;
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
}

// Create the card instance (starts hidden)
const card = new Card();