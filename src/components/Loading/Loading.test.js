import renderer from 'react-test-renderer';

import Loading from '../Loading';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});