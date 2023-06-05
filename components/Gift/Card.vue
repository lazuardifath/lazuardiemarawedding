<template>
	<div class="w-full rounded-2xl border border-gray-800 bg-gradient-to-r from-amber-100 to-amber-300 p-8 dark:border-slate-800 md:w-96">
		<div class="flex justify-end">
			<BCALogo class="h-8 w-20 md:w-24" />
		</div>
		<div class="space-y-3 pt-3 md:pt-5">
			<hr class="border-slate-600" />
			<span class="block text-amber-100 bg-cyan-900 text-center p-2 rounded-lg text-sm font-bold uppercase tracking-[0.3em] md:text-base">Lazuardi Fatahilah H</span>
			<span class="block text-blue-900 text-sm font-bold uppercase tracking-[0.3em] md:text-base">186101000601504</span>
			<button id="btnGift" class="flex w-full items-center justify-center rounded bg-blue-800 px-4 py-1.5 text-sm text-white md:text-base" type="button" @click="copy('186101000601504')" title="Salin ke Clipboard">
				<FontAwesomeIcon :icon="['fas', 'copy']" />
				<span id="btnGiftText" class="flex-1">Salin</span>
			</button>
		</div>
	</div>
	<div class="w-full rounded-2xl border border-gray-800 bg-gradient-to-r from-amber-100 to-amber-300 p-8 dark:border-slate-800 md:w-96">
		<div class="flex justify-end">
			<BCALogo class="h-8 w-20 md:w-24" />
		</div>
		<div class="space-y-3 pt-3 md:pt-5">
			<hr class="border-slate-600" />
			<span class="block text-amber-100 bg-cyan-900 text-center p-2 rounded-lg text-sm font-bold uppercase tracking-[0.3em] md:text-base">Emara Najla Medina</span>
			<span class="block text-blue-900 text-sm font-bold uppercase tracking-[0.3em] md:text-base">344301028371535</span>
			<button id="btnGift" class="flex w-full items-center justify-center rounded bg-blue-800 px-4 py-1.5 text-sm text-white md:text-base" type="button" @click="copy('344301028371535')" title="Salin ke Clipboard">
				<FontAwesomeIcon :icon="['fas', 'copy']" />
				<span id="btnGiftText" class="flex-1">Salin</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	const copy = async (text: string) => {
		const btnGift = document.getElementById('btnGift');

		if (!btnGift) return;

		const btnGiftText = btnGift.lastElementChild;

		if (!btnGiftText) return;

		await navigator.clipboard.writeText(text);

		btnGift.setAttribute('title', 'Berhasil disalin');
		btnGiftText.innerHTML = 'Berhasil disalin';

		setTimeout(() => {
			btnGift.setAttribute('title', 'Salin ke Clipboard');
			btnGiftText.innerHTML = 'Salin';
		}, 3000);
	};
</script>
