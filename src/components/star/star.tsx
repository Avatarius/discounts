import clsx from "clsx";

interface IStarProps {
  additionalClasses?: string;
}

function Star(props: IStarProps) {
  const {additionalClasses} = props;
  const starClassList = clsx(
    "card__star",
    "bg-[url('../images/Star.png')]",
    "bg-no-repeat",
    "w-[70px]",
    "h-[70px]",
    "absolute",
    // "right-[3px]",
    // "top-[5px]",
    // "translate-y-[-50%]",
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
      <span className={starTextClassList}>-30%</span>
    </div>
  );
}

export { Star };
