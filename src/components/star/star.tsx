import clsx from "clsx";
import { calculatePercentage } from "../../utils/utils";

interface IStarProps {
  additionalClasses?: string;
  defaultPrice: number;
  discountedPrice: number;
  small: boolean;
}

function Star(props: IStarProps) {
  const { additionalClasses, defaultPrice, discountedPrice, small } = props;
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
    small ? "w-[50px] h-[50px]" : "w-[70px] h-[70px]",
    additionalClasses
  );
  const starTextClassList = clsx(
    "block",
    "font-pt-root-ui",
    "text-white",
    small ? "text-star-small" : "text-star"
  );

  return (
    <div className={starClassList}>
      <span className={starTextClassList}>
        -{calculatePercentage(defaultPrice - discountedPrice, defaultPrice)}%
      </span>
    </div>
  );
}

export { Star };
