import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Characteristics from "../components/Characteristics";
import Header from "../components/Header";
import Separator from "../components/Separator/Separator";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Characteristics />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Her gå vi?
        <br />
        Så velg ditt kontinent.
      </Heading>
    </Flex>
  );
}
