import React from "react";
import { Test } from "./Test";

export default {
  title: "Text",
  component: Test,
};

const Template = (args: any) => <Test {...args} />;

export const TestComponent = Template.bind({}) as any;
TestComponent.args = {};
