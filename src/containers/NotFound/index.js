import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CenterGrid from "../../components/CenterGrid";

const NotFound = () => {
  return (
    <CenterGrid>
      <Typography variant="h2" color="primary">
        404 Not Found
      </Typography>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </CenterGrid>
  );
};

export default NotFound;
