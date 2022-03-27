import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import Error from '../Error';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<BrowserRouter><Error /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});