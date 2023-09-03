import { Subjects } from './subjects';

export interface ApplicationUpdatedEvent {
  subject: Subjects.ApplicationUpdated;
  data: {
    id: string;
    userId: string;
    companyId: string;
  };
}
