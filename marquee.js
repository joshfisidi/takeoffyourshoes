const marqueeBg = document.getElementById('marquee-bg');

const imageUrls = [
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0422.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0747.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//b9a44571-0c9b-4375-970d-d6f62884e7bf.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//e8fc7e04-368e-464f-8be4-d0d586c73a61.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0665.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0253.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//f3ce14c2-42a4-4964-8a87-c15e9676e227.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//47f61d18-85bc-4c35-a42f-1f45c4d65a84.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0198.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0218.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0377.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_0426.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_1454.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_1548.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_1806_Facetune_27-10-2018-00-28-38.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_1915.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_2140.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_2187.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_2200.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_2216.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_3014.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_3541.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_3662.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4255.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4284.png',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4740.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4784.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4791.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4796.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4812.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4922.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4929.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_5443.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_5614.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_5621.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_7355.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_7526.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_7968.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_7987.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8222.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8226.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8256.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8346.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8356.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8364.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8395.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8687.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8718.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8738.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8916.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8917.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_8996.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_9331.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_9693.jpeg',
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_9752.jpeg',
];

// Remove duplicates from imageUrls array
const uniqueImageUrls = [...new Set(imageUrls)];

// Get responsive image dimensions based on screen size
const getImageDimensions = () => {
  const width = window.innerWidth;
  if (width <= 480) {
    return { width: 80, height: 60, margin: 4 }; // Small mobile
  } else if (width <= 768) {
    return { width: 120, height: 90, margin: 8 }; // Large mobile/small tablet
  } else if (width <= 1024) {
    return { width: 160, height: 120, margin: 12 }; // Tablet
  } else {
    return { width: 192, height: 112, margin: 16 }; // Desktop
  }
};

// Calculate how many images fit in viewport width
const getImagesNeededForViewport = () => {
  const { width, margin } = getImageDimensions();
  const imageWidth = width + (margin * 2);
  const viewportWidth = window.innerWidth;
  const imagesInView = Math.ceil(viewportWidth / imageWidth);
  // Add extra images for seamless scrolling (2x viewport width for mobile, 3x for desktop)
  const multiplier = window.innerWidth <= 768 ? 2 : 3;
  return imagesInView * multiplier;
};

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create a randomized sequence with no adjacent duplicates
const createRandomizedSequence = (baseArray, targetLength) => {
  const sequence = [];
  const availableImages = [...baseArray];
  let lastImage = null;
  
  for (let i = 0; i < targetLength; i++) {
    if (availableImages.length === 0) {
      availableImages.push(...shuffleArray(baseArray));
    }
    
    let selectedIndex = 0;
    if (lastImage && availableImages.length > 1) {
      do {
        selectedIndex = Math.floor(Math.random() * availableImages.length);
      } while (availableImages[selectedIndex] === lastImage && availableImages.length > 1);
    } else {
      selectedIndex = Math.floor(Math.random() * availableImages.length);
    }
    
    const selectedImage = availableImages.splice(selectedIndex, 1)[0];
    sequence.push(selectedImage);
    lastImage = selectedImage;
  }
  
  return sequence;
};

// Create placeholder image data URL
const createPlaceholder = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  return canvas.toDataURL();
};

// Lazy loading setup
let imageObserver;

const initializeLazyLoading = () => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          const imageLoader = new Image();
          
          imageLoader.onload = () => {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
            imageObserver.unobserve(img);
          };
          
          imageLoader.onerror = () => {
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-error');
            imageObserver.unobserve(img);
          };
          
          imageLoader.src = src;
        }
      }
    });
  }, options);
};

const createMarqueeRow = (rowIndex, reverse = false, slower = false) => {
  const imagesNeeded = getImagesNeededForViewport();
  const { width, height, margin } = getImageDimensions();
  const randomizedImages = createRandomizedSequence(uniqueImageUrls, imagesNeeded);
  
  const row = document.createElement('div');
  row.className = `marquee-row ${reverse ? 'reverse' : ''} ${slower ? 'slower' : ''} w-full items-center`;
  
  // Responsive row height
  if (window.innerWidth <= 480) {
    row.style.height = '60px';
    row.style.marginBottom = '4px';
    row.style.marginTop = '4px';
  } else if (window.innerWidth <= 768) {
    row.style.height = '90px';
    row.style.marginBottom = '6px';
    row.style.marginTop = '6px';
  } else {
    row.style.height = '112px';
    row.style.marginBottom = '8px';
    row.style.marginTop = '8px';
  }
  
  const placeholder = createPlaceholder(width, height);
  
  randomizedImages.forEach((src, index) => {
    const img = document.createElement('img');
    
    img.src = placeholder;
    img.setAttribute('data-src', src);
    img.alt = '';
    img.className = 'rounded-lg shadow-md object-cover select-none pointer-events-none lazy-loading';
    img.setAttribute('draggable', 'false');
    
    // Responsive image sizing
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.style.marginLeft = `${margin}px`;
    img.style.marginRight = `${margin}px`;
    
    img.style.transition = 'opacity 0.3s ease-in-out';
    
    if (imageObserver) {
      imageObserver.observe(img);
    }
    
    row.appendChild(img);
  });
  
  return row;
};

const initializeMarquee = () => {
  initializeLazyLoading();
  
  const marqueeRows = [
    createMarqueeRow(0, false, false),
    createMarqueeRow(1, true, false),
    createMarqueeRow(2, false, true),
    createMarqueeRow(3, true, true),
  ];

  const container = document.createElement('div');
  container.className = 'flex flex-col justify-center items-center w-full h-full';
  marqueeRows.forEach(row => container.appendChild(row));
  marqueeBg.appendChild(container);
};

// Initialize the marquee
initializeMarquee();

// Reinitialize on window resize to adjust image count
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (imageObserver) {
      imageObserver.disconnect();
    }
    marqueeBg.innerHTML = '';
    initializeMarquee();
  }, 250); // Debounce resize events
});

// Add CSS for lazy loading states
const style = document.createElement('style');
style.textContent = `
  .lazy-loading {
    opacity: 0.7;
    -webkit-filter: blur(1px);
    filter: blur(1px);
  }
  
  .lazy-loaded {
    opacity: 1;
    -webkit-filter: none;
    filter: none;
  }
  
  .lazy-error {
    opacity: 0.5;
    background-color: #f3f4f6;
  }
`;
document.head.appendChild(style);