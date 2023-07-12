import "./App.css";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import InputState from "./components/InputState";
import User from "./components/User";

import { useEffect, useState } from "react";

function App() {
  const [lang, setLang] = useState("türkçe");
  const [lists, setList] = useState(["list1", "list2"]);
  useEffect(() => {
    console.log("state güncellendi");
  });
  return (
    <div>
      <h6>
        --------------------------------------------------------------------------------------------------
      </h6>
      <h5>Component</h5>
      <h6>Örnek:</h6>
      <Hello />
      <h6>
        --------------------------------------------------------------------------------------------------
      </h6>
      <h6>
        --------------------------------------------------------------------------------------------------
      </h6>
      <h5>Props componentler arası veri aktarımı yapar</h5>
      <h6>Örnek:</h6>
      <User name="deneme" isLogged={true} friends={["ali", "ayşe", "mehmet"]} />
      <h6>
        --------------------------------------------------------------------------------------------------
      </h6>
      <h6>
        --------------------------------------------------------------------------------------------------
      </h6>
      <h5>State: componentin herhangibir anında değerini değiştirebilmemiz.</h5>
      <h6>Örnek:</h6>
      {lang}
      <br />
      <button onClick={() => setLang("ingilizce")}>eng</button>
      <h5>List</h5>
      {lists.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
      <button onClick={() => setList([...lists, "list3"])}>Ekle</button>
      <br></br>
      <h6>
        --------------------------------------------------------------------------------------------------
      </h6>
      <Counter />
      <hr />
      <InputState />
    </div>
  );
}

export default App;
