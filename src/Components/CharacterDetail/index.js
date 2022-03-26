import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import "./style.css";

const CharacterDetail = ({ character }) => {
  if(!character) {
    return false;
  }
  
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt={character.name}
      ></CardMedia>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Name:</strong> {character.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Gender:</strong> {character.gender}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Location:</strong> {character.location.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Origin:</strong> {character.origin.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Species:</strong> {character.species}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Status:</strong> {character.status}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <strong>Episodes:</strong>{" "}
          {character.episode
            .slice(-5)
            .map(function (elem) {
              return elem.name;
            })
            .join(",")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterDetail;
