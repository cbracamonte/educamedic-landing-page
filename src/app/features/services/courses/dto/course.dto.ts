export interface ICourse {
  createdDate: Date;
  description: string;
  duration: string;
  endDate: Date;
  endHour: string;
  facebookData: IFacebookData;
  id: string;
  name: string;
  publicationDate: Date;
  startDate: Date;
  startHour: string;
  status: string;
  updatedDate: Date;
  urlMeeting: string;
  uuid: string;
  imageUrl: string;
  averageRating: number;
  courseRatings: CourseRating[];
  courseReactions: CourseReaction[];
  categories: Category[];
  courseModes: CourseMode[];
}

export interface IFacebookData {
  eventUrl: string;
  pageId: string;
  pageName: string;
}

export interface Category {
  description: string;
  name: string;
  uuid: string;
}

export interface CourseMode {
  description: string;
  name: string;
  uuid: string;
}

export interface CourseRating {
  courseUuid: string;
  createdAt: Date;
  rating: number;
  userUuid: string;
  uuid: string;
}

export interface CourseReaction {
  comment: Comment;
  courseUuid: string;
  createdAt: Date;
  reaction: Reaction;
  userUuid: string;
  uuid: string;
}

export enum Reaction {
  Like = "LIKE",
  Love = "LOVE",
  Wow = "WOW",
}
