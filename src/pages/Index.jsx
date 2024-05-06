import { Button, Container, Flex, Text, VStack, Box, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  const playerCards = ["🂡", "🂮"]; // Placeholder cards
  const communityCards = ["🃟", "🃛", "🃝", "🃞", "🃑"]; // Placeholder community cards

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">Texas Hold'em Poker</Text>
        <Box>
          <Text fontSize="xl" mb={4}>Community Cards</Text>
          <SimpleGrid columns={5} spacing={2}>
            {communityCards.map((card, index) => (
              <Box key={index} p={4} borderWidth="2px" borderRadius="lg">
                <Text fontSize="4xl">{card}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box>
          <Text fontSize="xl" mb={4}>Your Cards</Text>
          <SimpleGrid columns={2} spacing={2}>
            {playerCards.map((card, index) => (
              <Box key={index} p={4} borderWidth="2px" borderRadius="lg">
                <Text fontSize="4xl">{card}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Flex>
          <Button colorScheme="red" mr={3}>Fold</Button>
          <Button colorScheme="green" mr={3}>Call</Button>
          <Button colorScheme="blue">Raise</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;