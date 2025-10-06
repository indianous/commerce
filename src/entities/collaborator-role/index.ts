type Props = {
  content: string;
};
export class CollaboratorRole {
  readonly id: string;
  readonly content: string;
  constructor(props: Props, id?: string) {
    this.id = id ? id : "";
    this.content = props.content;
  }
}
