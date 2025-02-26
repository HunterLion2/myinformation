export class UserModel {
  constructor(
    public email: string,
    public password: string | number,
    public returnSecureToken: true,
    public _tokenExpirationDate: Date
  ) {}
}
