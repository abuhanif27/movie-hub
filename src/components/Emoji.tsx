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
    1: { src: meh, alt: "meh", boxSize: "35px" },
    2: { src: meh, alt: "meh", boxSize: "35px" },
    3: { src: meh, alt: "meh", boxSize: "35px" },
    4: { src: meh, alt: "meh", boxSize: "35px" },
    5: { src: meh, alt: "meh", boxSize: "35px" },
    6: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    7: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    8: { src: bullsEye, alt: "exceptional", boxSize: "45px" },
    9: { src: bullsEye, alt: "exceptional", boxSize: "45px" },
    10: { src: bullsEye, alt: "exceptional", boxSize: "45px" },
  };
  return <Image {...emojiMap[rate]} />;
}

export default Emoji;
