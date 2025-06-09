import { Text, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  // this variable to check if the error is a route error
  // if not, mean the error is a server error and thrown
  const error = useRouteError();

  return (
    <>
      <Heading>Error happen</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </Text>
    </>
  );
}

export default ErrorPage;
