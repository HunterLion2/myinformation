export class UserModel {
  constructor(
    public email: string,
    public id: string,
    public _token: string,
    public _tokenExpirationDate: Date
  ) {}
}
