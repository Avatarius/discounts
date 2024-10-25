import { Timer } from "../timer/timer";
import man from "../../images/man.png";
import { useEffect, useState } from "react";
import { IData, IRate } from "../../utils/types";
import { Info } from "../info/info";
import { Modal } from "../modal/modal";

function App() {
  const [data, setData] = useState<IData | null>(null);
  const [timer, setTimer] = useState<number>(3);
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
      .then((res: IRate[]) => {
        const groupedObject = Object.groupBy(res, ({ name }) => name);
        const [week, month, threeMonths, forever] = (Object.values(groupedObject));
        setData({
          week: week ?? [],
          month: month ?? [],
          threeMonths: threeMonths ?? [],
          forever: forever ?? [],
        });
      })
      .catch((err) => {
        console.error("Error status:", err);
      });
      //timer
      const timerId = setTimeout(function tick() {
        // setTimeout()
        setTimer(prev => {
          if (prev === 0) {
            clearInterval(timerId);
          } else {
            return prev - 1;
          }
          return prev;
        });

        setTimeout(tick, 1000);
      }, 1000)
      return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
    }
  }, [timer])

  if (!data) {
    return null;
  }

  return (
    <>
      <header className="flex justify-center bg-white mb-[19px] p-header">
        <span className="block font-['pt-root-ui'] text-base self-center mr-[24px]">
          Скидка действует:
        </span>
        <Timer timeInSeconds={timer}/>
      </header>
      <main className="px-[171px]">
        <h1 className="font-rubik text-heading text-center uppercase tracking-[0.01em] mb-[90px]">
          Выберите подходящий тарифный план
        </h1>
        <section className="flex gap-[79px]">
          <img src={man} alt="man" className="object-contain mb-img"/>
          <Info data={data} timeInSeconds={timer} isBiggerDiscounts={isBiggerDiscounts}/>
        </section>
      </main>
      {isModalOpen && <Modal data={data} handleClose={() => setIsModalOpen(false)} handleButtonClick={() => setIsBiggerDiscount(true)}/>}

    </>
  );
}

export { App };
