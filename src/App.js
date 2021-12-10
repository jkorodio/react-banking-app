import "./App.css";
import Registration from "./pages/login/Registration";
import { toast } from "react-toastify";

function App() {
  toast.configure();

  return (
    <div className="App">
      {/* <Header /> */}
      <Registration />
    </div>
  );
}

export default App;
