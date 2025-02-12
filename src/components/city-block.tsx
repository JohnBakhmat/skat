// import MapPin from "../assets/map-pin.svg";
interface Props {
	cities: string[];
}

export const CityBlock = ({ cities }: Props) => (
	<div className="flex flex-col justify-end">
		<div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] place-items-center gap-y-5 gap-x-10 pb-5">
			{/* <MapPin class="size-10" /> */}
			<div className="flex flex-col gap-y-2 row-span-2 justify-self-start text-4xl">
				{cities.map((x) => (
					<p key={x}>{x}</p>
				))}
			</div>
			<div className="h-full bg-white w-[2px]" />
		</div>
	</div>
);
