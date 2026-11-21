export const profile = {
  name: 'Sohail Ahmed',
  title: 'Senior Front-End & CMS Developer',
  location: 'Karachi, Pakistan',
  email: 'sohailalijamali3@gmail.com',
  phone: '+92 311 0897382',
  phoneHref: 'tel:+923110897382',
  linkedin: 'https://pk.linkedin.com/in/sohail-ali-jamali-3868aa192',
};

export const services = [
  { icon: 'Globe', title: 'WordPress & Elementor Development', value: 'Fast, editable WordPress sites that are easy for your team to manage.', points: ['Custom themes & plugins', 'Elementor builds', 'Responsive, SEO-focused development', 'Hosting & production deployment'] },
  { icon: 'ShoppingBag', title: 'Shopify Development', value: 'Stores ready to take payments.', points: ['Storefront customization', 'Payment gateway integration'] },
  { icon: 'Layers', title: 'Webflow Development', value: 'Polished, responsive Webflow sites.', points: ['Responsive builds', 'Domain & DNS setup'] },
  { icon: 'Code2', title: 'Front-End Development', value: 'Pixel-accurate interfaces turned from briefs into production-ready code.', points: ['HTML5, CSS3 & JavaScript', 'Bootstrap, Tailwind CSS & jQuery', 'UI implementation'] },
  { icon: 'Database', title: 'CMS Development', value: 'One developer across every major CMS.', points: ['WordPress · Shopify · HubSpot', 'GoHighLevel · Webflow · Squarespace'] },
  { icon: 'Gauge', title: 'Optimization & SEO', value: 'Sites built to load fast and be found.', points: ['Performance optimization', 'SEO-focused development'] },
  { icon: 'Rocket', title: 'Migration & Deployment', value: 'Move or launch without the stress.', points: ['Website migration', 'Hosting, domains & DNS', 'Production deployment'] },
  { icon: 'BarChart3', title: 'Analytics & Tracking', value: 'Know what your marketing is doing.', points: ['GA4 & Google Tag Manager', 'Meta Pixel', 'Google Ads conversions', 'CallRail call tracking'] },
];

export const stack = [
  { group: 'CMS & Platforms', items: ['WordPress', 'Elementor', 'Shopify', 'HubSpot', 'GoHighLevel', 'Webflow', 'Squarespace'] },
  { group: 'Front-End', items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind CSS'] },
  { group: 'Back-End & Integrations', items: ['PHP', 'Zapier', 'Payment Gateway Integration'] },
  { group: 'Hosting & Deployment', items: ['Hosting', 'DNS', 'Website Migration', 'Deployment'] },
  { group: 'Practices', items: ['SEO', 'Website Optimization'] },
  { group: 'Analytics & Tracking', items: ['Google Analytics 4', 'Google Tag Manager', 'Meta Pixel', 'Google Ads Conversion Tracking', 'CallRail'] },
];

// Edit freely: set `featured`, `tags` (e.g. ['WordPress','Elementor']) and `note` per site.
// Add a screenshot at public/projects/<name>.jpg and set image: '/projects/<name>.jpg' to replace the placeholder preview.
type Project = { domain: string; featured: boolean; note: string; tags: string[]; image?: string };
const base = { note: 'Front-End & CMS development', tags: ['CMS Website', 'Responsive'] };
export const projects: Project[] = [
  { domain: 'accelerec.com', featured: true, ...base },
  { domain: 'futureinnovation.tech', featured: true, ...base },
  { domain: 'agrifoods.pk', featured: true, ...base },
  { domain: 'lakelanddumptrailerrentals.com', featured: true, ...base },
  { domain: 'authorscrew.com', featured: true, ...base },
  { domain: 'forseeshipping.com', featured: true, ...base },
  { domain: 'gsagrofeeds.com', featured: false, ...base },
  { domain: 'niagara-contractors.ca', featured: false, ...base },
  { domain: 'classicmens.ae', featured: false, ...base },
  { domain: 'millacfoods.com', featured: false, ...base },
  { domain: 'allwireelectricllcmidwest.com', featured: false, ...base },
  { domain: 'baghiarfarms.com', featured: false, ...base },
  { domain: 'budgetroofingservice.com', featured: false, ...base },
];

export const experience = [
  { company: 'Codefied', role: 'CMS Developer', period: 'May 2025 – Present', points: ['Build, customize and maintain WordPress, Shopify, HubSpot, Webflow and Squarespace websites.', 'Manage end-to-end delivery: front-end development, CMS customization, optimization, hosting and production deployment.', 'Configure domains and DNS and perform website migrations.'] },
  { company: 'OTB Advertising LLC', role: 'WordPress & Front-End Senior Developer', period: 'Feb 2025 – Jun 2025', points: ['Developed WordPress websites and front-end interfaces in a senior developer role.'] },
  { company: 'Technite Solution', role: 'Senior Front-End & CMS Developer', period: 'May 2023 – Jan 2025', points: ['Built responsive websites and interfaces using HTML5, CSS3, JavaScript, Bootstrap and Tailwind CSS.', 'Worked directly with clients to translate briefs into CMS websites and production-ready interfaces.'] },
  { company: 'KDYS Lab', role: 'WordPress Development Roles', period: 'Jun 2021 – May 2023', points: ['Developed and customized WordPress websites, themes and plugins for client projects.', 'Progressed from Internship Trainee (Jun 2021) to Junior (Nov 2021) and Senior WordPress Developer (Jan 2022).'] },
];
