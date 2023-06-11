<template>
	<div class="fixed bottom-[7rem] right-5 lg:right-8 z-40 flex flex-col gap-y-2 md:bottom-5">
		<button :class="`bg-[#d8b31f] floating-btn ${scroll}`" id="backToTop" type="button" title="Kembali ke Atas" @click="back">
			<span class="sr-only">Kembali ke Atas</span>
			<FontAwesomeIcon class="h-5 w-5" :icon="['fas', 'arrow-up']" />
		</button>
	</div>
	<div class="fixed top-[1.0rem] right-5 lg:right-8 z-20 flex flex-col gap-y-2 md:bottom-5">
		<Listbox v-model="$colorMode.preference">
			<ListboxButton class="floating-btn" :title="`Mode aktif: ${currentThemeName}`">
				<span class="sr-only">Tema</span>
				<FontAwesomeIcon class="h-5 w-5" :icon="['fas', currentThemeColor]" />
			</ListboxButton>
			<ListboxOptions class="space-y-4">
				<ListboxOption class="floating-btn ui-active:bg-blue-500" :title="theme.name" v-for="theme in themes.filter((theme) => theme.value !== $colorMode.preference)" :key="theme.id" :value="theme.value">
					<FontAwesomeIcon class="h-5 w-5" :icon="['fas', theme.icon]" />
				</ListboxOption>
			</ListboxOptions>
		</Listbox>
	</div>
</template>

<script setup lang="ts">
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';

	const scroll = ref('hidden');
	const colorMode = useColorMode();
	const themes: Theme[] = [
		{ id: 0, name: 'Mode Gelap', value: 'dark', icon: 'moon' },
		{ id: 1, name: 'Mode Terang', value: 'light', icon: 'circle-half-stroke' },
	];

	onMounted(() => window.addEventListener('scroll', show));

	onBeforeUnmount(() => window.removeEventListener('scroll', show));

	const currentThemeColor = computed(() => (colorMode.preference === 'system' ? 'Sistem' : colorMode.value === 'dark' ? 'moon' : 'circle-half-stroke'));
	const currentThemeName = computed(() => (colorMode.preference === 'system' ? 'desktop' : colorMode.value === 'dark' ? 'Gelap' : 'Terang'));

	const show = () => {
		const button = document.getElementById('backToTop');

		if (!button) return;

		if (window.scrollY > 500) {
			scroll.value = '';
		} else {
			scroll.value = 'hidden';
		}
	};

	const back = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
