import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  const rate = rating ? Math.floor(rating) : 0;
  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: meh, alt: "meh", boxSize: "35px" },
    6: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    7: { src: bullsEye, alt: "exceptional", boxSize: "45px" },
  };
  return <Image {...emojiMap[rate]} />;
}

export default Emoji;
