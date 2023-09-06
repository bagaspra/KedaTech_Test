import { facebook, instagram, twitter } from '../assets/icons';
import { box } from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#price', label: 'Price' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const statistics = [
  { value: '1k+', label: 'Merek' },
  { value: '500+', label: 'Toko' },
  { value: '250k+', label: 'Pelanggan' },
];

export const tiers = [
  {
    imgURL: box,
    label: 'Basic',
    price: '50rb',
    currency: 'IDR',
    frequency: '/Bulan',
    features: [
      'Mencatat Barang Masuk',
      'Mencatat Bagian Keluar',
      'Mencatat Keuntungan',
    ],
    mostPopular: false,
  },
  {
    imgURL: box,
    label: 'Business',
    price: '100rb',
    currency: 'IDR',
    frequency: '/Bulan',
    features: [
      'Mencatat Barang Masuk dan Keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam',
    ],
    mostPopular: true,
  },
  {
    imgURL: box,
    label: 'Entrepreneur',
    price: '150rb',
    currency: 'IDR',
    frequency: '/Bulan',
    features: [
      'Mencatat Barang Masuk dan Keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam',
      'Export data ke Excel',
      'AI Prediksi penghasilan',
    ],
    mostPopular: false,
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Keuangan', link: '/' },
      { name: 'Manajemen Persediaan', link: '/' },
      { name: 'Manajemen Proyek', link: '/' },
      { name: 'Manajemen SDM', link: '/' },
      { name: 'Produksi', link: '/' },
      { name: 'Penjualan dan Pemasaran', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@erp.com', link: 'mailto:customer@erp.com' },
      { name: '+628975588410', link: 'tel:+62115544864' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
