import { User } from "../user";
import { CollaboratorRole } from "../collaborator-role";
type Props = {
  user: User;
  roles: CollaboratorRole[];
};

export class Collaborator {
  readonly id: string;
  readonly user: User;
  readonly roles: CollaboratorRole[];
  constructor(props: Props, id?: string) {
    this.id = id ? id : "";
    this.user = props.user;
    this.roles = props.roles;
  }
}
