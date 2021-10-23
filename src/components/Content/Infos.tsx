import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        directio="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]}>femte</Heading>
        <Text>land</Text>
      </Flex>
    </Flex>
  );
}
