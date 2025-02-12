interface Props {
	src?: string;
}

export const CaseImage = ({ src }: Props) => (
	<div className="rounded-[50px] overflow-hidden shadow-lg">
		<img
			className="w-full h-full object-cover"
			alt="case"
			src={
				src ??
				"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
			}
		/>
	</div>
);
