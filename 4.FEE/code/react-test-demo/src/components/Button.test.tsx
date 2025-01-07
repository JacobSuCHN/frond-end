import React from "react";
import { describe, expect, it } from "@jest/globals";
import renderer from "react-test-renderer";
import { Button } from "./Button";

describe("button test", () => {
  it("should render", () => {
    const component = renderer.create(<Button>button</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
