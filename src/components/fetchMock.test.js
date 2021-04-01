import fetchMock from 'fetch-mock'
import ReactDOM from 'react-dom'

describe('Fetch-Mock-Test', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('renders without error', async () => {
    fetchMock.get('https://myURL', [
      {
        id: 1,
        some: "thing",
      },
    ])

    const div = document.createElement('div')

    const response = await fetch('https://myURL');
    const json = await response.json();
    console.log(json)

    ReactDOM.render( json.map((el, i) => (<div key={i}>Id: {el.id}, Content: {el.some}</div>)) , div)
  })
})