import { Children } from "react";

// hooks
import { useTabs } from "../hooks/";

// components
import { Link, HStack } from "@chakra-ui/react";

// types
interface Props {
  children: React.ReactNode;
}

const TabsLink = ({ children }: Props) => {
  const { tabIndex, handleSelectTab } = useTabs();

  const getColorTabByState = (index: number) =>
    tabIndex === index ? "blue.500" : "";

  return (
    <HStack spacing="24px" paddingY="4">
      {Children.map(children, (child, index) => (
        <Link
          color={getColorTabByState(index)}
          onClick={handleSelectTab(index)}
        >
          {child}
        </Link>
      ))}
    </HStack>
  );
};

export { TabsLink };
