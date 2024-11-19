'use client';
import { Flex, Text } from "@chakra-ui/react";

const footer = () => {
  return (
    <Flex
        justifyContent="center"
        alignItems="center"
        p="2rem"
    >
        <Text>All right reserved &copy; Antek Mnm {new Date().getFullYear()}</Text>
    </Flex>
  )
}

export default footer