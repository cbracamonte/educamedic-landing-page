export interface FeatureItem {
  title: string;
  description: string;
}

export interface OptionRoute {
  title: string;
  url: string;
}

export interface Intro {
  title: string;
  description: string;
  route: OptionRoute[];
}

export interface Features {
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface Courses {
  title: string;
  description: string;
  route: OptionRoute;
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
  route: OptionRoute;
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
  route: OptionRoute;
}

export interface Contact {
  title: string;
  description: string;
  actionText: string;
}

export interface NotFound {
  title: string;
  description: string;
  actionText: string;
}

export interface AppData {
  home: Home;
  notFound: NotFound;
}
