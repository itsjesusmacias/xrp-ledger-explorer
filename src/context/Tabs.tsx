import { createContext, useState } from "react";

// types
interface Props {
  children: React.ReactNode;
}

// context
export const TabsContext = createContext({});

// provider

const Tabs = ({ children }: Props) => {
  const [tabIndex, selectTab] = useState(0);

  const handleSelectTab = (tabIndex: number) => () => {
    selectTab(tabIndex);
  };

  return (
    <TabsContext.Provider value={{ tabIndex, handleSelectTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export { Tabs };
