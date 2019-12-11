import React from "react";
import { shallow, mount } from "enzyme";
import Front from "./front";

// Render shallow and find element
test("Front component renders a header with a title", () => {
  const title = "Test Title";
  const wrapper = mount(<Front title={title} />);
  const header = wrapper.find("h1");
  expect(header.text()).toBe(title);
});

// Mount and find element in child component
test("Front component renders a button with default value of 0", () => {
  const wrapper = mount(<Front title="Whatever" />);
  const button = wrapper.find("button");
  expect(button.text()).toBe("0");
});
