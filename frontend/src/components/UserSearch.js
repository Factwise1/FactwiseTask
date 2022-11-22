import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { getUsers } from "../actions/userActions";
// import UserClosed from "./UserClosed";

const UserSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Flex direction="column" justifyContent="center" mx="auto" my="80px">
        <Box
          w=" 700px"
          mx="auto"
          border="1px"
          borderColor="gray.400"
          borderRadius="30px"
          py="3"
          px="10"
        >
          <Flex direction="column" alignItems="center">
            <Text fontWeight="300" color="gray.500" fontSize="20px">
              Search
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch color="gray.300" />}
              />
              <Input
                border="1px"
                borderColor="gray.400"
                borderRadius="30px"
                type="text"
                placeholder="Search Users"
                onChange={(e) => setQuery(e.target.value)}
              />
            </InputGroup>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default UserSearch;
