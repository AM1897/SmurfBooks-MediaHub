import { render } from '@testing-library/react'
import Header from '../header/Header'

let getByTestId

beforeEach(() => {
    const component = render(<Header/>)
    getByTestId = component.getByTestId
})

test('Testing text in h1', () => {
    expect(getByTestId('texth1').textContent).toBe('SmurfBooks')
})