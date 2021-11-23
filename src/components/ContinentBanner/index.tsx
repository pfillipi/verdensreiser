import { Flex } from "@chakra-ui/react";

export default function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(/bannereu.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
    ></Flex>
  );
}
