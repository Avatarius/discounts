import { Timer } from "../timer/timer";
import man from "../../images/man.png";
import { useEffect, useState } from "react";
import { IData, IRate, IRecord } from "../../utils/types";
import { Info } from "../info/info";
import { Modal } from "../modal/modal";

function App() {
  const [timer, setTimer] = useState<number>(3333);
  const [data, setData] = useState<IData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBiggerDiscounts, setIsBiggerDiscount] = useState(false);
  useEffect(() => {
    // fetch data
    fetch("https://t-pay.iqfit.app/subscribe/list-test")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then((res: IRecord[]) => {
        const week = res.filter((item) => item.name === "1 неделя");
        const month = res.filter((item) => item.name === "1 месяц");
        const threeMonths = res.filter((item) => item.name === "3 месяца");
        const forever = res.filter((item) => item.name === "навсегда");
        setData({
          week: {
            name: week[0].name,
            defaultPrice:
              week.find((item) => !item.isPopular && !item.isDiscount)?.price ??
              0,
            discountedPrice: week.find((item) => item.isPopular)?.price ?? 0,
            biggerDiscountedPrice:
              week.find((item) => item.isDiscount)?.price ?? 0,
          },
          month: {
            name: month[0].name,
            defaultPrice:
              month.find((item) => !item.isPopular && !item.isDiscount)
                ?.price ?? 0,
            discountedPrice: month.find((item) => item.isPopular)?.price ?? 0,
            biggerDiscountedPrice:
              month.find((item) => item.isDiscount)?.price ?? 0,
          },
          threeMonths: {
            name: threeMonths[0].name,
            defaultPrice:
              threeMonths.find((item) => !item.isPopular && !item.isDiscount)
                ?.price ?? 0,
            discountedPrice:
              threeMonths.find((item) => item.isPopular)?.price ?? 0,
            biggerDiscountedPrice:
              threeMonths.find((item) => item.isDiscount)?.price ?? 0,
          },
          forever: {
            name: forever[0].name,
            defaultPrice:
              forever.find((item) => !item.isPopular && !item.isDiscount)
                ?.price ?? 0,
            discountedPrice: forever.find((item) => item.isPopular)?.price ?? 0,
            biggerDiscountedPrice:
              forever.find((item) => item.isDiscount)?.price ?? null,
          },
        });
      })
      .catch((err) => {
        console.error("Error status:", err);
      });
    //timer
    const timerId = setTimeout(function tick() {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(timerId);
        } else {
          return prev - 1;
        }
        return prev;
      });

      setTimeout(tick, 1000);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 1150);
    }
  }, [timer]);

  if (!data) {
    return null;
  }

  return (
    <>
      <header className="flex justify-center bg-white mb-[19px] p-header">
        <span className="block font-['pt-root-ui'] text-base self-center mr-[24px]">
          Скидка действует:
        </span>
        <Timer timeInSeconds={timer} />
      </header>
      <main className="px-[171px]">
        <h1 className="font-rubik text-heading text-center uppercase tracking-[0.01em] mb-[90px]">
          Выберите подходящий тарифный план
        </h1>
        <section className="flex gap-[79px]">
          <img src={man} alt="man" className="object-contain mb-img" />
          <Info
            data={data}
            timeInSeconds={timer}
            isBiggerDiscounts={isBiggerDiscounts}
          />
        </section>
      </main>
      {isModalOpen && (
        <Modal
          data={data}
          handleClose={() => setIsModalOpen(false)}
          handleButtonClick={() => setIsBiggerDiscount(true)}
          isBiggerDiscounts={isBiggerDiscounts}
        />
      )}
    </>
  );
}

export { App };
