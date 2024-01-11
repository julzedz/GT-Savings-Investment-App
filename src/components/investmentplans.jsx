import {
  Box, Heading, Flex, Text, Button, Image,
} from '@chakra-ui/react';
import building from '../assets/building2.jpg';
import moneytree from '../assets/money-tree.jpg';

const InvestmentPlans = () => (
  <>
    <Box
      display="flex"
      mt={{ base: 13, lg: 0 }}
      minH={{ base: '10rem', lg: '2xs' }}
      maxH={{ base: 'xs', lg: 'xs' }}
      backgroundImage={`linear-gradient(to right, #000000 25%, #0087d430 100%), url(${building})`}
      bgSize="cover"
      opacity="0.93"
      bgColor="transparent"
      alignItems="flex-end"
    >
      <Heading
        m={3}
        p={4}
        textAlign={{ base: 'center', lg: 'left' }}
        fontSize={{ base: '5xl', lg: '7xl' }}
        fontWeight={{ base: 'bold', lg: 'black' }}
        width={{ base: '100%', lg: '80%' }}
        textColor="white"
      >
        Investment Plans
      </Heading>
    </Box>
    <Flex w="100%" bgColor="red">
      <Flex w="50%" flexDir="column">
        <Text>Maximize Your Returns</Text>
        <Text>With Our Investment Products</Text>
        <Button
          mt={4}
          colorScheme="green"
                // isLoading={props.isSubmitting}
              // disabled={props.isSubmitting}
          type="submit"
          fontFamily="noto"
          w="30%"
          p={6}
        >
          Click To Invest
        </Button>
      </Flex>
      <Flex w="50%">
        <Image objectFit="cover" w="100%" src={moneytree} boxSize={40} />
      </Flex>
    </Flex>
  </>
);

export default InvestmentPlans;
