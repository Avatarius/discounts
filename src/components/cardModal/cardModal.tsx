import clsx from "clsx";
import { IRate } from "../../utils/types";
import { Star } from "../star/star";

interface ICardProps {
  name: string;
  defaultPrice: number;
  discountedPrice: number;
  active: boolean;
  handleClick: () => void;
  isBiggerDiscounts: boolean;
}

function CardModal(props: ICardProps) {
  const {
    name,
    defaultPrice,
    discountedPrice,
    active,
    isBiggerDiscounts,
    handleClick,
  } = props;
  const cardClassList = clsx(
    "flex",
    "flex-col",
    "text-card-mini",
    "p-card-mini",
    "border-card",
    "rounded-card-mini",
    "relative",
    active ? "border-card-active bg-card-active" : "border-card"
  );
  const checkboxClassList = clsx(
    "w-[22px]",
    "h-[22px]",
    "rounded-full",
    "border-modal-checkbox",
    "mb-[11px]",
    "flex",
    "justify-center",
    "items-center"
  );

  return (
    <article className={cardClassList} onClick={handleClick}>
      <div className="flex items-center gap-[58px]">
        <h4 className="font-BebasNeueCyrillic text-card-mini-title mb-[11px] whitespace-nowrap">
          {name}
        </h4>
        <div className={checkboxClassList}>
          {active && (
            <div className="w-[11px] h-[11px] bg-accent rounded-full"></div>
          )}
        </div>
      </div>
      <p className="font-['pt-root-ui'] text-card-mini-no-discount mb-[41px]">
        {defaultPrice}₽
      </p>
      <p className="font-['pt-root-ui'] text-card-mini-discount">
        {discountedPrice}₽
      </p>
      <Star
        additionalClasses="w-[50px] h-[50px] bottom-[33px] right-[3px]"
        defaultPrice={defaultPrice}
        discountedPrice={discountedPrice}
      />
    </article>
  );
}

export { CardModal };
