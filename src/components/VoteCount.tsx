import { Badge, Text } from "@chakra-ui/react";

interface Props {
  vote: number;
}

function VoteCount({ vote }: Props) {
  const getColor = (vote: number): string => {
    if (vote >= 100) return "green";
    if (vote >= 50) return "yellow";
    return "red";
  };

  const color = getColor(vote);
  return (
    <Text fontSize="lg" display="flex" alignItems="center" gap={2}>
      Votes:
      <Badge colorScheme={color} fontSize="lg" borderRadius={4} paddingX={1}>
        {vote}
      </Badge>
    </Text>
  );
}

export default VoteCount;
