<template>
	<div class="fixed bottom-[6.0rem]  left-3 z-40 flex flex-col gap-y-3 md:bottom-5">
		<button class="floating-btn bg-[#d8b31f] hover:bg-amber-800 w-10 h-10" type="button" title="Bagikan" @click="isOpen = !isOpen">
			<span class="sr-only">Bagikan</span>
			<FontAwesomeIcon class="text-center" :icon="['fas', 'share-nodes']" />
		</button>
		<div :class="`absolute -z-10 flex h-full w-full flex-col items-center justify-center gap-y-3 transition-transform duration-200 ${isOpen ? 'bottom-[6.5rem] -translate-y-1/2' : 'bottom-0'}`">
			<a
				class="floating-btn w-10 h-10 bg-[#128C7E] text-center hover:bg-[#128C7E]/80 focus:bg-[#128C7E]/80 active:bg-[#128C7E]/80 dark:bg-[#128C7E] dark:hover:bg-[#128C7E]/80 dark:focus:bg-[#128C7E]/80 dark:active:bg-[#128C7E]/80"
				:href="`https://api.whatsapp.com/send?text=Undangan%20Pernikahan%20Lazuardi%20%26%20Emara%0A${appURL}`"
				target="_blank"
				rel="noopener noreferrer"
				title="Bagikan ke WhatsApp"
			>
				<span class="sr-only">Bagikan ke WhatsApp</span>
				<FontAwesomeIcon :icon="['fab', 'whatsapp']" inverse />
			</a>
			<a
				class="floating-btn w-10 h-10 bg-[#1DA1F2] text-center hover:bg-[#1DA1F2]/80 focus:bg-[#1DA1F2]/80 active:bg-[#1DA1F2]/80 dark:bg-[#1DA1F2] dark:hover:bg-[#1DA1F2]/80 dark:focus:bg-[#1DA1F2]/80 dark:active:bg-[#1DA1F2]/80"
				:href="`https://twitter.com/share?text=Undangan%20Pernikahan%20Lazuardi%20%26%20Emara%0A&url=${appURL}`"
				target="_blank"
				rel="noopener noreferrer"
				title="Bagikan ke Twitter"
			>
				<span class="sr-only">Bagikan ke Twitter</span>
				<FontAwesomeIcon :icon="['fab', 'twitter']" inverse />
			</a>
			<a
				class="floating-btn w-10 h-10 bg-[#1877F2] text-center hover:bg-[#1877F2]/80 focus:bg-[#1877F2]/80 active:bg-[#1877F2]/80 dark:bg-[#1877F2] dark:hover:bg-[#1877F2]/80 dark:focus:bg-[#1877F2]/80 dark:active:bg-[#1877F2]/80"
				:href="`https://www.facebook.com/sharer.php?u=${appURL}`"
				target="_blank"
				rel="noopener noreferrer"
				title="Bagikan ke Facebook"
			>
				<span class="sr-only">Bagikan ke Facebook</span>
				<FontAwesomeIcon :icon="['fab', 'facebook']" inverse />
			</a>
		</div>
		<button class="floating-btn bg-[#d8b31f] hover:bg-amber-800 w-10 h-10" type="button" :title="!isFullscreen ? 'Maximize' : 'Minimize'" @click="fullscreen">
			<span class="sr-only">{{ !isFullscreen ? 'Maximize' : 'Minimize' }}</span>
			<FontAwesomeIcon class="h-4 w-4" :icon="['fas', !isFullscreen ? 'maximize' : 'minimize']" />
		</button>
		<button class="floating-btn bg-[#d8b31f] hover:bg-amber-800 w-10 h-10" type="button" :title="!isAudioPlay ? 'Unmute BGM' : 'Mute BGM'" @click="handleBGM">
			<span class="sr-only">{{ !isAudioPlay ? 'Unmute BGM' : 'Mute BGM' }}</span>
			<FontAwesomeLayers class="!w-4">
				<FontAwesomeIcon :icon="['fas', 'music']" />
				<FontAwesomeIcon v-show="isAudioPlay" :icon="['fas', 'slash']" />
			</FontAwesomeLayers>
		</button>
	</div>
</template>

<script setup lang="ts">
	const {
		public: { appURL },
	} = useRuntimeConfig();
	const isFullscreen = ref(false);
	const isAudioPlay = ref(true);
	const isOpen = ref(false);

	const fullscreen = async () => {
		if (!document.fullscreenElement) {
			isFullscreen.value = true;
			await document.documentElement.requestFullscreen();
		} else {
			isFullscreen.value = false;
			await document.exitFullscreen();
		}
	};

	const handleBGM = () => {
		const audio = document.getElementById('audio') as HTMLAudioElement | null;

		if (!audio) return;

		audio.muted = !audio.muted;

		if (!audio.muted) {
			isAudioPlay.value = true;
		} else {
			isAudioPlay.value = false;
		}
	};
</script>
