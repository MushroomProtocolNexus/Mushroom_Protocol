import React, { useState } from "react";
import { Flex, Image, Spacer, Center, Grid, GridItem, Box, Text, Button, Tag, TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack, } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa6";
import Natheralogo from "../../assets/Natheralogo.png"
import NatheraNFTBoceto from "../../assets/NatheraNFTBoceto.png"
import favicon from "../../assets/favicon.ico"



const NatheraItems = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Center>
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"120px 1fr 30px"}
      gridTemplateColumns={"450px 1fr"}
      h="530px"
      w="1024px"
      gap="0"
      color="#000"
      fontWeight="bold"
      marginRight="30px"
    >
      <GridItem
        
        pl="20"
        marginTop="15px"
        area="header"
        display="flex"
        alignItems="center"
      >
        <Flex>
        <Box
          bgImage={Natheralogo}
          bgSize="60px 60px"
          bgRepeat="no-repeat"
          w="60px"
          h="60px"
          marginTop="10px"
        />
        <Box
          ml="4"
          marginBottom="0"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontSize="30px" color="#FFFFFF">
            Warrior Cells
          </Text>
          <Tag
            variant="subtle"
            backgroundColor="#000000"
            color="#FFFFFF"
            borderColor="#1FAFC8"
            borderWidth="1px"
            fontSize="12px"
            mr="20"
          >
            Total Items: 1000
          </Tag>
        </Box>
        <Spacer />
        <HStack spacing={4}>
        {['lg'].map((size) => (
          <Tag
          size="lg" // Tamaño del tag (puedes ajustarlo según tus necesidades)
          variant="subtle"
          colorScheme="orange" // Cambia a naranja
          backgroundColor="#000000"
          color="#FFFFFF"
          borderColor="#FFFFFFF"
          textColor="#FFFFFF"
          borderWidth="1px"
          ml="530px"
          fontSize="16px"
          display="flex"
          alignItems="center" // Alinea el icono y el texto verticalmente
        >
          <FaClock color="#F47629" style={{ marginRight: '9px' }} /> {/* Cambia el color del icono a naranja */}
          <TagLabel>Coming Soon</TagLabel>
        </Tag>
          ))}
        </HStack>
        </Flex>
      </GridItem>
      <GridItem
      area="nav"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Image
          src={NatheraNFTBoceto}
          alt="Descripción de la imagen"
          objectFit="cover"
          width="300px" // Ajusta el ancho según tus necesidades
          height="400px" // Ajusta la altura según tus necesidades
        />
      </Box>
    </GridItem>
      <GridItem
       
        bg="#000000"
        area="main"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        border="1px"
        borderColor="#1FAFC8"
        mt="25px"
        borderRadius="10px"
        padding="30px"
      >
        <Box display="flex" alignItems="flex-start">
          <Box
            backgroundColor="#000000"
            color="#FFFFFF"
            fontSize="18px"
            display="flex"
            alignItems="center"
            p="8px"
            borderRadius="15px"
            border="1px"
            borderColor="#1FAFC8"
          >
            Price: 5
            <img
              src={favicon}
              alt="Icon"
              width="22"
              height="22"
              style={{ marginLeft: "5px" }}
            />
          </Box>
        </Box>
        <Box
          backgroundColor="#1E1E1E"
          height="30px"
          width="500px"
          borderRadius="5px"
          marginTop="30px"
          position="relative"
        >
          <Box
            backgroundColor="#1FAFC8"
            height="100%"
            width="1%" // Ajusta el ancho según el progreso real
            borderRadius="15px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text fontSize="18px" color="#FFFFFF" marginLeft="5px">
              0%
            </Text>
          </Box>
        </Box>
        <Text fontSize="16px" color="#737373" marginTop="10px">
          Minted: 0 / 600
        </Text>
        <Box display="flex" alignItems="center" marginTop="20px">
          <Button size="sm" marginRight="10px" onClick={handleDecrease}>
            -
          </Button>
          <Text fontSize="15px" color="#FFFFFF">
            {quantity}
          </Text>
          <Button size="sm" marginLeft="10px" onClick={handleIncrease}>
            +
          </Button>
          <Button
            
            backgroundColor="#1E1E1E"
            textColor="#000000"
            variant="solid"
            ml="10px"
            borderRadius="10px"
          >
            Mint
          </Button>
        </Box>
        <Text
          fontSize="14px"
          color="#737373"
          fontStyle="italic"
          mr="20"
          marginTop="40px"
        >
          * At the time of minted you are exchanging your crypto assets for a
          random NFT within the NFTs pool.
        </Text>
      </GridItem>
      
    </Grid>
    </Center>
  );
};

export default NatheraItems;
