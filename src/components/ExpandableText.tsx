import React from "react";
import { Button, Text } from "@chakra-ui/react";

function ExpandableText({ children }: { children: string }) {
  const [expanded, setExpanded] = React.useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        marginLeft={2}
        onClick={() => setExpanded(!expanded)}
        size={"xs"}
        color={"purple"}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
