import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaseImage } from "./case-image";
import { CityBlock } from "./city-block";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function CaseSection() {
	return (
		<section className="max-md:hidden min-h-screen">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true, type: "bullets" }}
				navigation
				className="max-h-screen"
			>
				<SwiperSlide>
					<section className="w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<h1 className="uppercase text-3xl md:text-7xl font-light">
									Альфа конфа практика
								</h1>
							</div>
							<CaseImage src="/alfa-conf-2.webp" />

							<div className="text-8xl text-vertical">
								20<span className="text-accent">24</span>
							</div>

							<CityBlock
								cities={[
									"Санкт-Петербург",
									"Ижевск",
									"Новокузнецк",
									"Астрахань",
									"Ставраполь",
									"Тольятти",
									"Ростов-на-Дону",
								]}
							/>
							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/alfa-conf-3.webp" />
								<CaseImage src="/alfa-conf-4.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>

				<SwiperSlide>
					<section className="w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<div className="space-y-5">
									<h1 className="uppercase text-3xl md:text-7xl font-light">
										Яндекс маркет «15 минут»
									</h1>
									<h2 className="text-5xl text-secondary">Летняя интеграция</h2>
								</div>
							</div>
							<CaseImage src="/yandex-market-1.webp" />

							<div className="text-8xl text-vertical">
								20<span className="text-accent">23</span>
							</div>

							<CityBlock
								cities={[
									"Нижний Новгород",
									"Ростов-на-Дону",
									"Екатеринбург",
									"Казань",
									"Краснодар",
								]}
							/>

							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/yandex-market-2.webp" />
								<CaseImage src="/yandex-market-3.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>

				<SwiperSlide>
					<section className=" w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<h1 className="uppercase text-4xl md:text-8xl font-light">
									Спартакиада моспром
								</h1>
							</div>
							<CaseImage src="/sportakiada-1.webp" />

							<div className="text-8xl text-vertical">
								20<span className="text-accent">23</span>
							</div>

							<CaseImage src="/sportakiada-2.webp" />
							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/sportakiada-3.webp" />
								<CaseImage src="/sportakiada-4.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>

				<SwiperSlide>
					<section className=" w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<div>
									<h1 className="uppercase text-4xl md:text-8xl font-light">
										SMARTWAY
									</h1>
									<h2 className="text-5xl text-secondary">Летний корпоратив</h2>
								</div>
							</div>
							<CaseImage src="/smartway-1.webp" />

							<div className="text-8xl text-vertical">
								20<span className="text-accent">23</span>
							</div>

							<CaseImage src="/smartway-2.webp" />
							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/smartway-3.webp" />
								<CaseImage src="/smartway-4.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>

				<SwiperSlide>
					<section className=" w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<div>
									<h1 className="uppercase text-4xl md:text-8xl font-light">
										IT-Каток
									</h1>
									<h2 className="text-5xl text-secondary">Серия мероприятий</h2>
								</div>
							</div>
							<CaseImage src="/it-katok-1.webp" />

							<div className="text-8xl text-vertical row-span-2">
								20<span className="text-accent">22</span>- 20
								<span className="text-accent">23</span>
							</div>

							<CaseImage src="/it-katok-2.webp" />
							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/it-katok-3.webp" />
								<CaseImage src="/it-katok-4.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>

				<SwiperSlide>
					<section className=" w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<div>
									<h1 className="uppercase text-4xl md:text-8xl font-light">
										Yandex Scale
									</h1>
									<h2 className="text-5xl text-secondary">
										Ежегодняя конференция
									</h2>
								</div>
							</div>
							<CaseImage src="/yandex-scale-2.webp" />

							<div className="text-8xl text-vertical">
								20<span className="text-accent">22</span>
							</div>

							<CaseImage src="/yandex-scale-3.webp" />
							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/yandex-scale-4.webp" />
								<CaseImage src="/yandex-scale-5.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>

				<SwiperSlide>
					<section className=" w-full text-white grid place-items-center">
						<div className="w-full max-h-screen py-10 gap-10 grid grid-cols-[3fr_4fr_auto] grid-rows-2">
							<div className="flex flex-col justify-between">
								<div className="w-fit border-(1 white) p-(x-5 y-2) md:p-(x-10 y-4) rounded-full group md:text-5xl flex flex-row text-2xl">
									<p>Кейсы</p>
								</div>

								<div>
									<h1 className="uppercase text-4xl md:text-8xl font-light">
										Атланты
									</h1>
									<h2 className="text-5xl text-secondary">Бизнес-форум</h2>
								</div>
							</div>
							<CaseImage src="/atlants-1.webp" />

							<div className="text-8xl text-vertical">
								20<span className="text-accent">19</span>
							</div>

							<CaseImage src="/atlants-2.webp" />
							<div className="grid grid-cols-[2fr_1fr] gap-10">
								<CaseImage src="/atlants-3.webp" />
								<CaseImage src="/atlants-4.webp" />
							</div>
						</div>
					</section>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
