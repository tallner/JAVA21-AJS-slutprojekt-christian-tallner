import ReactDom from "react-dom/client";
import { useState } from "react";
import APIcalls from "./components/APIcalls";

function App() {
  const [apiData, setApiData] = useState(null);

  const returnText = (
    <div className="api">
      <div>
        <APIcalls setApiData={setApiData} />
        <div>
          {apiData}
        </div>
      </div>
    </div>
  );

  return returnText;
}

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
