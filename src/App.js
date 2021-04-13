import "./styles.css";
import { Provider } from "mobx-react";
import FetchDataStore from "./store/FetchData";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <Provider fetchDataStore={FetchDataStore}>
      <div className="App">
        <UsersList />
      </div>
    </Provider>
  );
}
