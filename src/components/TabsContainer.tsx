import { useTabs } from "../hooks/";
import { Children } from "react";

// types
interface Props {
  children: React.ReactNode;
}

const TabsContainer = ({ children }: Props) => {
  const { tabIndex } = useTabs();
  return Children.toArray(children)[tabIndex];
};

export { TabsContainer };
