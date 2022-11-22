import {
  Flex,
  Box,
  Image,
  Text,
  Input,
  FormControl,
  FormLabel,
  Select,
  Textarea
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, detailUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import Loader from "../components/Loader";
import Message from "../components/Message";

const UserEditScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: userId } = useParams();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  const userDetail = useSelector((state) => state.userDetail);
  const { loading, user, error } = userDetail;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate
  } = userUpdate;

  useEffect(() => {
    if (!user.first || user._id !== userId) {
      dispatch(detailUser(userId));
    } else {
      setFirst(user.first);
      setLast(user.last);
      setDob(user.dob);
      setGender(user.gender);
      setCountry(user.country);
      setDescription(user.description);
    }
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate(`/${user._id}`);
    }
  }, [dispatch, navigate, userId, user, successUpdate]);

  const getDate = (dob) => {
    dob = dob.split("T")[0];
    // console.log(dob);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: userId,
        first,
        last,
        dob,
        gender,
        country,
        description
      })
    );
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    dispatch({ type: USER_UPDATE_RESET });
    navigate(`/${user._id}`);
  };

  return (
    <>
      <Flex direction="column" justifyContent="center" mx="auto" mt="80px">
        <Box
          w=" 700px"
          mx="auto"
          border="1px"
          borderColor="gray.400"
          borderRadius="30px"
          py="3"
          px="10"
        >
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message type="error">{errorUpdate}</Message>}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message type="error">{error}</Message>
          ) : (
            <form onSubmit={submitHandler}>
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
                  <FormControl pl="5">
                    <Input
                      color="gray.700"
                      fontWeight="400"
                      fontStyle="italic"
                      border="1px"
                      borderColor="gray.600"
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                    />
                  </FormControl>
                  <FormControl pl="5">
                    <Input
                      color="gray.700"
                      fontWeight="400"
                      fontStyle="italic"
                      border="1px"
                      borderColor="gray.600"
                      value={last}
                      onChange={(e) => setLast(e.target.value)}
                    />
                  </FormControl>
                </Flex>
              </Flex>
              {/* //section 2 */}
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex direction="column" my="2">
                  <FormControl>
                    <FormLabel
                      fontWeight="300"
                      color="gray.500"
                      fontSize="20px"
                    >
                      D-O-B
                    </FormLabel>
                    <Input
                      color="gray.700"
                      fontWeight="400"
                      fontStyle="italic"
                      border="1px"
                      borderColor="gray.600"
                      w="150px"
                      placeholder="YYYY-MM-DD"
                      value={getDate(dob)}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <Flex direction="column" my="2">
                  <FormControl>
                    <FormLabel
                      fontWeight="300"
                      color="gray.500"
                      fontSize="20px"
                    >
                      Gender
                    </FormLabel>
                    <Select
                      color="gray.700"
                      fontWeight="400"
                      fontStyle="italic"
                      border="1px"
                      borderColor="gray.600"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                      <option value="Rather not to say">
                        Rather not to say
                      </option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                </Flex>
                <Flex direction="column" my="2">
                  <FormControl>
                    <FormLabel
                      fontWeight="300"
                      color="gray.500"
                      fontSize="20px"
                    >
                      Country
                    </FormLabel>
                    <Input
                      color="gray.700"
                      fontWeight="400"
                      fontStyle="italic"
                      border="1px"
                      borderColor="gray.600"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                </Flex>
              </Flex>
              {/* // section 3 */}
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex direction="column" my="2">
                  <FormControl>
                    <FormLabel
                      fontWeight="300"
                      color="gray.500"
                      fontSize="20px"
                    >
                      Description
                    </FormLabel>
                    <Textarea
                      color="gray.700"
                      fontWeight="400"
                      fontStyle="italic"
                      border="1px"
                      borderColor="gray.600"
                      minW="618px"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Textarea>
                  </FormControl>
                </Flex>
              </Flex>

              {/* //section 4 */}

              <Flex
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                my="2"
              >
                <Text pr="3" onClick={cancelHandler}>
                  <GiCancel color="red" size={22} />
                </Text>

                <Text onClick={submitHandler}>
                  <AiOutlineCheckCircle size={25} color="green" />
                </Text>
              </Flex>
            </form>
          )}
        </Box>
      </Flex>
    </>
  );
};
export default UserEditScreen;
