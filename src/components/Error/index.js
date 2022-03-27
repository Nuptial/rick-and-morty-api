import { Grid, Typography } from "@mui/material";
import CenterGrid from "../CenterGrid";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <CenterGrid>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <Grid item xs={3}>
        <Typography>Error...</Typography>
      </Grid>
    </CenterGrid>
  );
};

export default Error;
