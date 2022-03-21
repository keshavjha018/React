// import React from "react";

function App() {
  return (
    // JSX 
    <>
      <Greet />
      <Greet />
      <h1>Keshav Jha</h1>
      
    </>
  );
};

//component (fun- based)
const Greet = () => {
  return <h1>Hello World</h1>;
};

// export App fun to index.js
export default App;
