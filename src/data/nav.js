// Information architecture mirrored from production (https://aquasecure.ai).
// The live site drives its navbar and footer from one array; same approach here so the two
// can never drift apart.

export const PRODUCTS = [
  { label: 'GRC', href: '/products/grc' },
  { label: 'SOC', href: '/products/soc' },
  { label: 'Aqua SIEM', href: '/products/siem' },
  { label: 'Threat Intelligence', href: '/products/threat-intel' },
  { label: 'Asset Management', href: '/products/asset-management' },
  { label: 'Dark Web', href: '/products/dark-web' },
  { label: 'Phishbot', href: '/products/phishbot' },
];

export const SOLUTIONS = [
  { label: 'Manage SIEM', href: '/solutions/manage-siem' },
  { label: 'Attack Surface', href: '/solutions/attack-surface' },
  { label: 'DMARC', href: '/solutions/dmarc' },
  { label: 'Phishing Campaigns', href: '/solutions/phishing-campaigns' },
  { label: 'E-learning', href: '/solutions/e-learning' },
  { label: 'Compliance Management', href: '/solutions/compliance-management' },
];

// Both have pages on this site now, so they route internally rather than opening the live
// product hosts in a new tab.
export const PLATFORM = [
  { label: 'Aqua TIP', href: '/platform/aqua-tip' },
  { label: 'Aqua Secure Portal', href: '/platform/portal' },
];

export const NAV_GROUPS = [
  { label: 'Products', href: '/products', items: PRODUCTS },
  { label: 'Solutions', href: '/solutions', items: SOLUTIONS },
  { label: 'Platform', href: '/platform', items: PLATFORM },
  { label: 'Pricing', href: '#pricing', items: [] },
  { label: 'Contact', href: '#contact', items: [] },
];
