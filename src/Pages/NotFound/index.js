import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h2" color="primary">
        404 Not Found
      </Typography>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Grid>
  );
};

export default NotFound;
