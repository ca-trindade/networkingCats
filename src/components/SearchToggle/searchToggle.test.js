import { render, fireEvent } from "@testing-library/react";
import { SearchToggle } from "./index";

test("SearchToggle prints choose link", () => {
    render(<SearchToggle />);
    const logSpy = jest.spyOn(global.console, "log");
    
  fireEvent.click(SearchToggle())

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);

  logSpy.mockRestore();
});
