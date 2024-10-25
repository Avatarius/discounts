import clsx from "clsx";

function Star() {
  const starClassList = clsx(
    "card__star",
    "bg-[url('../images/Star.png')]",
    "bg-no-repeat",
    "w-[70px]",
    "h-[70px]",
    "absolute",
    "right-[2px]",
    "top-[7px] translate-y-[-50%]",
    "flex",
    "justify-center",
    "items-center"
  );
  const starTextClassList = clsx("block", "font-['pt-root-ui'] text-star");
  return (
    <div className={starClassList}>
      <span className={starTextClassList}>-30%</span>
    </div>
  );
}

export { Star };
