import axios from "axios";
import { decorate, runInAction, observable, action } from "mobx";

class FetchDataStore {
  usersData = [];

  getListOfUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      runInAction(() => {
        this.usersData = res.data;
      });
    });
  };

  search = (e) => {
    console.log(e);
    const filtered = this.usersData.filter((u) => {
      return u.name.toLowerCase() === e.toLowerCase();
    });
    runInAction(() => {
      this.usersData = filtered;
    });
  };
}

decorate(FetchDataStore, {
  usersData: observable,
  getListOfUsers: action,
  search: action
});

export default new FetchDataStore();
