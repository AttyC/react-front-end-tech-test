/* global it, expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import Basket from '../src/components/Basket';
import Item from '../src/components/Item';

it('Basket renders without crashing', () => {
  const component = shallow(<Basket />);
  expect(component.exists()).toEqual(true);
});

it('renders the clear item link', () => {
  const wrapper = shallow(<Item />);
  expect(wrapper.find('.itemClear').text()).toEqual('x');
});

it('first item in list has expected name', () => {
  const wrapper = shallow(<Item name='Mountain Dew' quantity='1' />);
  expect(wrapper.find('.name').text()).toContain('Mountain Dew');
});
