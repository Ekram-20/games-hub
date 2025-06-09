import Nav from "@/components/Nav";
import { Text, Heading, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  // this variable to check if the error is a route error
  // if not, mean the error is a server error and thrown
  const error = useRouteError();

  return (
    <>
      <Nav />
      <Box
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Heading>Error happen</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
