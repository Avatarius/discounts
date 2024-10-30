import clsx from "clsx";
import { calculatePercentage } from "../../utils/utils";

interface IStarProps {
  additionalClasses?: string;
  defaultPrice: number;
  discountedPrice: number;
  textSize?: number;
}

function Star(props: IStarProps) {
  const { additionalClasses, defaultPrice, discountedPrice, textSize } = props;
  const starClassList = clsx(
    "card__star",
    "bg-[url('../images/Star.png')]",
    "bg-no-repeat",
    "absolute",
    "bg-no-repeat",
    "bg-center",
    "bg-cover",
    "flex",
    "justify-center",
    "items-center",
    additionalClasses
  );
  const starTextClassList = clsx("block", "font-pt-root-ui", "text-star", typeof textSize !== undefined ? `text-[${textSize}px]` : "text-[18px]");

  return (
    <div className={starClassList}>
      <span className={starTextClassList}>-{calculatePercentage(defaultPrice - discountedPrice, defaultPrice)}%</span>
    </div>
  );
}

export { Star };
