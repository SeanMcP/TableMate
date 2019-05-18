import React from "react";

import ContentContainer from "./ContentContainer";

function View({ children, title, description }) {
  React.useEffect(() => {
    if (title === "TableMate") {
      document.title = title;
    } else {
      document.title = `${title} - TableMate`;
    }
  }, [document]);
  return (
    <ContentContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </ContentContainer>
  );
}

export default View;
