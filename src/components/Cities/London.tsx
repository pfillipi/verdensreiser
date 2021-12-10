import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function London() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/london.jpg" h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            London
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            Storbritannia
          </Text>
        </Flex>
        <Image
          src="/united-kingdom.png"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
