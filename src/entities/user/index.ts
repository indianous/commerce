import { Session } from "../session";
import { Gender } from "../gender";

type Props = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  sessions: Session[];
  gender: Gender;
};

export class User {
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly username: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly birthDate: Date;
  readonly sessions: Session[];
  readonly gender: Gender;
  constructor(props: Props, id?: string) {
    this.id = id ? id : "";
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.username = props.username;
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.birthDate = props.birthDate;
    this.sessions = props.sessions;
    this.gender = props.gender;
  }
}
