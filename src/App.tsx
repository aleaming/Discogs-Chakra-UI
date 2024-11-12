import {
  ChakraProvider,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
} from '@chakra-ui/react';
import { SearchBar } from './components/SearchBar';
import { Card } from './components/Card';
import ReleaseAlbumBlock from './components/ReleaseAlbumBlock';
import { ArtistHero } from './components/ArtistHero';
import theme from './theme';

const App = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  const artistData = {
    name: 'The Midnight Symphony',
    image:
      'https://images.unsplash.com/photo-1549213783-8284d0336c4f?auto=format&fit=crop&w=300&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1500&q=80',
    monthlyListeners: 1234567,
    genres: ['Classical', 'Contemporary', 'Orchestral', 'Ambient'],
    description:
      "The Midnight Symphony transforms classical music into contemporary masterpieces. With their innovative approach to orchestral arrangements and modern compositions, they've captivated audiences worldwide and redefined the boundaries of classical music.",
    isVerified: true,
  };

  const albums = [
    {
      title: 'In Love with Music',
      artist: 'Various Artists',
      price: '38.00',
      image:
        'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?auto=format&fit=crop&w=800&q=80',
      label: 'Universal Music',
      releaseYear: 2024,
    },
    {
      title: 'Midnight Jazz',
      artist: 'Blue Note Ensemble',
      price: '45.00',
      image:
        'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=800&q=80',
      label: 'Blue Note Records',
      releaseYear: 2023,
    },
    {
      title: 'Classical Dreams',
      artist: 'Symphony Orchestra',
      price: '42.00',
      image:
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80',
      label: 'Deutsche Grammophon',
      releaseYear: 2024,
    },
    {
      title: 'Urban Beats',
      artist: 'City Sound Collective',
      price: '39.99',
      image:
        'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800&q=80',
      label: 'Sony Music',
      releaseYear: 2023,
    },
    {
      title: 'Vinyl Nostalgia',
      artist: 'Retro Records',
      price: '48.00',
      image:
        'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=800&q=80',
      label: 'Vinyl Classics',
      releaseYear: 2024,
    },
    {
      title: 'Electronic Waves',
      artist: 'Digital Dreamers',
      price: '41.00',
      image:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      label: 'Electronic Arts Music',
      releaseYear: 2023,
    },
    {
      title: 'Soul Sessions',
      artist: 'The Groove Masters',
      price: '44.99',
      image:
        'https://images.unsplash.com/photo-1504509546545-e000b4a62425?auto=format&fit=crop&w=800&q=80',
      label: 'Motown Records',
      releaseYear: 2024,
    },
    {
      title: 'Future Sounds',
      artist: "Tomorrow's Artists",
      price: '43.50',
      image:
        'https://images.unsplash.com/photo-1485120750507-a3bf477acd63?auto=format&fit=crop&w=800&q=80',
      label: 'Future Music',
      releaseYear: 2024,
    },
  ];

  const cards = [
    {
      title: 'Mountain Adventure',
      description:
        "Explore the majestic peaks and valleys of the world's most beautiful mountains.",
      imageUrl:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Ocean Discovery',
      description:
        'Dive into the mysteries of the deep blue sea and discover marine wonders.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Forest Expedition',
      description:
        "Journey through ancient forests and experience nature's timeless beauty.",
      imageUrl:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={0}>
        <VStack spacing={8} w="full">
          <SearchBar onSearch={handleSearch} />

          <Tabs variant="enclosed" colorScheme="brand" width="full" px={4}>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Popular</Tab>
              <Tab>Albums</Tab>
              <Tab>Singles</Tab>
              <Tab>About</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ArtistHero
                  {...artistData}
                  onPlay={() => console.log('Play clicked')}
                  onFollow={() => console.log('Follow clicked')}
                  onShare={() => console.log('Share clicked')}
                />

                <Container maxW="container.xl" py={8}>
                  <VStack w="full" spacing={4} align="start">
                    <Heading size="lg" color="brand.600">
                      Featured Albums
                    </Heading>
                    <SimpleGrid
                      columns={{ base: 1, md: 2, lg: 4 }}
                      spacing={6}
                      w="full"
                    >
                      {albums.map((album, index) => (
                        <ReleaseAlbumBlock key={index} {...album} />
                      ))}
                    </SimpleGrid>
                  </VStack>

                  <Divider my={8} />

                  <VStack w="full" spacing={4} align="start">
                    <Heading size="lg" color="brand.600">
                      Featured 3up Card Layout
                    </Heading>
                    <SimpleGrid
                      columns={{ base: 1, md: 2, lg: 3 }}
                      spacing={8}
                      w="full"
                    >
                      {cards.map((card, index) => (
                        <Card
                          key={index}
                          {...card}
                          onLearnMore={handleLearnMore}
                        />
                      ))}
                    </SimpleGrid>
                  </VStack>
                </Container>
              </TabPanel>

              <TabPanel>
                <Container maxW="container.xl">
                  <Heading size="lg" mb={6}>
                    Popular Tracks
                  </Heading>
                  <Text>Popular tracks content will be displayed here</Text>
                </Container>
              </TabPanel>

              <TabPanel>
                <Container maxW="container.xl">
                  <Heading size="lg" mb={6}>
                    Albums
                  </Heading>
                  <Text>Albums content will be displayed here</Text>
                </Container>
              </TabPanel>

              <TabPanel>
                <Container maxW="container.xl">
                  <Heading size="lg" mb={6}>
                    Singles
                  </Heading>
                  <Text>Singles content will be displayed here</Text>
                </Container>
              </TabPanel>

              <TabPanel>
                <Container maxW="container.xl">
                  <Heading size="lg" mb={6}>
                    About the Artist
                  </Heading>
                  <Text>
                    Artist biography and details will be displayed here
                  </Text>
                </Container>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default App;
