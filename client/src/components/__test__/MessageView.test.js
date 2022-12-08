import { fireEvent, render } from '@testing-library/react'
import MessageView from '../../view/messageView/MessageView'

let getByTestId

beforeEach(() => {
    const component = render(<MessageView/>)
    getByTestId = component.getByTestId
})

test('Check text in h2', () => {
    expect(getByTestId('messageText').textContent).toBe('Lämna en smurfs')
})

test('Check text in button', () => {
    expect(getByTestId('buttonText').textContent).toBe('Skicka')
})

test('Check text in label', () => {
    expect(getByTestId('labelText').textContent).toBe('AUTOGET')
})

test('Change message in textarea', () => {
    const inputElement = getByTestId('textArea')
    fireEvent.change(inputElement, {
        target: {
            value: ''
        }
    })
    expect(inputElement.placeholder).toBe('Skriv ett meddelande..')
})