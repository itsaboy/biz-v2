export default function ReactSnippet() {
  return (
    <pre>
      <code>
        {`import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
  
export default function App() {
  const [state, setState] = useState();

  return (
    <>
      <Outlet />
    </>
  );
}`}
      </code>
    </pre>
  );
}
