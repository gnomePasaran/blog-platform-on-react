import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import Like from 'components/views/elements/Like';
import Link from 'components/elements/Link';

import Item from '../BlogItem';

describe('Item', () => {
  it('renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item />, div);
  });

  describe('render', () => {
    const itemProps = {
      text: 'Hello, World!',
      id: 5,
      img: {
        alt: 'Hello, World!',
        src: '/images/World.jpg'
      },
      meta: { count: 0 }
    };

    it('should render the title', () => {
      const item = mount(<Item blog={itemProps} />);
      const header = <Link to="/post/5">Hello, World!</Link>;

      expect(item.contains(header)).toEqual(true);
    });


    it('should render usual item', () => {
      const item = shallow(<Item blog={itemProps} />);

      expect(item).toMatchSnapshot();
    });
  });
});
