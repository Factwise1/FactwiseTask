import UserClosed from "../components/UserClosed";
// import UserSearch from "../components/UserSearch";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { AiOutlineSearch } from "react-icons/ai";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const search_parameters = Object.keys(Object.assign({}, ...users));

  function search(users) {
    return users.filter((item) =>
      search_parameters.some((parameter) =>
        item[parameter].toString().toLowerCase().includes(query)
      )
    );
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <>
          <Flex
            direction="column"
            justifyContent="center"
            mx="auto"
            mt="80px"
            my="40px"
          >
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
                    type="search"
                    name="search-form"
                    placeholder="Search Users"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
              </Flex>
            </Box>
          </Flex>

          <Flex direction="column">
            {search(users).map((user) => (
              <Link to={`/${user._id}`} key={user._id}>
                <UserClosed user={user} />
              </Link>
            ))}
          </Flex>
        </>
      )}
    </>
  );
};
export default HomeScreen;
