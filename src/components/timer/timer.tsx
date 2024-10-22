function Timer() {
  return (
    <div className="flex gap-[28px]">
      <span className="block text-timer-digits font-BebasNeue relative">
        09<span className="block text-timer-letters absolute inset-timer">минут</span>
      </span>
      <span className="block text-timer-digits font-BebasNeue relative">
        59<span className="block text-timer-letters absolute inset-timer">секунд</span>
      </span>
    </div>
  );
}
export { Timer };
