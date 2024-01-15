import {
  Box, Heading, Flex, Button, Image, Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import building from '../assets/building2.jpg';
import moneytree from '../assets/money-tree.jpg';
import estate from '../assets/solutions-bg-new.svg';

const InvestmentPlans = () => {
  const plans = [
    {
      icon: estate, heading: 'Real Estate', minInvestment: '$50,000', term: '3 years', roi: '40%', paymentSchedule: 'monthly', link: '/', as: ReactRouterLink,
    },
  ];

  return (
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
        <Flex w={{ base: '100%', slg: '50%' }} py={{ base: 6, slg: 0 }} px={{ base: 6, slg: 'auto' }} pl={9} order={{ base: 2, slg: 1 }} textAlign={{ base: 'center', slg: 'left' }} justifySelf="center" flexDir="column">
          <Heading
            fontSize={{
              base: '', md: '2rem', slg: '3rem', xl: '4rem',
            }}
            lineHeight="102%"
            maxW={{ base: '100%', slg: '455px' }}
            m={0}
            color="gunmetal"
          >
            Maximize Your Returns
          </Heading>
          <Heading mt="0.3rem" color="white" lineHeight={{ base: '1.5em', slg: '2em' }} fontSize={{ base: '1.3em', slg: '1.7rem' }}>With Our Investment Products</Heading>
          <Button
            colorScheme="gray"
            alignSelf={{ base: 'center', slg: 'auto' }}
            type="submit"
            fontFamily="noto"
            w="30%"
            p={6}
          >
            Click to Invest
          </Button>
        </Flex>
        <Flex w={{ base: '100%', slg: '50%' }} order={{ base: 1, slg: 2 }}>
          <Image maxH={{ base: 'xs', slg: 'auto' }} objectFit="cover" w="100%" src={moneytree} />
        </Flex>
      </Flex>
      <Box bgColor="#e9ecef" textAlign="center" m={0} p={0} pb={6} px={6} minH="sm" fontFamily="new">
        <Heading fontSize="1.2em" p="1em 2em" letterSpacing="0.5em">OUR PRODUCTS</Heading>
        <Heading
          fontSize={{
            base: '', md: '2rem', slg: '3rem', xl: '4rem',
          }}
          lineHeight="102%"
          color="gunmetal"
        >
          Choose How You Want To Invest

        </Heading>
        <Flex mt="9rem" flexWrap="wrap" justifyContent="center" gap={8}>
          {plans.map((plan) => (
            <Flex key={plan.icon} bgColor="rgba(159, 167, 34, 0.6)" flexDir="column" borderRadius="0.6em" padding="2.6em" w="26rem">
              <Image alignSelf="center" boxSize="100px" src={plan.icon} m={6} mt={0} />
              <Heading mb={6}>{plan.heading}</Heading>
              <Flex fontWeight="semibold" borderBottom="1px solid gray" py="1rem" justifyContent="space-between">
                <Text m={0}>Min. Investment</Text>
                <Text m={0}>{plan.minInvestment}</Text>
              </Flex>
              <Flex borderBottom="1px solid gray" py="1rem" fontWeight="semibold" justifyContent="space-between">
                <Text m={0}>Term</Text>
                <Text m={0}>{plan.term}</Text>
              </Flex>
              <Flex borderBottom="1px solid gray" py="1em" fontWeight="semibold" justifyContent="space-between">
                <Text m={0}>ROI</Text>
                <Text m={0}>{plan.roi}</Text>
              </Flex>
              <Flex py="1em" fontWeight="semibold" justifyContent="space-between">
                <Text m={0}>Payment Schedule</Text>
                <Text m={0}>{plan.paymentSchedule}</Text>
              </Flex>
              <Button
                variant="outline"
                as={ReactRouterLink}
                to={plan.link}
                mt={6}
              >
                Get Started
              </Button>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default InvestmentPlans;
