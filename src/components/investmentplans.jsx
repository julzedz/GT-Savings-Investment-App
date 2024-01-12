import {
  Box, Heading, Flex, Button, Image,
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
    <Flex w="100%" bgColor="applegreen" justifyContent="center" alignItems="center">
      <Flex w="50%" textAlign="left" justifySelf="center" flexDir="column">
        <Heading fontSize="4rem" lineHeight="122%" maxW="455px" m={0} color="gunmetal">Maximize Your Returns</Heading>
        <Heading mt="0.3rem" color="white" lineHeight="4.2rem" fontSize="1.7rem">With Our Investment Products</Heading>
        <Button
          mt={4}
          colorScheme="gray"
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
        <Image objectFit="cover" w="100%" src={moneytree} />
      </Flex>
    </Flex>
  </>
);

export default InvestmentPlans;
