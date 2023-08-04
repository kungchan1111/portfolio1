import React from "react";

// eslint-disable-next-line react/prop-types
function Main({ children }) {
  return (
    <main id="main" role="main">
      {children}
    </main>
  );
}

export default Main;
