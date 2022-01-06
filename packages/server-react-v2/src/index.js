import React from "react";
import { render } from "react-dom";
import  Bracket  from "./packages/Bracket";
import data from "./data.json";
import jsog from "jsog";

const decoded = jsog.decode(data);
console.log(JSON.stringify(decoded, null, 4));

const App = () => (
  <div>
    <Bracket data={decoded} />
  </div>
);

render(<App />, document.getElementById("root"));
