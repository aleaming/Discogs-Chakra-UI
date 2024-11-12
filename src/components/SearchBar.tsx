import { HStack, Input, Button } from '@chakra-ui/react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    onSearch(input.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing={0} w="full" maxW="800px" mx="auto" p={4}>
        <Input
          name="search"
          placeholder="Search..."
          size="lg"
          variant="filled"
          borderTopLeftRadius="full"
          borderBottomLeftRadius="full"
          _focus={{
            borderColor: 'brand.500',
            bg: 'white',
          }}
        />
        <Button
          type="submit"
          size="lg"
          colorScheme="brand"
          borderTopRightRadius="full"
          borderBottomRightRadius="full"
          px="8"
          leftIcon={<Search size={20} />}
        >
          Search
        </Button>
      </HStack>
    </form>
  );
};
