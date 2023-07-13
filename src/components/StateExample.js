import React from "react";
import { useState } from "react";

function StateExample() {
  const [lang, setLang] = useState("türkçe");
  const [lists, setList] = useState(["list1", "list2"]);
  return (
    <div>
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
    </div>
  );
}

export default StateExample;
