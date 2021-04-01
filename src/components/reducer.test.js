import reducer from './reducer'

import deepFreeze from 'deep-freeze'

describe('reducerTest', () => {
    const FAKE_TYPE = 'FAKE_TYPE'
    it('should handle FAKE_TYPE', () => {
        const currentState = {things : [{name: 'acme'}]}
        deepFreeze (currentState)

        expect (
            reducer( currentState,{
                type: FAKE_TYPE,
                thing: {name: 'widget'},
            })
        ).toEqual({
            things: [
                {name: 'acme'},
                {name: 'widget'},
              ]
        })
    })
})