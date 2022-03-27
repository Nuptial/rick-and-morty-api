import renderer from 'react-test-renderer';

import CharacterDetail from '../CharacterDetail';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CharacterDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a single item', () => {
    const character = {
        "__typename": "Character",
        "id": "18",
        "name": "Antenna Morty",
        "status": "Alive",
        "species": "Human",
        "type": "Human with antennae",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        "created": "2017-11-04T22:25:29.008Z",
        "origin": {
            "__typename": "Location",
            "id": null,
            "name": "unknown"
        },
        "location": {
            "__typename": "Location",
            "id": "3",
            "name": "Citadel of Ricks"
        },
        "episode": [
            {
                "__typename": "Episode",
                "id": "10",
                "name": "Close Rick-counters of the Rick Kind"
            },
            {
                "__typename": "Episode",
                "id": "28",
                "name": "The Ricklantis Mixup"
            }
        ]
    }
    const tree = renderer.create(<CharacterDetail character={character} />).toJSON();
    expect(tree).toMatchSnapshot();
});
  
 