import clsx from "clsx";
import { IRate } from "../../utils/types";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

interface ICardProps {
  data: IRate[];
  description: string;
  isHorizontal?: boolean;
  timeInSeconds: number;
}

function Card(props: ICardProps) {
  const { data, description, isHorizontal, timeInSeconds } = props;
  const [disountData, noDiscountData, biggerDiscountData] = data;
  const cardClassList = clsx(
    "card",
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
    "card__discount",
    "font-['pt-root-ui']",
    "tracking-[-2px]",
    isHorizontal ? "text-card-discount-horizontal" : "text-card-discount"
  );
  const noDiscountClassList = clsx(
    "text-card-no-discount",
    "self-end",
    "card__no-discount"
  );
  const descriptionClassList = clsx(
    "text-card-description",
    isHorizontal
      ? "mt-card-description-horizontal text-left max-w-[165px]"
      : "max-w-[120px] text-center"
  );
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

  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (timeInSeconds === 0) {
        gsap.to(".card__discount", {
          innerText: noDiscountData.price.toString(),
          snap: "innerText",
        });
      }
    },
    { scope: cardContainerRef, dependencies: [timeInSeconds] }
  );

  return (
    <article className={cardClassList} ref={cardContainerRef}>
      <h2 className={titleClassList}>{disountData.name}</h2>
      <div className={priceClassList}>
        <p className={discountClassList} data-price>
          {disountData.price}₽
        </p>
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
