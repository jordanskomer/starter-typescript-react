import React from "react";
import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import App from "./App";

it("should render [react-jsx]", () => {
  expect(render(<App />).container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"App\\"><header class=\\"App-header\\"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a class=\\"App-link\\" href=\\"https://reactjs.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Learn React</a></header></div>"`
  );
});
