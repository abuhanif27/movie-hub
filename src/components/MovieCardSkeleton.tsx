import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";

function MovieCardSkeleton() {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default MovieCardSkeleton;
