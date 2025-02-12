interface Props {
	src?: string;
	className?: string;
	imageClassName?: string;
}

export const CaseImage = ({ src, className, imageClassName }: Props) => (
	<div
		className={`rounded-[50px] overflow-hidden shadow-lg h-full w-full ${className}`}
	>
		<img
			className={`w-full h-full object-cover ${imageClassName}`}
			alt="case"
			src={
				src ??
				"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
			}
		/>
	</div>
);
