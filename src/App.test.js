import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders render App", () => {
  render(<App />);
  const elm = screen.getByText(/Todo App/i);
  expect(elm).toBeInTheDocument();
});
