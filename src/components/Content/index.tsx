import { Grid, Text } from "@chakra-ui/react";
import Infos from "./Infos";

export default function Content() {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr", "1.2fr 1fr"]}
      gatp={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        Etter konvensjon er Europa et av de seks kontinentene i verden. Europa
        omfatter den vestlige halvøya Eurasia og er generelt atskilt fra Asia i
        øst av vannskillet til Uralfjellene, Uralfjellene, Det Kaspiske hav,
        Kaukasus og det sørøstlige Svartehavet.
      </Text>
      <Infos />
    </Grid>
  );
}
