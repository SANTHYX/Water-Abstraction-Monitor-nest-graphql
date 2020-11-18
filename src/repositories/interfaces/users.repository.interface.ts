export interface IUsersRepository {
  isExist(username: string): Promise<boolean>;
}
