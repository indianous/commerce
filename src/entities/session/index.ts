type Props = { token: string; expiredAt?: Date };

export class Session {
  readonly id: string;
  readonly token: string;
  readonly expiredAt: Date;
  constructor(props: Props, id?: string) {
    this.id = id ? id : "";
    this.token = props.token;
    this.expiredAt = props.expiredAt ? props.expiredAt : new Date();
  }
}
