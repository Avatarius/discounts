import { IRate } from "../../utils/types";

interface ICardProps {
  data: IRate[];
}

function CardModal({ data }: ICardProps) {
  const [disountData, noDiscountData] = data;

  return (
    <article className="flex flex-col text-card-mini p-card-mini border-card-mini rounded-card-mini">
      <div className="flex items-center gap-[58px]">
        <h4 className="font-BebasNeueCyrillic text-card-mini-title mb-[11px] whitespace-nowrap">
          {disountData.name}
        </h4>
        <div className="w-[22px] h-[22px] rounded-full border-modal-checkbox mb-[11px]"></div>
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
