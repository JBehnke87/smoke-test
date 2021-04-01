import React from 'react'
import { shallow } from 'enzyme'
import UserStory from './UserStory';

describe('UserStory', () => {

    it('clicks the finish button', () => {
        const funcc = jest.fn();
        const wrapper = shallow(<UserStory updateStatus={funcc} />)

        wrapper.find('[data-behavior="finish"]').simulate("click")

        console.log(funcc.mock.calls)

        expect(funcc.mock.calls).toEqual([["finished"]])
    })

    it('clicks the deliver button', () => {
        const funcc = jest.fn();
        const wrapper = shallow(<UserStory updateStatus={funcc} />)

        wrapper.find('[data-behavior="deliver"]').simulate("click")

        console.log(funcc.mock.calls)

        expect(funcc.mock.calls).toEqual([["delivered"]])
    })

})