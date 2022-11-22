import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const UserClosed = ({ user }) => {
  return (
    <>
      <Flex direction="column" justifyContent="center" mx="auto" mt="3">
        <Box
          w=" 700px"
          mx="auto"
          border="1px"
          borderColor="gray.400"
          borderRadius="30px"
          py="3"
          px="10"
        >
          {/* // section 1 */}
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
                // src="https://randomuser.me/api/portraits/med/men/93.jpg"
                // alt="Dan Abramov"
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
                {user.first}
              </Heading>
            </Flex>

            <AiOutlinePlusCircle size={25} color="green" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default UserClosed;
