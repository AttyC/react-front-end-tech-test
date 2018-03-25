/* global it, expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import Basket from '../src/components/Basket';

it('Basket renders without crashing', () => {
  const component = shallow(<Basket />);
  expect(component.exists()).toEqual(true);
});