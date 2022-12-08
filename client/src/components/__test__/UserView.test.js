import { fireEvent, render } from '@testing-library/react'
import UserView from '../../view/UserView'

let getByTestId

beforeEach(() => {
    const component = render(<UserView/>)
    getByTestId = component.getByTestId
})

test('Change FirstName in input', () => {
    const input = getByTestId('inputFullName')
    fireEvent.change(input, {
        target: {
            value: 'FirstName'
        }
    })
    expect(input.placeholder).toBe('FirstName')
})

test('Change Lastname in input', () => {
    const input = getByTestId('inputLastName')
    fireEvent.change(input, {
        target: {
            value: 'LastName'
        }
    })
    expect(input.placeholder).toBe('LastName')
})

test('Change email in input', () => {
    const input = getByTestId('inputEmail')
    fireEvent.change(input, {
        target: {
            value: 'E-mail'
        }
    })
    expect(input.placeholder).toBe('E-mail')
})

test('Change work in input', () => {
    const input = getByTestId('inputWork')
    fireEvent.change(input, {
        target: {
            value: 'Work'
        }
    })
    expect(input.placeholder).toBe('Work')
})

test('Change password in input', () => {
    const input = getByTestId('inputPassword')
    fireEvent.change(input, {
        target: {
            value: 'password'
        }
    })
    expect(input.placeholder).toBe('password')
})