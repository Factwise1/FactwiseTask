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
import {
  AiOutlineMinusCircle,
  AiOutlineCheckCircle,
  AiFillCheckCircle
} from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

const UserEdit = () => {
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
          <form>
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
                  src="https://randomuser.me/api/portraits/med/men/93.jpg"
                  alt="Dan Abramov"
                />
                <FormControl pl="5">
                  <Input
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    border="1px"
                    borderColor="gray.600"
                  />
                </FormControl>
              </Flex>

              <AiOutlineMinusCircle size={25} color="red" />
            </Flex>
            {/* //section 2 */}
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex direction="column" my="2">
                <FormControl>
                  <FormLabel fontWeight="300" color="gray.500" fontSize="20px">
                    Age
                  </FormLabel>
                  <Input
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    border="1px"
                    borderColor="gray.600"
                    w="60px"
                  />
                </FormControl>
              </Flex>
              <Flex direction="column" my="2">
                <FormControl>
                  <FormLabel fontWeight="300" color="gray.500" fontSize="20px">
                    Gender
                  </FormLabel>
                  <Select
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    border="1px"
                    borderColor="gray.600"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Rather not to say">Rather not to say</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </Flex>
              <Flex direction="column" my="2">
                <FormControl>
                  <FormLabel fontWeight="300" color="gray.500" fontSize="20px">
                    Country
                  </FormLabel>
                  <Input
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    border="1px"
                    borderColor="gray.600"
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
                  <FormLabel fontWeight="300" color="gray.500" fontSize="20px">
                    Description
                  </FormLabel>
                  <Textarea
                    color="gray.700"
                    fontWeight="400"
                    fontStyle="italic"
                    border="1px"
                    borderColor="gray.600"
                    minW="618px"
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
              <Text pr="3">
                <GiCancel color="red" size={22} />
              </Text>

              <Text>
                <AiFillCheckCircle size={25} color="green" />
              </Text>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default UserEdit;
