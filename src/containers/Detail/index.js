import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CharacterDetail from "../../components/CharacterDetail";
import { GET_CHARACTER } from "../../api/query/RickAndMorty";
import CenterGrid from "../../components/CenterGrid";

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER(id));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { character } = data;

  return (
    <CenterGrid>
      <Link to="/" className="link">
        <ArrowBackIcon />
        Back to Home
      </Link>
      <Box mb={5}></Box>
      <CharacterDetail character={character}></CharacterDetail>
    </CenterGrid>
  );
};

export default Detail;
