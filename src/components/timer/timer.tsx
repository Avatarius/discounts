import clsx from "clsx";

function Timer() {
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
  return (
    <div className={containerClassList}>
      <span className="block text-timer-digits font-BebasNeue relative">
        09
        <span className="block text-timer-letters absolute inset-timer">
          минут
        </span>
      </span>
      <span className="block text-timer-digits font-BebasNeue relative">
        59
        <span className="block text-timer-letters absolute inset-timer">
          секунд
        </span>
      </span>
    </div>
  );
}
export { Timer };
