import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "../../App";

let wrapper;

beforeAll(() => {
  const store = {
    subscribe: jest.fn(),
    getState: jest.fn(),
    dispatch: jest.fn()
  };

  wrapper = shallow(<App store={store} />);
});

it("Contains Provider", () => {
  expect(wrapper.find(Provider)).toBeDefined();
});

it("Contains router ", () => {
  expect(wrapper.find(Router)).toBeDefined();
});

it("Contains Routes", () => {
  expect(wrapper.find(Route)).toBeDefined();
});

it("Contains correct props", () => {
  expect(wrapper.props().children).toBeDefined();
  expect(wrapper.props().store).toBeDefined();
  expect(wrapper.props().store.subscribe).toBeDefined();
  expect(wrapper.props().store.getState).toBeDefined();
  expect(wrapper.props().store.dispatch).toBeDefined();

  expect(wrapper.props().children).toBeInstanceOf(Object);
  expect(wrapper.props().store).toBeInstanceOf(Object);
});
