<template>
	<section class="h-[51rem] md:h-[47rem] lg:h-[51rem] bgges2 dark:bgges" id="about">
		<div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
		<div class="flex flex-col items-center justify-center gap-y-4 text-center z-10 md:gap-y-4 lg:gap-y-4">
				<h2 class="poppin text-sm font-semibold z-10 uppercase tracking-widest text-slate-600 dark:text-gray-100 mt-10 md:text-xl">Pernikahan</h2>
				<h2 class="font-body text-4xl text-yellow-800 z-10 dark:text-yellow-300/90 md:text-6xl lg:text-7xl"><span>Lazuardi & Emara</span></h2>
				<h2 class="poppin text-sm font-semibold uppercase z-10 tracking-widest text-slate-600 dark:text-gray-100 md:text-xl">Sabtu, 01 Juli 2023</h2>
				<add-to-calendar-button
					name="Lazuardi & Emara Wedding Day!"
					description="Lazuardi & Emara Wedding Day!"
					startDate="2023-07-01"
					startTime="11:00"
					endDate="2023-07-01"
					endTime="14:00"
					timeZone="Asia/Jakarta"
					location="Gedung KORPRI, Jl. DR. Soetomo No.2, Prenam, Dukuhwringin, Kec. Slawi, Kabupaten Tegal, Jawa Tengah"
					options="'Apple','Google','iCal'"
					buttonStyle="3d"
			></add-to-calendar-button>
		</div>
		<div class="flex h-[30rem] mt-3 md:mt-0 md:pb-10 flex-col-reverse items-center z-10 justify-end gap-x-4 gap-y-3 pt-1 md:mx-auto md:max-w-2xl md:flex-row md:justify-center md:gap-y-0 md:pt-0 lg:max-w-full">
			<div class="breathe h-52 w-80 overflow-hidden z-10 rounded-3xl border-4 border-yellow-800 dark:border-yellow-500 md:h-80 md:w-[32rem]">
				<Swiper class="h-full w-full" :modules="[SwiperAutoplay, SwiperEffectFade]" :slidesPerView="1" :loop="true" effect="fade" :autoplay="{ delay: 5000, disableOnInteraction: true }">
					<SwiperSlide v-for="slide in 5" :key="slide">
						<img class="h-full w-full overflow-hidden object-cover object-center" :src="`/images/about${slide}.jpg`" :alt="`Bride Image ${slide}`" loading="lazy" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
<script>
export default {
  //...
  mounted() {
    const recaptchaScript2 = document.createElement("script");
    recaptchaScript2.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
    );
    document.head.appendChild(recaptchaScript2);
  },
  //...
};
</script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">