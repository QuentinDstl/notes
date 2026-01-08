<script lang="ts">
	import Card from './Card.svelte';
	import Popup from './Popup.svelte';

	let selectedGame: string | null = null;
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

<Card
	{hoveredGame}
	onGameHover={handleGameHover}
	onGameLeave={handleGameLeave}
	onShowRules={handleShowRules}
/>

<Popup {selectedGame} {popupRules} onClose={handleClosePopup} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
