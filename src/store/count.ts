import {
  makeAutoObservable, reaction, runInAction
} from 'mobx';

class Count {
  count = 0;
  constructor() {
    makeAutoObservable(this, { }, { autoBind: true });
  }
  increment() {
    this.count += 1;
  }
  reset() {
    this.count = 0;
  }
  decrement() {
    setTimeout(() => {
      runInAction(() => { // setTimeout函数里面直接修改属性值会报错，一次要用到runInAction
        this.count -= 1;
      });
    },2000);
  }
  get double() {
    return this.count * 2;
  }
}

const count = new Count();

reaction(() => count.count, (value, oldValue) => {
  console.log(value, oldValue);
});
export default count;
