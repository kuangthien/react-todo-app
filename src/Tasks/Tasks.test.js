import { render, waitFor, fireEvent } from '@testing-library/react'

import App from './../App'

// I setup unitest in a quick way,
// but basically the concept is no different: avoid props/state mock, avoid shallow, avoid deeply isolate

const renderWithContext = (ui, { providerProps, ...renderOptions }) => {
  return render(ui, renderOptions)
}

test('Render list of tasks', async () => {
  const renderRs = renderWithContext(<App />, { providerProps: {} })

  await waitFor(() => {
    const elms = renderRs.getByText('qui est esse')
    expect(elms).toBeInTheDocument()
  })

  const tasks = renderRs.getAllByTestId('task', { exact: false })
  expect(tasks).toHaveLength(10)
})

test('Open modal when click Edit', async () => {
  const renderRs = renderWithContext(<App />, { providerProps: {} })

  await waitFor(() => {
    const elms = renderRs.getByText('qui est esse')
    expect(elms).toBeInTheDocument()
  })

  const elmEditButton = renderRs.getAllByText(/Edit/i)
  fireEvent.click(elmEditButton[0])

  expect(renderRs.getByText('Dialog box')).toBeInTheDocument()
})

test('Close modal when click Cancel', async () => {
  const renderRs = renderWithContext(<App />, { providerProps: {} })

  await waitFor(() => {
    const elms = renderRs.getByText('qui est esse')
    expect(elms).toBeInTheDocument()
  })

  const elmEditButton = renderRs.getAllByText(/Edit/i)
  fireEvent.click(elmEditButton[0])

  const elmCloseButtonInModal = renderRs.getAllByText(/Cancel/i)
  fireEvent.click(elmCloseButtonInModal[0])
  expect(renderRs.queryByText('Dialog box')).not.toBeInTheDocument()
})
