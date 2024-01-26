/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { fireEvent, render, screen } from '@testing-library/react'
import { GifSearcher } from '../../components/GifSearcher'
import { userEvent } from '@testing-library/user-event'

describe('Test GifSercher', () => {
  const onSearch = jest.fn()

  beforeEach(() => {
    render(<GifSearcher onSearch={onSearch} />)
  })

  test('should render correctly', () => {
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should change the value of the input', async () => {
    const newInputTextValue = 'Hello World'

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(inputElement, newInputTextValue)

    expect(inputElement.value).toBe(newInputTextValue)
  })

  test('should not submit the form if the input is empty', () => {
    const formElement = screen.getByRole('form') as HTMLFormElement
    // await userEvent.keyboard('{enter}')
    fireEvent.submit(formElement)

    expect(onSearch).not.toHaveBeenCalled()
  })

  test('should submit the form if the input is filled', async () => {
    const newInputTextValue = 'Hello World'

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(inputElement, newInputTextValue)

    await userEvent.keyboard('{enter}')

    expect(onSearch).toHaveBeenCalledTimes(1)
    expect(onSearch).toHaveBeenCalledWith(newInputTextValue)
    expect(inputElement.value).toBe('')
  })
})
