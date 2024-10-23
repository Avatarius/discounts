import clsx from "clsx";
import { IRate } from "../../utils/types";
import star from "../../images/Star.png";

interface ICardProps {
  data: IRate[];
  description: string;
  isHorizontal?: boolean;
}

function Card(props: ICardProps) {
  const { data, description, isHorizontal } = props;
  const [disountData, noDiscountData, biggerDiscountData] = data;
  const cardClassList = clsx(
    "flex",
    "rounded-card",
    "border-card",
    "relative",
    isHorizontal
      ? "col-span-3 mt-[36px] p-card-horizontal items-start"
      : "flex-col p-card items-center"
  );
  const titleClassList = clsx(
    "font-BebasNeueCyrillic",
    isHorizontal
      ? "text-card-title-horizontal m-card-title-horizontal"
      : "text-card-title self-start mb-card-title"
  );
  const priceClassList = clsx(
    "flex",
    "flex-col",
    isHorizontal ? "mr-card-price-horizontal" : "mb-card-price"
  );
  const discountClassList = clsx(
    "font-['pt-root-ui']",
    "tracking-[-2px]",
    isHorizontal ? "text-card-discount-horizontal" : "text-card-discount"
  );
  const noDiscountClassList = clsx("text-card-no-discount", "self-end");
  const descriptionClassList = clsx(
    "text-card-description",
    isHorizontal
      ? "mt-card-description-horizontal text-left max-w-[165px]"
      : "max-w-[120px] text-center"
  );
  const starClassList = clsx(
    "bg-[url('../images/Star.png')]",
    "bg-no-repeat",
    "w-[70px]",
    "h-[70px]",
    "absolute",
    "right-[2px]",
    "top-[7px] translate-y-[-50%]",
    "flex",
    "justify-center",
    'items-center'
  );
  const starTextClassList = clsx("block", "font-['pt-root-ui'] text-star");
  return (
    <article className={cardClassList}>
      <h2 className={titleClassList}>{disountData.name}</h2>
      <div className={priceClassList}>
        <p className={discountClassList}>{disountData.price}₽</p>
        <p className={noDiscountClassList}>{noDiscountData.price}₽</p>
      </div>
      <p className={descriptionClassList}>{description}</p>
      <div className={starClassList}>
        <span className={starTextClassList}>-30%</span>
      </div>
    </article>
  );
}

export { Card };
