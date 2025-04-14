import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Icon, Text } from "@chakra-ui/react";
import { ComponentType } from "react";

interface Props {
  rating: number;
}

const getStarIcon = (rating: number) =>
  rating >= 7.5
    ? FaStar
    : rating > 5
    ? FaStarHalfAlt
    : rating > 0
    ? FaStarHalf
    : CiStar;

function Rating({ rating }: Props) {
  return (
    <Text fontSize="lg" display="flex" alignItems="center" gap={2}>
      {rating && rating.toFixed(1)}
      <Icon as={getStarIcon(rating) as ComponentType} color="yellow.400" />{" "}
    </Text>
  );
}

export default Rating;
