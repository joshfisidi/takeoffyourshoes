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
  'https://diecvqobuorelaybbnko.supabase.co/storage/v1/object/public/guma//IMG_4922.jpeg',
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

const createMarqueeRow = (rowIndex, reverse = false, slower = false) => {
  // Repeat images for seamless effect
  const images = [...imageUrls, ...imageUrls];
  const row = document.createElement('div');
  row.className = `marquee-row ${reverse ? 'reverse' : ''} ${slower ? 'slower' : ''} w-full h-36 items-center`;
  row.style.marginBottom = '0.5rem';
  row.style.marginTop = '0.5rem';
  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'rounded-xl shadow-lg mx-2 w-48 h-28 object-cover select-none pointer-events-none';
    img.setAttribute('draggable', 'false');
    row.appendChild(img);
  });
  return row;
};

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