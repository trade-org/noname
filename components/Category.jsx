import {
  Box,
  Center,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

const Category = () => {
  return (
    <>
      <Center>Category</Center>
      <Box mt={"50px"} px={"100px"}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>All Category</Tab>
            <Tab>Accessories</Tab>
            <Tab>Fashion</Tab>
            <Tab>Cars</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Category;
