import { Collaborator } from "../../../entities/collaborator";

export interface CollaboratorRepository {
  register(collaborator: Collaborator): Promise<void>;
}
