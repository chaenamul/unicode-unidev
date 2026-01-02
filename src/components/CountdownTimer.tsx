import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="inline-flex bg-card rounded-lg px-4 py-4 md:px-8 md:py-6 shadow-md gap-1 md:gap-2">
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-primary font-mono w-12 md:w-16 text-center">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 w-12 md:w-16 text-center">
          DAYS
        </span>
      </div>
      <span className="text-3xl md:text-4xl font-bold text-muted-foreground font-mono">
        :
      </span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-primary font-mono w-12 md:w-16 text-center">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 w-12 md:w-16 text-center">
          HRS
        </span>
      </div>
      <span className="text-3xl md:text-4xl font-bold text-muted-foreground font-mono">
        :
      </span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-primary font-mono w-12 md:w-16 text-center">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 w-12 md:w-16 text-center">
          MINS
        </span>
      </div>
      <span className="text-3xl md:text-4xl font-bold text-muted-foreground font-mono">
        :
      </span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-primary font-mono w-12 md:w-16 text-center">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 w-12 md:w-16 text-center">
          SECS
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
