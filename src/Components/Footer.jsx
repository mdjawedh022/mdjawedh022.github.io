import { Box, useColorModeValue,Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        color={"white"}
        bg={useColorModeValue("gray.800", "blue.800")}
        mt={"10px"}
      >
        <br />
        <Text
          fontSize={{ base: ".8rem", md: "1rem", lg: "1.1rem" }}
          color={"white"}
          p={"30px auto"}
        >
          Designed and build by Md Jawed Hussain, 2023 All rights reserved.
        </Text>

        <Box
          w={{ lg: "20%", base: "64%", md: "40%" }}
          m="auto"
          textAlign={"center"}
          pl={{ base: "5px", md: "40px" }}
        >
          <Text
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            id="contact-email"
            fontSize={{ base: ".8rem", md: "1rem", lg: "1.1rem" }}
            label="jawedhilmand022@gmail.com"
          >
            <MdEmail />: jawedhilmand022@gmail.com
          </Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            id="contact-phone"
            label="8271766683"
            fontSize={{ base: ".8rem", md: "1rem", lg: "1.1rem" }}
          >
            <MdPhone />: +91 8271766683
          </Text>
        </Box>

        <br />
      </Box>
    </>
  );
}

export default Footer
