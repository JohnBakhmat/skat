type Props = {
	idx: string;
	text: string;
	isActive?: boolean;
	onHover?: () => void;
};
export default function WhyItem({ idx, text, isActive, onHover }: Props) {
	return (
		<div
			onMouseOver={() => onHover?.()}
			onFocus={() => onHover?.()}
			className="grid grid-cols-subgrid items-center col-span-2 group px-10 py-3 rounded-3xl transition-all duration-150 ease-in-out"
		>
			<p
				data-active={!!isActive}
				className="text-[75px] md:text-[150px] font-logo data-[active=true]:text-accent"
			>
				{idx}
			</p>
			<p
				data-active={!!isActive}
				className="data-[active=true]:text-black font-open-sans"
			>
				{text}
			</p>
		</div>
	);
}
