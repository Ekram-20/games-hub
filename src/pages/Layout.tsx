import Nav from "@/components/Nav";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

/*
 * Layout component

 * This component is used to wrap the entire application and provide a consistent nav bar.
**/
function Layout() {
  return (
    <>
      <Nav />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
