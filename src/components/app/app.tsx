import { Timer } from "../timer/timer";
import man from "../../images/man.png";
import { Card } from "../card/card";
import { useEffect, useState } from "react";
import { IData, IRate } from "../../utils/types";

function App() {
  const [data, setData] = useState<IData | null>(null);
  useEffect(() => {
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
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <header className="flex justify-center bg-white mb-[17px] p-header">
        <span className="block font-['pt-root-ui'] text-base self-center mr-[24px]">
          Скидка действует:
        </span>
        <Timer />
      </header>
      <main className="px-[171px]">
        <h1 className="font-rubik text-heading text-center uppercase tracking-[0.01em] mb-[90px]">
          Выберите подходящий тарифный план
        </h1>
        <section className="flex gap-[79px]">
          <img src={man} alt="man" />
          <div className="grid grid-cols-3 content-start gap-x-[12px] grow">
            <Card data={data.week} description="Чтобы просто начать 👍🏻"/>
            <Card data={data.month} description="Привести тело впорядок 💪🏻"/>
            <Card data={data.threeMonths} description="Изменить образ жизни 🔥"/>
            <Card data={data.forever} description="Всегда быть в форме и поддерживать своё здоровье ⭐️" isHorizontal={true}/>
          </div>
        </section>
      </main>
    </>
  );
}

export { App };
