import { ListItem, HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton height="42px" width="180px" borderRadius={8} />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
