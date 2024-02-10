export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: '/icons/icon-facebook.svg',
    label: 'Facebook',
    href: 'https://www.facebook.com'
  },
  {
    icon: '/icons/icon-pinterest.svg',
    label: 'Pinterest',
    href: 'https://www.pinterest.com'
  },
  {
    icon: '/icons/icon-twitter.svg',
    label: 'Twitter',
    href: 'https://www.twitter.com'
  }
];