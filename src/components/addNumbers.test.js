import React from 'react'
import { mount } from 'enzyme'
import { AddNumbers, AddNumber } from './AddNumbers'
import ReactDOM from 'react-dom'

test('AddNumbers', () => {

    const wrapper = mount(<AddNumbers />)
    wrapper.find('button').simulate("click");
    expect(wrapper.find("Number").length).toEqual(1);
    
    wrapper.find('button').simulate("click");
    expect(wrapper.find("Number").length).toEqual(2);

})