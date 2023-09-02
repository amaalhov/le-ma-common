import { Subjects } from './subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    fullnames: string;
    idno: string;
    idcard: string;
    verified: string;
    email: string;
    status: string;
    role: string;
  };
}
