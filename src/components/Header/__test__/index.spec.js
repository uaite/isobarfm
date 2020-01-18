import React from 'react';
import { shallow } from 'enzyme';
import Header from '../';

describe('Header', () => {
  it('should render header', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });

  it('should render header with routes', () => {
    const props = {
      routes: [
        { to: 'route1', displayName: 'route1' },
        { to: 'route2', displayName: 'route2' },
        { to: 'route3', displayName: 'route3' },
        { to: 'route4', displayName: 'route4' },
      ],
    };
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });
});
