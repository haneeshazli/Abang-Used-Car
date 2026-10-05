// Site content. Edit this file to update phone number, stock, gallery and placeholder photos.
// ⚠️ Values marked PLACEHOLDER were invented in the design mockup — replace with real ones.

export const site = {
  phone: '6012-345 6789', // PLACEHOLDER — updates every WhatsApp link on the page
  priceMode: 'bulanan', // 'bulanan' (monthly) | 'tunai' (full cash price)
  showPromo: true,
  company: 'Abang Usedcar Sdn Bhd',
  address: '[Alamat showroom], [Bandar], [Negeri]', // PLACEHOLDER
  hours: 'Isnin – Ahad, 10 pagi – 7 malam', // PLACEHOLDER
  rating: '4.9', // PLACEHOLDER
  mapsHref: 'https://www.google.com/maps?q=abang+used+car+showroom',
  wazeHref: 'https://waze.com/ul?q=abang%20used%20car%20showroom&navigate=yes',
  youtubeEmbed: 'https://www.youtube.com/embed/jzUibfTQLD0?si=XExBoU-p8d-Lp7u8&start=15',
  socials: {
    facebook: 'https://www.facebook.com/AbangUsedCar/',
    instagram: 'https://www.instagram.com/abangusedcar/',
    tiktok: 'https://www.tiktok.com/@abangusedcar.official',
    youtube: 'https://www.youtube.com/@abangusedcar'
  },
  // Leave src empty ('') to show a placeholder box. Drop the file in public/uploads/ and set e.g. 'uploads/hero.jpg'.
  heroImage: ''
};

// PLACEHOLDER stock — `img` is optional; empty shows a photo placeholder.
export const stock = [
  { id: 1, name: 'Perodua Myvi 1.5 AV', year: 2019, km: '62,000 km', trans: 'Auto', type: 'Hatchback', cash: 45800, month: 520, img: '' },
  { id: 2, name: 'Honda City 1.5 V', year: 2018, km: '78,000 km', trans: 'Auto', type: 'Sedan', cash: 58900, month: 660, img: '' },
  { id: 3, name: 'Proton X70 1.8 TGDI', year: 2020, km: '55,000 km', trans: 'Auto', type: 'SUV', cash: 79800, month: 890, img: '' },
  { id: 4, name: 'Toyota Vios 1.5 G', year: 2017, km: '91,000 km', trans: 'Auto', type: 'Sedan', cash: 49800, month: 560, img: '' },
  { id: 5, name: 'Perodua Alza 1.5 AV', year: 2018, km: '84,000 km', trans: 'Auto', type: 'MPV', cash: 42800, month: 480, img: '' },
  { id: 6, name: 'Perodua Axia 1.0 G', year: 2019, km: '48,000 km', trans: 'Auto', type: 'Hatchback', cash: 25800, month: 299, img: '' }
];

export const tabs = ['Semua', 'Hatchback', 'Sedan', 'MPV', 'SUV'];

export const gallery = [
  { src: 'uploads/abg-customer-001.jpg', pos: 'center 30%' },
  { src: 'uploads/unnamed.webp', pos: 'center 30%' },
  { src: 'uploads/abg-customer-147.jpg', pos: 'center 30%' },
  { src: 'uploads/abg-customer-191.jpg', pos: 'center 30%' },
  { src: 'uploads/unnamed-1.webp', pos: 'center 88%' },
  { src: 'uploads/abg-customer-202.jpg', pos: 'center 30%' },
  { src: 'uploads/abg-customer-207.jpg', pos: 'center 30%' },
  { src: 'uploads/unnamed-2.webp', pos: 'center 30%' },
  { src: 'uploads/abg-customer-247.jpg', pos: 'center 30%' }
];
