<template>
	<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
		<defs>
		<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
		</defs>
		
		<g class="parallax">
		<use xlink:href="#gentle-wave" id="wave1" x="48" y="0" fill="rgba(11, 36, 71, 0.7)"  />
		<use xlink:href="#gentle-wave" id="wave2" x="48" y="3" fill="rgba(11, 36, 71, 0.5)"  />
		<use xlink:href="#gentle-wave" id="wave3" x="48" y="5" fill="rgba(11, 36, 71, 0.3)"  />
		<use xlink:href="#gentle-wave" id="wave4" x="48" y="7" fill="rgb(11, 36, 71)" />
		</g>
	</svg>
</template>

<script setup lang="ts"></script>
