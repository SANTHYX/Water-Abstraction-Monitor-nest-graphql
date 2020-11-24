export interface IUsersRepository {
  isExist(username: string, password?:string): Promise<boolean>;
}
