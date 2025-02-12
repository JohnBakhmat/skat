import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useWindowSize";
import WhyItem from "./why-item";

export default function WhyBlock() {
	const [lastHovered, setLastHovered] = useState<number>(0);
	const [isManual, setManual] = useState(false);
	const isMobile = useIsMobile();

	const topOffest = lastHovered * 175 + lastHovered * 20;

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
				text={"С нами можно\nбыть спокойным за проект"}
				isActive={lastHovered === 0 && !isMobile}
				onHover={() => handleHover(0)}
			/>
			<WhyItem
				idx="02"
				text={"Мы заряжаем своей\nэнергией всех вокруг"}
				isActive={lastHovered === 1 && !isMobile}
				onHover={() => handleHover(1)}
			/>
			<WhyItem
				idx="03"
				text={"Мы знаем все течения\nи куда нужно плыть"}
				isActive={lastHovered === 2 && !isMobile}
				onHover={() => handleHover(2)}
			/>
			<div
				hidden={isMobile}
				style={{ top: `${topOffest}px` }}
				className="left-0 right-0 top-0 h-[175px] col-span-full transition-all duration-150 rounded-3xl bg-white absolute -z-20 row-span-full"
			/>
		</>
	);
}
