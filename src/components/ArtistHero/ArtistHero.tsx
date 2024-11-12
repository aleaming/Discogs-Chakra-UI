import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  useColorModeValue,
  Tag,
  Wrap,
  WrapItem,
  AspectRatio,
} from '@chakra-ui/react';
import { Play, Heart, Share2, UserPlus } from 'lucide-react';
import { ArtistHeroProps } from './types';

export const ArtistHero = ({
  name,
  image,
  coverImage,
  monthlyListeners,
  genres = [],
  description,
  isVerified = false,
  onPlay,
  onFollow,
  onShare,
}: ArtistHeroProps) => {
  const bgOverlay = useColorModeValue(
    'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))',
    'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))'
  );

  const textColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box position="relative" width="100%" overflow="hidden">
      {/* Cover Image with Gradient Overlay */}
      <Box position="absolute" top={0} left={0} right={0} height="100%" zIndex={0}>
        <AspectRatio ratio={3 / 1} minHeight="400px">
          <Image
            src={coverImage}
            alt=""
            objectFit="cover"
            aria-hidden="true"
            loading="eager"
          />
        </AspectRatio>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          background={bgOverlay}
        />
      </Box>

      {/* Content */}
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack
          spacing={6}
          align="start"
          py={{ base: 8, md: 12, lg: 16 }}
          px={4}
        >
          {/* Artist Image */}
          <Box
            borderRadius="full"
            overflow="hidden"
            boxShadow="xl"
            width={{ base: "120px", md: "160px" }}
            height={{ base: "120px", md: "160px" }}
          >
            <Image
              src={image}
              alt={name}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>

          {/* Artist Info */}
          <VStack align="start" spacing={4} width="100%">
            <HStack>
              <Heading
                as="h1"
                size="2xl"
                color={textColor}
                fontWeight="bold"
              >
                {name}
              </Heading>
              {isVerified && (
                <Tag
                  size="md"
                  colorScheme="brand"
                  verticalAlign="middle"
                >
                  Verified
                </Tag>
              )}
            </HStack>

            <Text color={subTextColor} fontSize="lg">
              {monthlyListeners.toLocaleString()} monthly listeners
            </Text>

            {/* Genres */}
            <Wrap spacing={2}>
              {genres.map((genre) => (
                <WrapItem key={genre}>
                  <Tag
                    size="md"
                    variant="subtle"
                    colorScheme="gray"
                  >
                    {genre}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>

            {/* Description */}
            <Text
              color={subTextColor}
              fontSize="md"
              maxWidth="800px"
              lineHeight="tall"
            >
              {description}
            </Text>

            {/* Action Buttons */}
            <HStack spacing={4} pt={4}>
              <Button
                leftIcon={<Play size={20} />}
                colorScheme="brand"
                size="lg"
                onClick={onPlay}
                aria-label="Play artist's popular tracks"
              >
                Play
              </Button>
              <Button
                leftIcon={<UserPlus size={20} />}
                variant="outline"
                colorScheme="brand"
                size="lg"
                onClick={onFollow}
                aria-label="Follow artist"
              >
                Follow
              </Button>
              <Button
                icon={<Heart size={20} />}
                variant="ghost"
                colorScheme="brand"
                size="lg"
                aria-label="Like artist"
              >
                <Heart />
              </Button>
              <Button
                icon={<Share2 size={20} />}
                variant="ghost"
                colorScheme="brand"
                size="lg"
                onClick={onShare}
                aria-label="Share artist"
              >
                <Share2 />
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};