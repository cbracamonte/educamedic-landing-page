export interface FeatureItem {
  title: string;
  description: string;
}

export interface Intro {
  title: string;
  description: string;
  mainActionText: string;
  secondaryActionText?: string;
}

export interface Features {
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface Courses {
  title: string;
  description: string;
  actionText: string;
}

export interface PricingItem {
  title: string;
  description: string;
  price: number;
  features: string[];
}

export interface Pricing {
  title: string;
  description: string;
  items: PricingItem[];
  actionText: string;
}

export interface Home {
  intro: Intro;
  features: Features;
  instructors: Instructors;
  courses: Courses;
  pricing: Pricing;
  contact: Contact;
}

export interface Instructors {
  title: string;
  description: string;
  actionText: string;
}

export interface Contact {
  title: string;
  description: string;
  actionText: string;
}

export interface AppData {
  home: Home;
}
