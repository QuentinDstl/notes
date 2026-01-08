<script lang="ts">
	let rotateX = 0;
	let rotateY = 0;
	let selectedGame: keyof typeof popupRules | null = null;
	let hoveredGame: string | null = null;

	const popupRules = {
		tarot: {
			name: 'Tarot',
			rules:
				'Le tarot est un jeu de cartes avec 78 cartes divisées en arcanes majeurs et mineurs. Les joueurs interprètent les cartes pour obtenir des insights.'
		},
		sixqp: {
			name: 'Six qui prend',
			rules:
				'Un jeu où les joueurs posent des cartes numérotées. Si votre carte fait que la ligne atteint 6 cartes, vous devez en prendre une. Évitez les cartes avec beaucoup de têtes de bœuf!'
		},
		skyjo: {
			name: 'Skyjo',
			rules:
				"Un jeu de cartes où vous essayez d'avoir le plus petit score possible. Retournez ou remplacez vos cartes pour minimiser votre total."
		},
		oriLg: {
			name: 'Origine Large',
			rules: 'Les règles du jeu Origine Large.'
		},
		codeNames: {
			name: 'Codenames',
			rules:
				'Un jeu de mots où une équipe donne des indices pour faire deviner des mots secrets. Évitez les pièges!'
		}
	};

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

	function showRules(game: string) {
		selectedGame = game as keyof typeof popupRules;
	}

	function closePopup() {
		selectedGame = null;
	}

	function handleKeyDown(event: KeyboardEvent, game: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			showRules(game);
		}
	}

	function handlePopupKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closePopup();
		}
	}

	function handleGameHover(game: string) {
		hoveredGame = game;
	}

	function handleGameLeave() {
		hoveredGame = null;
	}
</script>

<svelte:head>
	<title>Règles</title>
	<meta name="description" content="Règles page" />
</svelte:head>

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
				on:click={() => showRules('tarot')}
				on:keydown={(e) => handleKeyDown(e, 'tarot')}
				on:mouseenter={() => handleGameHover('tarot')}
				on:mouseleave={handleGameLeave}
			></div>
			<div
				class="sixqp"
				class:hovered={hoveredGame === 'sixqp'}
				role="button"
				tabindex="0"
				on:click={() => showRules('sixqp')}
				on:keydown={(e) => handleKeyDown(e, 'sixqp')}
				on:mouseenter={() => handleGameHover('sixqp')}
				on:mouseleave={handleGameLeave}
			></div>
			<div
				class="skyjo"
				class:hovered={hoveredGame === 'skyjo'}
				role="button"
				tabindex="0"
				on:click={() => showRules('skyjo')}
				on:keydown={(e) => handleKeyDown(e, 'skyjo')}
				on:mouseenter={() => handleGameHover('skyjo')}
				on:mouseleave={handleGameLeave}
			></div>
		</div>
		<div class="card-mid">
			<div
				class="codenames-words"
				class:hovered={hoveredGame === 'codeNames'}
				role="button"
				tabindex="0"
				on:click={() => showRules('codeNames')}
				on:keydown={(e) => handleKeyDown(e, 'codeNames')}
				on:mouseenter={() => handleGameHover('codeNames')}
				on:mouseleave={handleGameLeave}
			></div>
			<div class="middle-space">
				<div
					class="ori-lg"
					class:hovered={hoveredGame === 'oriLg'}
					role="button"
					tabindex="0"
					on:click={() => showRules('oriLg')}
					on:keydown={(e) => handleKeyDown(e, 'oriLg')}
					on:mouseenter={() => handleGameHover('oriLg')}
					on:mouseleave={handleGameLeave}
				></div>
				<div
					class="codenames-map"
					class:hovered={hoveredGame === 'codeNames'}
					role="button"
					tabindex="0"
					on:click={() => showRules('codeNames')}
					on:keydown={(e) => handleKeyDown(e, 'codeNames')}
					on:mouseenter={() => handleGameHover('codeNames')}
					on:mouseleave={handleGameLeave}
				></div>
			</div>
			<div
				class="codenames-words"
				class:hovered={hoveredGame === 'codeNames'}
				role="button"
				tabindex="0"
				on:click={() => showRules('codeNames')}
				on:keydown={(e) => handleKeyDown(e, 'codeNames')}
				on:mouseenter={() => handleGameHover('codeNames')}
				on:mouseleave={handleGameLeave}
			></div>
		</div>
		<div class="card-top inverted">
			<div
				class="tarot"
				class:hovered={hoveredGame === 'tarot'}
				role="button"
				tabindex="0"
				on:click={() => showRules('tarot')}
				on:keydown={(e) => handleKeyDown(e, 'tarot')}
				on:mouseenter={() => handleGameHover('tarot')}
				on:mouseleave={handleGameLeave}
			></div>
			<div
				class="sixqp"
				class:hovered={hoveredGame === 'sixqp'}
				role="button"
				tabindex="0"
				on:click={() => showRules('sixqp')}
				on:keydown={(e) => handleKeyDown(e, 'sixqp')}
				on:mouseenter={() => handleGameHover('sixqp')}
				on:mouseleave={handleGameLeave}
			></div>
			<div
				class="skyjo"
				class:hovered={hoveredGame === 'skyjo'}
				role="button"
				tabindex="0"
				on:click={() => showRules('skyjo')}
				on:keydown={(e) => handleKeyDown(e, 'skyjo')}
				on:mouseenter={() => handleGameHover('skyjo')}
				on:mouseleave={handleGameLeave}
			></div>
		</div>
	</div>
</div>

{#if selectedGame}
	<div
		class="popup-overlay"
		role="button"
		tabindex="0"
		on:click={closePopup}
		on:keydown={handlePopupKeyDown}
	>
		<div
			class="popup-rules"
			role="dialog"
			tabindex="-1"
			on:click={(e) => e.stopPropagation()}
			on:keydown={(e) => e.stopPropagation()}
		>
			<div class="popup-header">
				<h2>{popupRules[selectedGame].name}</h2>
				<button class="close-btn" on:click={closePopup}>×</button>
			</div>
			<div class="popup-content">
				<p>{popupRules[selectedGame].rules}</p>
			</div>
		</div>
	</div>
{/if}

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
		height: 321px;
		background-color: #ebebeb;
		border-radius: 14px;
		border: 11px solid white;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 4px;
		transition: transform 125ms ease-in-out;
	}

	.card-top {
		height: 48px;
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
			filter 100ms ease-in-out;
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
		transform: scale(1.05);
		filter: brightness(1.1);
	}

	.tarot {
		width: 48px;
		height: 48px;
		background-color: #fddc69;
		border-radius: 3px;
	}

	.sixqp {
		flex: 1;
		height: 36px;
		background-color: #ffafd2;
		border-radius: 3px;
	}

	.inverted {
		transform: rotate(180deg);
	}

	.skyjo {
		width: 48px;
		height: 48px;
		background-color: #6fdc8c;
		border-radius: 3px;
	}

	.codenames-words {
		width: 36px;
		border-radius: 3px;
		background-color: #a6c8ff;
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
		width: 92px;
		height: 48px;
		background-color: #c084fc;
		border-radius: 3px;
	}

	.codenames-map {
		width: 92px;
		height: 92px;
		background-color: #a6c8ff;
		border-radius: 3px;
	}

	/* Popup styles */
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		animation: fadeIn 200ms ease-in-out;
	}

	.popup-rules {
		background-color: white;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
		max-width: 500px;
		width: 90%;
		max-height: 80vh;
		overflow-y: auto;
		animation: slideUp 300ms ease-in-out;
	}

	.popup-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border-bottom: 2px solid #f0f0f0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 12px 12px 0 0;
	}

	.popup-header h2 {
		margin: 0;
		color: white;
		font-size: 24px;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 32px;
		color: white;
		cursor: pointer;
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 100ms ease-in-out;
	}

	.close-btn:hover {
		transform: scale(1.2);
	}

	.popup-content {
		padding: 20px;
		color: #333;
		line-height: 1.6;
		font-size: 16px;
	}

	.popup-content p {
		margin: 0;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
