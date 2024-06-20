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
        
        <Heading as="h2" size="xl">Bulldog</Heading>
        <Text fontSize="md">Bulldogs are medium-sized, muscular dogs known for their wrinkled faces and pushed-in noses. They are gentle and friendly.</Text>
        <Box boxSize="sm">
          <Image src="/images/bulldog.jpg" alt="Bulldog" />
        </Box>

        <Heading as="h2" size="xl">German Shepherd</Heading>
        <Text fontSize="md">German Shepherds are large-sized dogs known for their intelligence, strength, and versatility. They are often used in police and military roles.</Text>
        <Box boxSize="sm">
          <Image src="/images/german-shepherd.jpg" alt="German Shepherd" />
        </Box>

        <Heading as="h2" size="xl">Golden Retriever</Heading>
        <Text fontSize="md">Golden Retrievers are large-sized, friendly dogs known for their golden coats and gentle temperament. They are great family pets.</Text>
        <Box boxSize="sm">
          <Image src="/images/golden-retriever.jpg" alt="Golden Retriever" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;