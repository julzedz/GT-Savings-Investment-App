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
    <Flex w="100%" bgColor="applegreen" justifyContent="center" alignItems="center" flexDir={{ base: 'column', slg: 'row' }}>
      <Flex w={{ base: '100%', slg: '50%' }} p={{ base: 6, slg: 0 }} order={{ base: 2, slg: 1 }} textAlign={{ base: 'center', slg: 'left' }} justifySelf="center" flexDir="column" pl={9}>
        <Heading
          fontSize={{
            base: '', md: '2rem', slg: '3rem', xl: '4rem',
          }}
          lineHeight="122%"
          maxW={{ base: '100%', slg: '455px' }}
          m={0}
          color="gunmetal"
        >
          Maximize Your Returns
        </Heading>
        <Heading mt="0.3rem" color="white" lineHeight={{ base: '1.5em', slg: '4.2em' }} fontSize={{ base: '1.3em', slg: '1.7rem' }}>With Our Investment Products</Heading>
        <Button
          mt={4}
          colorScheme="gray"
          alignSelf={{ base: 'center', slg: 'auto' }}
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
      <Flex w={{ base: '', slg: '50%' }} order={{ base: 1, slg: 2 }}>
        <Image objectFit="cover" w="100%" src={moneytree} />
      </Flex>
    </Flex>
  </>
);

export default InvestmentPlans;
