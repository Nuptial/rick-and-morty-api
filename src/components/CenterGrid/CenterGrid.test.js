import renderer from 'react-test-renderer';

import CenterGrid from '../CenterGrid';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CenterGrid />).toJSON();
  expect(tree).toMatchSnapshot();
});