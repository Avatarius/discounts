import clsx from "clsx";
import { IRate } from "../../utils/types";

interface ICardProps {
  data: IRate[];
  active: boolean;
  handleClick: () => void;
}

function CardModal({ data, active, handleClick }: ICardProps) {
  const [disountData, noDiscountData] = data;
  const cardClassList = clsx(
    "flex",
    "flex-col",
    "text-card-mini",
    "p-card-mini",
    "border-card",
    "rounded-card-mini",
    active ? "border-card-active bg-card-active" : "border-card",
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
          {disountData.name}
        </h4>
        <div className={checkboxClassList}>
          {active && (
            <div className="w-[11px] h-[11px] bg-accent rounded-full"></div>
          )}
        </div>
      </div>
      <p className="font-['pt-root-ui'] text-card-mini-no-discount mb-[41px]">
        {noDiscountData.price}₽
      </p>
      <p className="font-['pt-root-ui'] text-card-mini-discount">
        {disountData.price}₽
      </p>
    </article>
  );
}

export { CardModal };
