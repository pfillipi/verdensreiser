import { Grid, Heading } from "@chakra-ui/react";
import London from "./London";
import Paris from "./Paris";
import Rome from "./Rome";
import Prague from "./Prague";
import Amsterdam from "./Amsterdam";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Byer +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <London />
        <Paris />
        <Rome />
        <Prague />
        <Amsterdam />
      </Grid>
    </>
  );
}
