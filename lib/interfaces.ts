export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface Person {
  name: string;
  role: string;
  avatar: string;
}

export interface Testimonial extends Person {
  comment: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Director extends Person {
  quote: string;
  social: {
    twitter: string;
    linkedin: string;
  };
}

export interface Client {
  name: string;
  logo: string;
}

export interface HelpTopic {
  title: string;
  icon: string;
  alt: string;
}