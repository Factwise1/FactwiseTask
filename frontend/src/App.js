import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import UserScreen from "./Screen/UserScreen";
import UserEditScreen from "./Screen/UserEditScreen";

function App() {
  return (
    <div className="App">
      <Flex marginTop="80px" direction="column"></Flex>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:id" element={<UserScreen />} />
        <Route path="/:id/edit" element={<UserEditScreen />} />
      </Routes>
    </div>
  );
}

export default App;
