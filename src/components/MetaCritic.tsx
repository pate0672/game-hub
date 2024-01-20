import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  score: number;
}

const MetaCritic = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default MetaCritic;
