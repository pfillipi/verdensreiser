import { Grid, GridItem } from "@chakra-ui/react";
import Characteristic from "./Characteristic";

export default function Characteristics() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Characteristic icon="cocktail" text="natteliv" />
      </GridItem>
      <GridItem>
        <Characteristic icon="surf" text="strand" />
      </GridItem>
      <GridItem>
        <Characteristic icon="building" text="moderne" />
      </GridItem>
      <GridItem>
        <Characteristic icon="museum" text="klassisk" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Characteristic icon="earth" text="og mer…" />
      </GridItem>
    </Grid>
  );
}
