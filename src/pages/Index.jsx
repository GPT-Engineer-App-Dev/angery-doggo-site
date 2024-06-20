import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Angry Dogs</Heading>
        <Text fontSize="lg">Welcome to the world of Angry Dogs! Discover the most ferocious and adorable angry dogs around.</Text>
        <Box boxSize="sm">
          <Image src="/images/angry-dog.jpg" alt="Angry Dog" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;