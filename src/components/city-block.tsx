import { MapPin } from "./map-pin";
interface Props {
	cities: string[];
}

export const CityBlock = ({ cities }: Props) => (
	<div className="flex flex-col justify-end">
		<div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] place-items-center gap-x-5 gap-y-2 md:gap-y-5 md:gap-x-10 pb-5">
			<MapPin className="size-5 md:size-10" />

			<div className="flex flex-col gap-y-1 md:gap-y-2 row-span-2 justify-self-start text-lg md:text-4xl">
				{cities.map((x) => (
					<p key={x}>{x}</p>
				))}
			</div>
			<div className="h-full bg-white w-[2px]" />
		</div>
	</div>
);
