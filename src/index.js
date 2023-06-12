import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle  from "./style/globalStyle";
import Routes from "./routes/routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
<Routes/>
<GlobalStyle/>
</>
  )
;
