// Copy for the whole site. Services and prices come from the original site; confirm them before launch.
export type Service = { slug: 'domestic' | 'commercial'; title: string; text: string; price: string; icon: 'Home' | 'Sparkles' | 'KeyRound' | 'Building2' };

export const services: Service[] = [
  { slug: 'domestic', icon: 'Home', title: 'Regular home clean', text: 'Kitchens, bathrooms, floors and living spaces refreshed on a weekly, fortnightly or monthly rhythm.', price: 'From £22/hr' },
  { slug: 'domestic', icon: 'Sparkles', title: 'Deep clean', text: 'Behind appliances, inside cupboards, skirting boards and every corner that a quick tidy skips.', price: 'From £110' },
  { slug: 'domestic', icon: 'KeyRound', title: 'End of tenancy', text: 'A full top-to-bottom clean built to satisfy landlord checkouts and deposit inspections.', price: 'From £150' },
  { slug: 'commercial', icon: 'Building2', title: 'Office & commercial', text: 'Scheduled cleans for offices, studios and shopfronts, before or after your working hours.', price: 'Custom quote' },
];

export const checklists = {
  home: [
    { room: 'Kitchen', tasks: ['Worktops and splashbacks wiped', 'Hob, sink and taps scrubbed', 'Appliance fronts polished', 'Floors vacuumed and mopped'] },
    { room: 'Bathroom', tasks: ['Toilet, basin and bath descaled', 'Tiles and glass shined', 'Mirrors streak-free', 'Floors washed'] },
    { room: 'Living spaces', tasks: ['Surfaces dusted top to bottom', 'Sofas and floors vacuumed', 'Skirting boards wiped', 'Bins emptied'] },
    { room: 'Bedrooms', tasks: ['Dust cleared from every surface', 'Mirrors and glass polished', 'Floors vacuumed', 'Finishing touches, never half-done'] },
  ],
  office: [
    { room: 'Workspaces', tasks: ['Desks and screens wiped', 'Chairs and surfaces dusted', 'Floors vacuumed and mopped', 'Bins emptied'] },
    { room: 'Kitchenette', tasks: ['Worktops and sinks cleaned', 'Appliance fronts wiped', 'Touch points sanitised', 'Floors washed'] },
    { room: 'Washrooms', tasks: ['Toilets and basins descaled', 'Mirrors and glass shined', 'Dispensers refilled where supplied', 'Floors mopped'] },
    { room: 'Reception & meeting rooms', tasks: ['Glass and doors smear-free', 'Tables polished', 'Entrance swept and mopped', 'Ready before your first meeting'] },
  ],
};

export const steps = [
  { n: '01', title: 'Tell us your space', text: 'Send a few details about your home or office and how often you would like us to visit.' },
  { n: '02', title: 'Get matched with a cleaner', text: 'We pair you with a vetted, insured cleaner who returns for every future visit.' },
  { n: '03', title: 'Walk into sparkle', text: "Come home to a space that is actually clean, and tell us if anything is missed, free of charge." },
];

export const promises = [
  { icon: 'Repeat', title: 'Same cleaner, every visit', text: 'You get to know them and they get to know your space.' },
  { icon: 'ShieldCheck', title: 'Fully insured', text: 'Trusted with your keys and covered while they work.' },
  { icon: 'BadgeCheck', title: '100% re-clean guarantee', text: 'If something is missed, tell us and we will put it right.' },
];

export const pages = {
  domestic: {
    kind: 'home' as const,
    eyebrow: 'Home cleaning in Leeds',
    title: 'A home that feels brand new, on repeat.',
    blurb: 'Regular cleans, deep cleans and end of tenancy cleans, all done by the same vetted, insured cleaner and a checklist that leaves nothing streaky, dusty or half-done.',
    cta: 'Get a home quote',
    offers: [
      { title: 'Regular home clean', text: 'Weekly, fortnightly or monthly. Kitchens, bathrooms, floors and living spaces refreshed to the same high standard each time.', price: 'From £22/hr' },
      { title: 'Deep clean', text: 'Behind appliances, inside cupboards, skirting boards and every corner a quick tidy skips. Ideal as a reset or before moving in.', price: 'From £110' },
      { title: 'End of tenancy', text: 'A full top-to-bottom clean built to satisfy landlord checkouts and deposit inspections.', price: 'From £150' },
    ],
    list: ['Same trusted cleaner every visit', 'Fully insured', '100% re-clean guarantee', 'Kitchens, bathrooms, floors and living spaces', 'Weekly, fortnightly, monthly or one-off'],
    checklist: 'home' as const,
  },
  commercial: {
    kind: 'office' as const,
    eyebrow: 'Office & commercial cleaning in Leeds',
    title: 'Walk into work. Not into mess.',
    blurb: 'Scheduled cleans for offices, studios and shopfronts, done before or after your working hours so the day starts fresh and nobody is in the way.',
    cta: 'Get a commercial quote',
    offers: [
      { title: 'Offices', text: 'Desks, floors, kitchenettes and washrooms kept spotless on a schedule that fits your team.', price: 'Custom quote' },
      { title: 'Studios & workshops', text: 'Creative spaces and shared studios cleaned around your sessions and deadlines.', price: 'Custom quote' },
      { title: 'Shopfronts', text: 'Sparkling glass, floors and entrances before the doors open.', price: 'Custom quote' },
    ],
    list: ['Before or after your working hours', 'Same trusted team, every visit', 'Fully insured', '100% re-clean guarantee', 'A price tailored to your space'],
    checklist: 'office' as const,
  },
};
