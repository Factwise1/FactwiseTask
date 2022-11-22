import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { GiCancel } from "react-icons/gi";

const DeleteBox = () => {
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
          {/* // section 1 */}
          <Flex direction="column">
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              my="3"
            >
              <Text>Are you sure you want to delete ?</Text>
              <GiCancel color="red" size={25} />
            </Flex>
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              my="3"
            >
              <Button
                backgroundColor="gray.400"
                color="white"
                mr="3"
                _hover={{ color: "black" }}
              >
                Cancel
              </Button>
              <Button
                backgroundColor="red"
                color="white"
                _hover={{ color: "black" }}
              >
                Delete
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default DeleteBox;
