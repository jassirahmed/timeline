import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { JsonData } from "../services/types";
import ky from "ky";
import { Box, Flex, Button } from "@chakra-ui/react";

export default function Home() {
  const [data, setData] = useState<JsonData>();
  const [height, setHeight] = useState("100px");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await ky.get("/api/timeLineData").json<JsonData>();
    setData(response);
  };
  return (
    <Box w="100%" h="100%">
      {data?.data.map((jsonData, i) => (
        <Box
          w="full"
          h="250px"
          borderRadius="8px"
          pos="relative"
          px={{ base: "10px", md: "30px" }}
          key={jsonData.id}
          className="timeLineChart"
        >
          <Box
            w="10px"
            h="100%"
            bgColor="gray.200"
            borderColor="gray.500"
            pos="absolute"
            left="50%"
            transform="translate(-50%)"
            pt="30px"
            display={"flex"}
            alignItems="start"
            justifyContent="center"
            className="yearLoop"
            borderRight="1px solid"
            borderLeft="1px solid"
          >
            <Box
              p="5px 30px"
              bgColor="orange.500"
              display={jsonData.thisYearTripCount > 1 ? "none" : "block"}
            >
              {jsonData.year}
            </Box>
          </Box>
          <Box
            pos="absolute"
            w="40%"
            top={{ base: "105px", md: "100px" }}
            right={
              jsonData.thisYearTripCount > 1
                ? { base: "20px", md: "50px" }
                : "unset"
            }
            left={
              jsonData.thisYearTripCount > 1
                ? "unset"
                : { base: "20px", md: "50px" }
            }
          >
            <Box
              w="100%"
              border="1px solid"
              borderColor="gray.300"
              p={{ base: "10px", md: "20px" }}
              borderRadius="4px"
              pos="relative"
              _after={{
                content: `''`,
                position: "absolute",
                width: "20px",
                height: "20px",
                right: "-10px",
                top: "35%",
                border: "1px solid #CBD5E0",
                transform: "rotate(45deg)",
                bgColor: "#FFFFFF",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                display: jsonData.thisYearTripCount > 1 ? "none" : "block",
              }}
              _before={{
                content: `''`,
                position: "absolute",
                width: "20px",
                height: "20px",
                left: "-10px",
                top: "35%",
                border: "1px solid #CBD5E0",
                transform: "rotate(45deg)",
                bgColor: "#FFFFFF",
                borderRightColor: "transparent",
                borderTopColor: "transparent",
                display: jsonData.thisYearTripCount > 1 ? "block" : "none",
              }}
            >
              <Flex alignItems="baseline" justifyContent="space-between">
                <Box
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight="bold"
                  color="black"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  overflow="hidden"
                >
                  {jsonData.place}
                </Box>
                <Button
                  bgColor="transparent"
                  h="auto"
                  minW="auto"
                  p="0px"
                  fontWeight="500"
                  _hover={{}}
                  _focusVisible={{}}
                  _active={{}}
                >
                  {">"}
                </Button>
              </Flex>
              <Box fontSize={{ base: "xs", md: "sm" }} pt="10px">
                {jsonData.month} {jsonData.date}, {jsonData.year}
              </Box>
            </Box>
          </Box>
          <Flex
            alignItems="center"
            pos="absolute"
            left={
              jsonData.thisYearTripCount > 1
                ? "unset"
                : { base: "48%", sm: "48.65%", lg: "49.25%" }
            }
            right={
              jsonData.thisYearTripCount > 1
                ? { base: "48%", sm: "48.65%", lg: "49.25%" }
                : "unset"
            }
            top="130px"
          >
            <Box
              mr="15px"
              display={jsonData.thisYearTripCount > 1 ? "block" : "none"}
            >
              {jsonData.month} {jsonData.date}, {jsonData.year}
            </Box>
            <Box
              w="20px"
              h="20px"
              borderRadius="50%"
              bgColor="orange.500"
            ></Box>
            <Box
              ml="15px"
              display={jsonData.thisYearTripCount > 1 ? "none" : "block"}
            >
              May 15, 2015
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
