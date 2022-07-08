import { makeAutoObservable } from 'mobx';

class Auth {
  username = 'lgp';
  constructor() {
    makeAutoObservable(this,{},{ autoBind: true });
  }
  newUser(user:string) {
    this.username = user;
  }
}
const auth = new Auth();

export default auth;
