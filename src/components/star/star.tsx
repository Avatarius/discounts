import clsx from "clsx";
import { calculatePercentage } from "../../utils/utils";

interface IStarProps {
  additionalClasses?: string;
  defaultPrice: number;
  discountedPrice: number;
}

function Star(props: IStarProps) {
  const { additionalClasses, defaultPrice, discountedPrice } = props;
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
  const starTextClassList = clsx("block", "font-['pt-root-ui'] text-star");

  return (
    <div className={starClassList}>
      <span className={starTextClassList}>-{calculatePercentage(defaultPrice - discountedPrice, defaultPrice)}%</span>
    </div>
  );
}

export { Star };
