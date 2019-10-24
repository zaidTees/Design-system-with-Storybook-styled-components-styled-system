import React from "react";
import { StyledButton } from "./components/Button";
import Box from "./components/Box";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <StyledButton onClick={() => console.log("clicked")}>
          Styled button
        </StyledButton>
        <Box
          color="white"
          bg="blue"
          m={2}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          hello
        </Box>
      </header>
    </div>
  );
};

export default App;
