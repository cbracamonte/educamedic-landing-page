export interface ICourse {
  categoryIds: string[];
  courseModeIds: string[];
  createdDate: Date;
  description: string;
  duration: string;
  endDate: Date;
  endHour: string;
  facebookData: IFacebookData;
  id: string;
  instructorIds: string[];
  name: string;
  publicationDate: Date;
  sponsorIds: string[];
  startDate: Date;
  startHour: string;
  status: string;
  testiomonialIds: any[];
  updatedDate: Date;
  urlMeeting: string;
  uuid: string;
}

export interface IFacebookData {
    eventUrl: string;
    pageId: string;
    pageName: string;
  }
  
