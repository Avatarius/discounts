import clsx from "clsx";

interface ITimerProps {
  timeInSeconds: number;
}

function Timer({timeInSeconds} : ITimerProps) {
  const containerClassList = clsx(
    "flex",
    "gap-[28px]",
    "relative",
    "before=''",
    "before:w-[5px]",
    "before:h-[5px]",
    "before:absolute",
    "before:inset-x-dots-x",
    "before:inset-y-dots-y-before",
    "before:bg-dots",
    "before:rounded-dots",
    "after=''",
    "after:bg-dots",
    "after:absolute",
    "after:w-[5px]",
    "after:h-[5px]",
    "after:inset-x-dots-x",
    "after:inset-y-dots-y-after",
    "after:rounded-dots"
  );
  const numberClassList = clsx("block" ,"text-timer-digits", "font-BebasNeue" ,"relative", timeInSeconds <= 30 && 'text-timer-completed-digits');
  const seconds = timeInSeconds % 60;
  const minutes = Math.floor((timeInSeconds % 3600) / 60);

  function padNumber(num: number) {
    return String(num).padStart(2, '0');
  }


  return (
    <div className={containerClassList}>
      <span className={numberClassList}>
        {padNumber(minutes)}
        <span className="block text-timer-letters absolute inset-timer">
          минут
        </span>
      </span>
      <span className={numberClassList}>
        {padNumber(seconds)}
        <span className="block text-timer-letters absolute inset-timer">
          секунд
        </span>
      </span>
    </div>
  );
}
export { Timer };
