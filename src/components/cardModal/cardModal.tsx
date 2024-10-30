import clsx from "clsx";
import { IRate } from "../../utils/types";
import { Star } from "../star/star";

interface ICardProps {
  name: string;
  defaultPrice: number;
  discountedPrice: number;
  active: boolean;
  handleClick: () => void;
}

function CardModal(props: ICardProps) {
  const {
    name,
    defaultPrice,
    discountedPrice,
    active,
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
  const noDiscountClassList = clsx(
    "font-pt-root-ui",
    "text-card-mini-no-discount",
    "mb-[41px]",
    "relative",
    "self-start",
    "before=''",
    "before:w-full",
    "before:h-[2px]",
    "before:bg-[#fd4d35]",
    "before:absolute",
    "before:left-0",
    "before:top-[calc(50%-1px)]",
    "before:rotate-[-18deg]",
    "after=''",
    "after:w-full",
    "after:h-[2px]",
    "after:bg-[#fd4d35]",
    "after:absolute",
    "after:left-0",
    "after:top-[calc(50%-1px)]",
    "after:rotate-[18deg]",
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
      <p className={noDiscountClassList}>
        {defaultPrice}₽
      </p>
      <p className="font-pt-root-ui text-card-mini-discount">
        {discountedPrice}₽
      </p>
      <Star
        additionalClasses="bottom-[53px] right-[3px] text-[13px]"
        defaultPrice={defaultPrice}
        discountedPrice={discountedPrice}
        textSize={13}
        size={50}
      />
    </article>
  );
}

export { CardModal };
