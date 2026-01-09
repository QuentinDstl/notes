<script lang="ts">
	import Card from './Card.svelte';
	import Popup from './Popup.svelte';
	import tarotRules from './rules/tarot.md?raw';
	import sixqpRules from './rules/sixqp.md?raw';
	import skyjoRules from './rules/skyjo.md?raw';
	import oriFlameRules from './rules/oriFlame.md?raw';
	import loupGarouRules from './rules/loupGarou.md?raw';
	import codeNamesRules from './rules/codeNames.md?raw';

	let selectedGame: string | null = null;
	let hoveredGame: string | null = null;

	const popupRules = {
		tarot: {
			name: 'Tarot',
			rules: tarotRules
		},
		sixqp: {
			name: 'Six qui prend',
			rules: sixqpRules
		},
		skyjo: {
			name: 'Skyjo',
			rules: skyjoRules
		},
		oriLg: {
			name: 'Origine Large',
			subgames: {
				oriFlame: {
					name: 'Oriflamme',
					rules: oriFlameRules
				},
				loupGarou: {
					name: 'Loup Garou',
					rules: loupGarouRules
				}
			}
		},
		codeNames: {
			name: 'Codenames',
			rules: codeNamesRules
		}
	};

	function handleGameHover(game: string) {
		hoveredGame = game;
	}

	function handleGameLeave() {
		hoveredGame = null;
	}

	function handleShowRules(game: string) {
		selectedGame = game;
	}

	function handleClosePopup() {
		selectedGame = null;
	}
</script>

<svelte:head>
	<title>Règles</title>
	<meta name="description" content="Règles page" />
</svelte:head>

<div class="container">
	<p class="instruction">Clique sur une partie de la carte pour voir les règles du jeu</p>
	<Card
		{hoveredGame}
		onGameHover={handleGameHover}
		onGameLeave={handleGameLeave}
		onShowRules={handleShowRules}
	/>
</div>

<Popup {selectedGame} {popupRules} onClose={handleClosePopup} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.instruction {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
		color: #666;
		font-size: 0.95rem;
		text-align: center;
	}
</style>
