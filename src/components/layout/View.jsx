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
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </ContentContainer>
  );
}

export default View;
