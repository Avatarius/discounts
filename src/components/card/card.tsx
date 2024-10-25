import clsx from "clsx";
import { IRate } from "../../utils/types";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { Star } from "../star/star";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

interface ICardProps {
  data: IRate[];
  description: string;
  isHorizontal?: boolean;
  timeInSeconds: number;
  active: boolean;
  handleClick: () => void;
  isBiggerDiscounts: boolean;
}

function Card(props: ICardProps) {
  const { data, description, isHorizontal, timeInSeconds, active, handleClick, isBiggerDiscounts } = props;
  const [disountData, noDiscountData, biggerDiscountData] = data;
  const cardClassList = clsx(
    "card",
    "flex",
    "rounded-card",
    "relative",
    active ? "border-card-active bg-card-active" : "border-card",
    isHorizontal
      ? "col-span-3 mt-[36px] p-card-horizontal items-start"
      : "flex-col p-card items-center",
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

  const priceValue = (isBiggerDiscounts && biggerDiscountData) ? biggerDiscountData.price : disountData.price;

  useGSAP(
    () => {
      if (timeInSeconds === 0) {
        gsap.to(".card__discount", {
          innerText: noDiscountData.price.toString(),
          snap: "innerText",
          delay: 0.25
        });
      }
    },
    { scope: cardContainerRef, dependencies: [timeInSeconds] }
  );

  useGSAP(() => {
    if (isBiggerDiscounts) {
      gsap.set(".card__discount", {
        innerText: priceValue.toString()
      })
    }
  }, {scope: cardContainerRef, dependencies: [isBiggerDiscounts]})

  return (
    <article className={cardClassList} ref={cardContainerRef} onClick={handleClick}>
      <h2 className={titleClassList}>{disountData.name}</h2>
      <div className={priceClassList}>
        <p className={discountClassList} data-price>
          {priceValue}₽
        </p>
        <p className={noDiscountClassList}>{noDiscountData.price}₽</p>
      </div>
      <p className={descriptionClassList}>{description}</p>
      <Star additionalClasses="right-[3px] top-[5px] translate-y-[-50%]"/>
    </article>
  );
}

export { Card };
