<template>
	<div class="overflow-y-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-slate-800 dark:scrollbar-thumb-gray-100">
		<span class="block text-center text-xs font-semibold text-gray-200 dark:text-gray-500" v-if="!wishes.length">Jadilah yang pertama untuk mengucapkan do'a kepada kedua mempelai.</span>
		<div class="max-h-44 w-full divide-y pr-4" v-else>
			<div class="flex items-center justify-center overflow-hidden" v-if="loading">
				<Loader class="mr-3 -ml-1 h-8 w-8" />
			</div>
			<div class="flex gap-x-5 border-gray-200 py-4 pl-4 hover:bg-stone-500/50 dark:border-slate-600 dark:hover:bg-gray-300/50" v-for="wish in wishes" :key="wish.id" v-else>
				<div class="flex-1">
					<div class="flex items-center gap-x-2">
						<h2 class="break-all text-xs font-bold text-gray-200 md:text-base dark:text-amber-800">{{ wish.name }}</h2>
					</div>
					<p class="text-xs pt-2.5 font-semibold md:text-sm text-amber-100 dark:text-gray-700">
						"{{ wish.message }}"
					</p>
					<div class="text-[13px] py-1.5">
						<span class="text-xs pr-1 text-gray-200 dark:text-gray-500" v-if="wish.attendance === 'Tidak Hadir'">Tidak Hadir <FontAwesomeIcon class="text-red-500" :icon="['fas', 'circle-xmark']" size="xs" /></span>
						<span class="text-xs pr-1 text-gray-200 dark:text-gray-500" v-else>Hadir <FontAwesomeIcon class="text-green-500" :icon="['fas', 'circle-check']" size="xs"/></span><span class="text-xs pr-2 text-gray-200 dark:text-gray-500">· {{ formatDate(wish.createdAt) }}</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import moment, { MomentInput } from 'moment';

	moment.updateLocale('en', {
		relativeTime: {
				future: "in %s",
				past:   "%s yang lalu",
				s:  "detik",
				m:  "1 menit",
				mm: "%d menit",
				h:  "1 jam",
				hh: "%d jam",
				d:  "1 hari",
				dd: "%d hari",
				M:  "1 bulan",
				MM: "%d bulan",
				y:  "1 tahun",
				yy: "%d tahun"
		}
	});

	const { wishes, loading } = defineProps<{ wishes: Wish[]; loading: boolean }>();
	
	const formatDate = (date: MomentInput) => moment(date).fromNow();
</script>
