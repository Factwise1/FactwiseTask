import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";
import {
  AiOutlineMinusCircle,
  AiOutlineDelete,
  AiOutlineEdit
} from "react-icons/ai";

const UserOpen = () => {
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
              <Heading
                as="h3"
                color="gray.700"
                fontWeight="400"
                fontStyle="italic"
                pl="5"
              >
                Aidan
              </Heading>
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
              <Heading
                as="h6"
                fontWeight="300"
                color="gray.500"
                fontSize="20px"
              >
                Age
              </Heading>
              <Text fontSize="25px">19 Years</Text>
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
              <Text fontSize="25px">Male</Text>
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
              <Text fontSize="25px">India</Text>
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
              <Text fontSize="15px">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
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
              <AiOutlineDelete size={25} color="red" />
            </Text>

            <Text>
              <AiOutlineEdit size={25} color="blue" />
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default UserOpen;
