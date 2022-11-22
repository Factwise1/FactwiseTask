import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { detailUser, deleteUser } from "../actions/userActions";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  Flex,
  Heading,
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
  AiOutlineEdit
} from "react-icons/ai";

const UserScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [del, setDel] = useState();

  const [press, setPress] = useState(false);

  const userDetail = useSelector((state) => state.userDetail);
  const { loading, user, error } = userDetail;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete
  } = userDelete;

  useEffect(() => {
    dispatch(detailUser(id));
  }, [id, dispatch]);

  const showDetail = () => {
    setPress(true);
  };
  const hideDetail = () => {
    setPress(false);
  };

  const deleteHandler = () => {
    // setDeleteShow(!deleteShow);
    dispatch(deleteUser(id));
    navigate("/");
  };

  const calAge = (dob) => {
    var ag = Date.now() - new Date(dob).getTime();
    var ad = new Date(ag);
    return Math.abs(ad.getUTCFullYear() - 1970).toString();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={error}>{error}</Message>
      ) : (
        <Flex direction="column" justifyContent="center" mx="auto">
          {!press && (
            <Box
              w=" 700px"
              mx="auto"
              border="1px"
              borderColor="gray.400"
              borderRadius="30px"
              py="3"
              px="10"
            >
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex direction="row" alignItems="center">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    border="1px"
                    borderColor="gray.600"
                    src={user.picture}
                    alt={user.first}
                  />
                  <Heading
                    as="h3"
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    pl="5"
                  >
                    {user.first + " " + user.last}
                  </Heading>
                </Flex>

                <AiOutlinePlusCircle
                  onClick={showDetail}
                  size={25}
                  color="green"
                />
              </Flex>
            </Box>
          )}

          {press && (
            <Box
              w=" 700px"
              mx="auto"
              border="1px"
              borderColor="gray.400"
              borderRadius="30px"
              py="3"
              px="10"
            >
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                my="6"
              >
                <Flex direction="row" alignItems="center">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    border="1px"
                    borderColor="gray.600"
                    src={user.picture}
                    alt={user.first}
                  />
                  <Heading
                    as="h3"
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    pl="5"
                  >
                    {user.first + " " + user.last}
                  </Heading>
                </Flex>

                <AiOutlineMinusCircle
                  onClick={hideDetail}
                  size={25}
                  color="red"
                />
              </Flex>
              {/* //section 2 */}
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex direction="column" my="2">
                  <Heading
                    as="h6"
                    fontWeight="300"
                    color="gray.500"
                    fontSize="20px"
                  >
                    Age
                  </Heading>
                  <Text fontSize="25px">{calAge(user.dob)}</Text>
                </Flex>
                <Flex direction="column" my="2">
                  <Heading
                    as="h6"
                    fontWeight="300"
                    color="gray.500"
                    fontSize="20px"
                  >
                    Gender
                  </Heading>
                  <Text fontSize="25px">
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </Text>
                </Flex>
                <Flex direction="column" my="2">
                  <Heading
                    as="h6"
                    fontWeight="300"
                    color="gray.500"
                    fontSize="20px"
                  >
                    Country
                  </Heading>
                  <Text fontSize="25px">{user.country}</Text>
                </Flex>
              </Flex>
              {/* // section 3 */}
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex direction="column" my="2">
                  <Heading
                    as="h6"
                    fontWeight="300"
                    color="gray.500"
                    fontSize="20px"
                  >
                    Description
                  </Heading>
                  <Text fontSize="15px">{user.description}</Text>
                </Flex>
              </Flex>

              {/* //section 4 */}

              <Flex
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                my="2"
              >
                <Text pr="3" onClick={onOpen}>
                  <AiOutlineDelete size={25} color="red" />
                </Text>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader color="red">Delete</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Are you sure you want to delete ?</ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button
                        variant="ghost"
                        background="red"
                        onClick={deleteHandler}
                      >
                        Delete
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Text>
                  <Link to={`/${user._id}/edit`}>
                    <AiOutlineEdit size={25} color="blue" />
                  </Link>
                </Text>
              </Flex>
            </Box>
          )}
          <Button mt="40px" w="120px" h="40px" mx="auto">
            <Link to="/">Back Home</Link>
          </Button>
        </Flex>
      )}
    </>
  );
};
export default UserScreen;
