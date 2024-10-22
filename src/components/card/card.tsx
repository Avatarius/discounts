import clsx from "clsx";
import { IRate } from "../../utils/types";

interface ICardProps {
  data: IRate[];
  description: string;
  isHorizontal?: boolean;
}

function Card(props: ICardProps) {
  const {data, description, isHorizontal} = props;
  const [disountData, noDiscountData, biggerDiscountData] = data;
  const cardClassList = clsx('flex', 'items-center', 'rounded-card', 'border-card', isHorizontal ? 'col-span-3 mt-[36px] p-card-horizontal' : 'flex-col p-card');
  const titleClassList = clsx('font-BebasNeueCyrillic', isHorizontal ? 'text-card-title-horizontal' : 'text-card-title mb-card-title pr-card-title');
  return (
    <article className={cardClassList}>
      <h2 className={titleClassList}>{disountData.name}</h2>
      <p className="font-['pt-root-ui'] text-card-discount pr-card-discount tracking-[-2px] mb-card-discount">{disountData.price}₽</p>
      <p className="text-card-no-discount self-end pr-card-no-discount mb-card-no-discount">{noDiscountData.price}₽</p>
      <p className="text-card-description text-center max-w-[120px]">{description}</p>
    </article>
  )
}


export {Card};
