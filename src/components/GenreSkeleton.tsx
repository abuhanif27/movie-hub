import { Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreSkeleton() {
  return (
    <Skeleton
      height={"40px"}
      width="100%"
      borderRadius={5}
      marginBottom={2}
      mt={3}
    >
      <SkeletonText></SkeletonText>
    </Skeleton>
  );
}

export default GenreSkeleton;
