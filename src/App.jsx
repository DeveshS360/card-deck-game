import { CardGame } from "./components";
import "./styles.css";

export default function App() {
  console.log(
    [{ name: "Mohit" }, { name: "Mohit" }].indexOf({ name: "Mohit" })
  );

  for (var i = 0; i < 4; i++) {
    const callLog = (i) => {
      setTimeout(() => console.log(i), 0);
    };

    callLog(i);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CardGame />
    </div>
  );
}
