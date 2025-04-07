import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";

function MovieCardSkeleton() {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default MovieCardSkeleton;
