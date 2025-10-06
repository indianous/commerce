import { Collaborator } from "../../entities/collaborator";
import { User } from "../../entities/user";
import { CollaboratorRepository } from "../../repository/contractor/collaborator";

type Props = {
  birthDate: Date;
  email: string;
  firstname: string;
  gender: string;
  lastname: string;
  phoneNumber: string;
  username: string;
};

class RegisterCollaborator {
  constructor(private repository: CollaboratorRepository) {}

  async execute(props: Props) {
    const {
      birthDate,
      email,
      firstname,
      gender,
      lastname,
      phoneNumber,
      username,
    } = props;
    const collaborator = new Collaborator({
      user: new User({
        birthDate,
        email,
        firstname,
        gender,
        lastname,
        phoneNumber,
        sessions: [],
        username,
      }),
      roles: [],
    });
    this.repository.register(collaborator);
  }
}

const registerCollaborator = new RegisterCollaborator({
  register: async (c: Collaborator) => {
    return;
  },
});

export { registerCollaborator };
