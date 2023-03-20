import { screen, within } from "@testing-library/react";

// private
const getDom = ($container?: HTMLElement) =>
  $container ? within($container) : screen;

// publics

export const getTransactions = () =>
  screen.getAllByRole("listitem", { name: "" });

export const checkThatFieldIsVisible = async (
  text: string,
  $container?: HTMLElement
) => {
  const $dom = getDom($container);

  const $field = await $dom.findByText(text);
  expect($field).toBeVisible();

  return $field;
};
