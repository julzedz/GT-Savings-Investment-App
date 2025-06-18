/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Link as ChakraLink,
  Grid,
  GridItem,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCity,
  FaMapMarkerAlt,
  FaGlobe,
  FaClock,
} from 'react-icons/fa';
import Sidebar from './sidebar';
import AccountFooter from './accountfooter';
import avatar from '../assets/bank-leaf.png';
import api from '../api';
import Header from './Header';

const Profile = () => {
  const [user, setUser] = useState(null);
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const fetchUser = async () => {
    try {
      const response = await api.get('/users/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUser();
      setUser(userData);
    };

    fetchUserData();
  }, []);

  const createdAt = user?.created_at;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const formattedCreatedAt = createdAt
    ? new Date(createdAt).toLocaleDateString('en-US', options)
    : '';

  const InfoItem = ({ icon, label, value }) => (
    <HStack
      spacing={4}
      align="start"
      p={4}
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Icon as={icon} boxSize={5} color="applegreen" />
      <Box flex="1">
        <Text fontSize="sm" color="gray.500" mb={1}>
          {label}
        </Text>
        <Text fontSize="md" fontWeight="medium" color={textColor}>
          {value || 'Not provided'}
        </Text>
      </Box>
    </HStack>
  );

  return (
    <Flex color="black" w="100%">
      <Sidebar />
      {user && (
        <Flex
          flexDir="column"
          minHeight="100vh"
          flex="1"
          marginLeft={{ base: 20, md: '11.01rem' }}
          overflowY="auto"
          fontFamily="noto"
          bgColor="gray.50"
        >
          <Header />
          <Box maxW="1200px" mx="auto" px={4} py={8} w="full">
            <Grid
              templateColumns={{ base: '1fr', lg: '300px 1fr' }}
              gap={8}
              alignItems="start"
            >
              {/* Profile Card */}
              <GridItem>
                <Card
                  bg={cardBg}
                  boxShadow="lg"
                  borderRadius="xl"
                  overflow="hidden"
                >
                  <CardBody p={0}>
                    <Box h="120px" bg="applegreen" position="relative" />
                    <Box position="relative" mt="-60px" px={6}>
                      <Avatar
                        size="xl"
                        src={avatar}
                        name={user.fullname}
                        border="4px solid white"
                        boxShadow="lg"
                        bgColor="black"
                      />
                      <VStack spacing={2} mt={4} align="start">
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {user.fullname}
                        </Text>
                        <Badge
                          colorScheme="green"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                        >
                          User
                        </Badge>
                      </VStack>
                    </Box>
                    <Box p={6}>
                      <Button
                        w="full"
                        colorScheme="green"
                        variant="outline"
                        size="lg"
                        as={ChakraLink}
                        href="#"
                        _hover={{
                          textDecoration: 'none',
                          bg: 'applegreen',
                          color: 'white',
                        }}
                      >
                        Reset Password
                      </Button>
                    </Box>
                  </CardBody>
                </Card>
              </GridItem>

              {/* User Information Card */}
              <GridItem>
                <Card bg={cardBg} boxShadow="lg" borderRadius="xl">
                  <CardHeader pb={0}>
                    <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                      Personal Information
                    </Text>
                  </CardHeader>
                  <CardBody>
                    <VStack spacing={0} align="stretch" divider={<Divider />}>
                      <InfoItem
                        icon={FaEnvelope}
                        label="Email"
                        value={user.email}
                      />
                      <InfoItem
                        icon={FaPhone}
                        label="Phone Number"
                        value={user.phone_number}
                      />
                      <InfoItem
                        icon={FaHome}
                        label="Home Address"
                        value={user.home_address}
                      />
                      <InfoItem icon={FaCity} label="City" value={user.city} />
                      <InfoItem
                        icon={FaMapMarkerAlt}
                        label="State"
                        value={user.state}
                      />
                      <InfoItem
                        icon={FaGlobe}
                        label="Country"
                        value={user.country}
                      />
                      <InfoItem
                        icon={FaClock}
                        label="Member Since"
                        value={formattedCreatedAt}
                      />
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Box>
          <AccountFooter />
        </Flex>
      )}
    </Flex>
  );
};

export default Profile;
