import { IRate } from "../../utils/types";

interface ICardProps {
  data: IRate[];
  description: string;
}

function Card({data, description}: ICardProps) {
  const [disountData, noDiscountData, biggerDiscountData] = data;
  return (
    <article className="flex flex-col items-center p-card  rounded-card border-card">
      <h2 className="font-BebasNeueCyrillic text-card-title pr-card-title mb-card-title">{disountData.name}</h2>
      <p className="font-['pt-root-ui'] text-card-discount pr-card-discount tracking-[-2px] mb-card-discount">{disountData.price}₽</p>
      <p className="text-card-no-discount self-end pr-card-no-discount mb-card-no-discount">{noDiscountData.price}₽</p>
      <p className="text-card-description text-center max-w-[150px]">{description}</p>
    </article>
  )
}


export {Card};
