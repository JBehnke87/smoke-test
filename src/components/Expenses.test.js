import React from 'react'
import ReactDOM from 'react-dom'
import Expenses from './Expenses'

describe('Expenses-Test', () => {
    it('if input is not empty', () => {

        const expenses = [
            { date: '2017-04-05', amount: 0 },
            { date: '2017-04-05', amount: 4 },
        ]

        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={expenses} />, div)
    })

    it('if input is empty', () => {

        const expenses = []

        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={expenses} />, div)
    })
})