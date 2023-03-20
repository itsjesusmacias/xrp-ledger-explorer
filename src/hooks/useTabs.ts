import { useContext } from "react";

// context
import { TabsContext } from "../context/Tabs";

// types
interface Tabs {
  tabIndex: number;
  handleSelectTab: (tabIndex: number) => () => void;
}

const useTabs = () => {
  const tabs = useContext(TabsContext) as Tabs;

  if (tabs === undefined)
    throw new Error("tabs must be used within Tabs context");

  return tabs;
};

export { useTabs };
