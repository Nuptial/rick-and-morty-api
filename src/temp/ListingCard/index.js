import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ character }) => {
  const navigate = useNavigate();

  if(!character) {
    return false;
  }

  const routeChange = () => {
    let path = `/character/${character.id}`;
    navigate(path);
  };

  return (
    <Grid item xs={2} sm={4} md={2} key={character.id}>
      <Card style={{ cursor: "pointer", boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }} onClick={routeChange}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={character.image}
            alt={character.name}
          ></CardMedia>
          <CardContent>
            <Typography align="center" className="character-name">
              {character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ListingCard;
