// Business details used across the site. Change them here and every page updates.
// NOTE: phone, email and prices were carried over from the original placeholder site. Replace them with the real ones before launch.
export const site = {
  name: 'Sparkle Cleaners',
  city: 'Leeds',
  area: 'Leeds & surrounding areas',
  phone: '0113 496 0021',
  phoneHref: 'tel:+441134960021',
  email: 'hello@sparklecleaners.co.uk',
  // URL of a form service (Formspree, Web3Forms...) that emails enquiries to the owner.
  // While this is empty the quote form opens the visitor's email app instead, so nothing is lost.
  formEndpoint: '',
};

export const nav = [
  { path: '/', label: 'Home' },
  { path: '/domestic', label: 'Home cleaning' },
  { path: '/commercial', label: 'Commercial' },
  { path: '/#process', label: 'How it works' },
  { path: '/contact', label: 'Contact' },
];
