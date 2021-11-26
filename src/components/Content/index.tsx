import { Grid } from "@chakra-ui/react";

export default function Content() {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr", "1.2fr 1fr"]}
      gatp={[5, 10, 16, 20]}
    ></Grid>
  );
}
