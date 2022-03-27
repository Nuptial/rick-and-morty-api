import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid, Box, Typography, Pagination, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ListingCard from "../../Components/ListingCard";
import "./style.css";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root.Mui-selected": {
      color: "#fff",
    },
  },
}));

const Listing = () => {
  const classes = useStyles();
  const [page, setPage] = useState(
    sessionStorage.getItem("activePage") ? Number(sessionStorage.getItem("activePage")) : 1
  );
  const GET_CHARACTERS = gql`
    query {
      characters(page: ${page}) {
        info {
          count
        }
        results {
          name
          image
          id
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderList = () => {
    return data.characters.results.map((character) => {
      return (
        <ListingCard character={character} key={character.id}></ListingCard>
      );
    });
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <Typography variant="h2" color="primary">
          List Of Rick and Morty Characters
        </Typography>
        <Box mt={4}></Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderList()}
        </Grid>
        <Box mt={4}></Box>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(data.characters.info.count / 20)}
              color="primary"
              onChange={(event, value) => {
                sessionStorage.setItem("activePage", value);
                setPage(value);
              }}
              page={page}
              classes={{ ul: classes.ul }}
            />
          </Stack>
        </Grid>
      </div>
    </>
  );
};

export default Listing;
