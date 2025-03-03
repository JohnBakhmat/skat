import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useWindowSize";
import WhyItem from "./why-item";

export default function WhyBlock() {
  const [lastHovered, setLastHovered] = useState<number>(0);
  const [isManual, setManual] = useState(false);
  const isMobile = useIsMobile();

  const height = 200;

  const topOffest = lastHovered * height + lastHovered * 20;

  // if not hovered for more than 100ms, reset

  useEffect(() => {
    if (!isManual) {
      const interval = setInterval(() => {
        setLastHovered((prev) => (prev + 1) % 3);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isManual]);

  const handleHover = (idx: number) => {
    setLastHovered(idx);
    setManual(true);
    console.count();
  };

  return (
    <>
      <WhyItem
        idx="01"
        text={"С нами можно быть уверенными \n в успешной реализации \n мероприятия"}
        isActive={lastHovered === 0 || isMobile}
        onHover={() => handleHover(0)}
      />
      <WhyItem
        idx="02"
        text={"Мы передаем свое спокойствие \n всей команде проекта, как \n следствие – реализация без нервов \n и намека на хаос"}
        isActive={lastHovered === 1 && !isMobile}
        onHover={() => handleHover(1)}
      />
      <WhyItem
        idx="03"
        text={"Мы знаем все течения и куда \nнужно плыть"}
        isActive={lastHovered === 2 && !isMobile}
        onHover={() => handleHover(2)}
      />
    </>
  );
}
