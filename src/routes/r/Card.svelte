<script lang="ts">
	import TarotIcon from './icons/TarotIcon.svelte';
	import SkyjoIcon from './icons/SkyjoIcon.svelte';
	import SixquiprendIcon from './icons/SixquiprendIcon.svelte';
	import CodenamesWordsIcon from './icons/CodenamesWordsIcon.svelte';
	import CodenamesMidIcon from './icons/CodenamesMidIcon.svelte';
	import OriLgIcon from './icons/OriLgIcon.svelte';

	export let hoveredGame: string | null;
	export let onGameHover: (game: string) => void;
	export let onGameLeave: () => void;
	export let onShowRules: (game: string) => void;

	let rotateX = 0;
	let rotateY = 0;

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		rotateY = ((x - centerX) / centerX) * 15;
		rotateX = ((centerY - y) / centerY) * 15;
	}

	function handleMouseLeave() {
		rotateX = 0;
		rotateY = 0;
	}

	function handleKeyDown(event: KeyboardEvent, game: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onShowRules(game);
		}
	}
</script>

<div
	class="wrapper"
	role="application"
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
>
	<div
		class="card"
		style="transform: perspective(800px) rotateX({rotateX}deg) rotateY({rotateY}deg)"
	>
		<div class="card-top">
			<div
				class="tarot"
				class:hovered={hoveredGame === 'tarot'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('tarot')}
				on:keydown={(e) => handleKeyDown(e, 'tarot')}
				on:mouseenter={() => onGameHover('tarot')}
				on:mouseleave={onGameLeave}
			>
				<TarotIcon width="45" height="45" />
			</div>
			<div
				class="sixqp"
				class:hovered={hoveredGame === 'sixqp'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('sixqp')}
				on:keydown={(e) => handleKeyDown(e, 'sixqp')}
				on:mouseenter={() => onGameHover('sixqp')}
				on:mouseleave={onGameLeave}
			>
				<SixquiprendIcon width="99" height="36" />
			</div>
			<div
				class="skyjo"
				class:hovered={hoveredGame === 'skyjo'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('skyjo')}
				on:keydown={(e) => handleKeyDown(e, 'skyjo')}
				on:mouseenter={() => onGameHover('skyjo')}
				on:mouseleave={onGameLeave}
			>
				<SkyjoIcon width="45" height="45" />
			</div>
		</div>
		<div class="card-mid">
			<div
				class="codenames-words"
				class:hovered={hoveredGame === 'codeNames'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('codeNames')}
				on:keydown={(e) => handleKeyDown(e, 'codeNames')}
				on:mouseenter={() => onGameHover('codeNames')}
				on:mouseleave={onGameLeave}
			>
				<CodenamesWordsIcon width="36" height="193" />
			</div>
			<div class="middle-space">
				<div
					class="ori-lg"
					class:hovered={hoveredGame === 'oriLg'}
					role="button"
					tabindex="0"
					on:click={() => onShowRules('oriLg')}
					on:keydown={(e) => handleKeyDown(e, 'oriLg')}
					on:mouseenter={() => onGameHover('oriLg')}
					on:mouseleave={onGameLeave}
				>
					<OriLgIcon width="92" height="48" />
				</div>
				<div
					class="codenames-map"
					class:hovered={hoveredGame === 'codeNames'}
					role="button"
					tabindex="0"
					on:click={() => onShowRules('codeNames')}
					on:keydown={(e) => handleKeyDown(e, 'codeNames')}
					on:mouseenter={() => onGameHover('codeNames')}
					on:mouseleave={onGameLeave}
				>
					<CodenamesMidIcon width="92" height="92" />
				</div>
			</div>
			<div
				class="codenames-words"
				class:hovered={hoveredGame === 'codeNames'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('codeNames')}
				on:keydown={(e) => handleKeyDown(e, 'codeNames')}
				on:mouseenter={() => onGameHover('codeNames')}
				on:mouseleave={onGameLeave}
			>
				<CodenamesWordsIcon width="36" height="193" />
			</div>
		</div>
		<div class="card-top inverted">
			<div
				class="tarot"
				class:hovered={hoveredGame === 'tarot'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('tarot')}
				on:keydown={(e) => handleKeyDown(e, 'tarot')}
				on:mouseenter={() => onGameHover('tarot')}
				on:mouseleave={onGameLeave}
			>
				<div style="transform: rotate(180deg);">
					<TarotIcon width="45" height="45" />
				</div>
			</div>
			<div
				class="sixqp"
				class:hovered={hoveredGame === 'sixqp'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('sixqp')}
				on:keydown={(e) => handleKeyDown(e, 'sixqp')}
				on:mouseenter={() => onGameHover('sixqp')}
				on:mouseleave={onGameLeave}
			>
				<SixquiprendIcon width="99" height="36" />
			</div>
			<div
				class="skyjo"
				class:hovered={hoveredGame === 'skyjo'}
				role="button"
				tabindex="0"
				on:click={() => onShowRules('skyjo')}
				on:keydown={(e) => handleKeyDown(e, 'skyjo')}
				on:mouseenter={() => onGameHover('skyjo')}
				on:mouseleave={onGameLeave}
			>
				<div style="transform: rotate(180deg);">
					<SkyjoIcon width="45" height="45" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		flex: 1;
	}

	.card {
		width: 205px;
		height: 299px;
		background-image: url('/fond.png');
		background-size: cover;
		background-position: center;
		border-radius: 14px;
		border: 11px solid white;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 4px;
		transition: transform 125ms ease-in-out;
	}

	.card-top {
		height: 45px;
		display: flex;
		padding: 4px 4px 0 4px;
		gap: 4px;
	}

	.card-mid {
		flex: 1;
		display: flex;
		gap: 4px;
		padding: 0 4px 0 4px;
	}

	.tarot,
	.sixqp,
	.skyjo,
	.ori-lg,
	.codenames-words,
	.codenames-map {
		cursor: pointer;
		transition:
			transform 100ms ease-in-out,
			box-shadow 100ms ease-in-out;
		position: relative;
		overflow: hidden;
	}

	.tarot::after,
	.sixqp::after,
	.skyjo::after,
	.ori-lg::after,
	.codenames-words::after,
	.codenames-map::after {
		content: '';
		position: absolute;
		top: -100px;
		left: -75px;
		width: 50px;
		height: 350px;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		opacity: 0.3;
		transform: rotate(35deg);
		z-index: 10;
		animation: metallic-sweep 1.5s ease-in-out infinite;
	}

	.tarot:hover,
	.sixqp:hover,
	.skyjo:hover,
	.ori-lg:hover,
	.codenames-words:hover,
	.codenames-map:hover,
	.tarot.hovered,
	.sixqp.hovered,
	.skyjo.hovered,
	.ori-lg.hovered,
	.codenames-words.hovered,
	.codenames-map.hovered {
		transform: translateY(-8px);
		box-shadow: 0 12px 16px rgba(0, 0, 0, 0.3);
	}

	@keyframes metallic-sweep {
		0% {
			left: -75px;
			opacity: 0.3;
		}
		50% {
			opacity: 0.6;
		}
		100% {
			left: 400px;
			opacity: 0.3;
		}
	}

	.tarot {
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
	}

	.sixqp {
		flex: 1;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
	}

	.inverted {
		flex-direction: row-reverse;
		align-items: flex-end;
		padding: 0 4px 4px 4px;
	}

	.skyjo {
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
	}

	.codenames-words {
		width: 36px;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.5);
	}

	.middle-space {
		flex: 1;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.ori-lg {
		width: 102px;
		height: 60px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.codenames-map {
		width: 92px;
		height: 92px;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
