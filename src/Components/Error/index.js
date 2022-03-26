import {
    Grid,
    Typography
  } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <Grid item xs={3}>
        <Typography>Error...</Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
