import { Subjects } from './subjects';

export interface ApplicationCreatedEvent {
  subject: Subjects.ApplicationCreated;
  data: {
    id: string;
    userId: string;
    companyId: string;
  };
}
