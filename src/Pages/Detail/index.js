import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import {
  Grid,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CharacterDetail from "../../Components/CharacterDetail";

const Detail = () => {
  const { id } = useParams();

  const GET_CHARACTER = gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        type
        gender
        image
        created
        origin {
          id
          name
        }
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTER);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { character } = data;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Link to="/" className="link">
        <ArrowBackIcon />
        Back to Home
      </Link>
      <Box mb={5}></Box>
      <CharacterDetail character={character}></CharacterDetail>
    </Grid>
  );
};

export default Detail;
