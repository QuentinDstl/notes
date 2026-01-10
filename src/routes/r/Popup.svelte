<script lang="ts">
	export let selectedGame: string | null;
	export let popupRules: Record<
		string,
		{
			name: string;
			rules?: string;
			subgames?: Record<string, { name: string; rules: string }>;
		}
	>;
	export let onClose: () => void;

	let selectedSubgame: string | null = null;

	function handlePopupKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			onClose();
		}
	}

	// Extract title from markdown (first H1 or H2)
	function extractTitle(markdown: string): string {
		const h1Match = markdown.match(/^#\s+(.+?)$/m);
		if (h1Match) return h1Match[1];
		return '';
	}

	// Remove title from markdown content
	function removeTitle(markdown: string): string {
		return markdown.replace(/^#\s+.+?\n\n/m, '');
	}

	// Simple markdown to HTML converter
	function markdownToHtml(markdown: string): string {
		let html = markdown
			// Headings
			.replace(/^## (.*?)$/gm, '<h2>$1</h2>')
			.replace(/^### (.*?)$/gm, '<h3>$1</h3>')
			// Bold
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			// Italic
			.replace(/\*(.*?)\*/g, '<em>$1</em>')
			// Code blocks
			.replace(/`(.*?)`/g, '<code>$1</code>')
			// Lists
			.replace(/^\- (.*?)$/gm, '<li>$1</li>')
			.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
			// Paragraphs
			.replace(/\n\n/g, '</p><p>')
			.replace(/^(?!<[hu]|<[ul]|<p)(.+)$/gm, '<p>$1</p>');

		return html;
	}

	$: if (selectedGame && popupRules[selectedGame]?.subgames) {
		const subgameKeys = Object.keys(popupRules[selectedGame].subgames!);
		selectedSubgame = subgameKeys[0] || null;
	}

	$: {
		if (selectedGame && popupRules[selectedGame]) {
			const game = popupRules[selectedGame];
			if (game.subgames && selectedSubgame) {
				// For games with subgames
			}
		}
	}

	$: currentRules = (() => {
		if (!selectedGame || !popupRules[selectedGame]) return '';
		const game = popupRules[selectedGame];
		if (game.subgames && selectedSubgame && game.subgames[selectedSubgame]) {
			return game.subgames[selectedSubgame].rules;
		}
		return game.rules || '';
	})();

	$: popupTitle = extractTitle(currentRules);
	$: popupContent = removeTitle(currentRules);

	$: hasSubgames = selectedGame && popupRules[selectedGame]?.subgames !== undefined;
</script>

{#if selectedGame && popupRules[selectedGame]}
	<div
		class="popup-overlay"
		role="button"
		tabindex="0"
		on:click={onClose}
		on:keydown={handlePopupKeyDown}
	>
		<div
			class="popup-rules"
			role="dialog"
			tabindex="-1"
			on:click={(e) => e.stopPropagation()}
			on:keydown={(e) => e.stopPropagation()}
		>
			{#if hasSubgames && popupRules[selectedGame]?.subgames}
				<div class="subgame-bookmarks">
					{#each Object.entries(popupRules[selectedGame].subgames!) as [key, subgame], index}
						<button
							class="subgame-bookmark"
							class:active={selectedSubgame === key}
							data-color={key}
							on:click={() => (selectedSubgame = key)}
							title={subgame.name}
							style="--bookmark-index: {index}"
						>
							{#if key === 'oriFlame'}
								<img src="./bookmarks/ori.svg" alt={subgame.name} class="bookmark-icon" />
							{:else if key === 'loupGarou'}
								<img src="./bookmarks/lg.svg" alt={subgame.name} class="bookmark-icon" />
							{:else if key === 'tarot'}
								<img src="./bookmarks/tarot.svg" alt={subgame.name} class="bookmark-icon" />
							{:else if key === 'tarotAfricain'}
								<img src="./bookmarks/tarotAf.svg" alt={subgame.name} class="bookmark-icon" />
							{:else if key === 'eightAmerican'}
								<img src="./bookmarks/8american.svg" alt={subgame.name} class="bookmark-icon" />
							{:else if key === 'ascenseur'}
								<img src="./bookmarks/ascenseur.svg" alt={subgame.name} class="bookmark-icon" />
							{/if}
						</button>
					{/each}
				</div>
			{/if}
			<div class="popup-header">
				<h2>{popupTitle}</h2>
				<button class="close-btn" on:click={onClose}>×</button>
			</div>
			<div class="popup-content">
				{@html markdownToHtml(popupContent)}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	// Variables (used multiple times only)
	$primary-bg: #fff;
	$secondary-bg: #f5f5f5;
	$text-primary: #000;
	$text-tertiary: #555;
	$spacing-xs: 2px;
	$spacing-md: 8px;
	$spacing-lg: 12px;
	$spacing-xl: 16px;
	$spacing-4xl: 32px;
	$border-radius-sm: 4px;
	$border-radius-md: 6px;
	$border-radius-lg: 12px;
	$transition-fast: 200ms ease-in-out;
	$transition-normal: 300ms ease-in-out;
	$font-weight-semibold: 600;
	$font-weight-bold: 700;
	$line-height-normal: 1.8;

	// Mixins
	@mixin flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@mixin transition($properties...) {
		transition: $properties $transition-fast;
	}

	// Keyframes
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
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	// Styles
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		@include flex-center;
		z-index: 1000;
		animation:
			fadeIn $transition-fast,
			slideUp $transition-normal;
		backdrop-filter: blur(2px);
	}

	.popup-rules {
		background-color: $primary-bg;
		border-radius: $border-radius-lg;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		max-width: 700px;
		width: 90%;
		max-height: 85vh;
		animation: slideUp $transition-normal;
		position: relative;
		margin-top: 40px;
		z-index: 10;
		overflow: visible;
		display: flex;
		flex-direction: column;

		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: #e0e0e0;
			border-radius: $border-radius-sm;

			&:hover {
				background: #999;
			}
		}
	}

	.subgame-bookmarks {
		position: absolute;
		top: -50px;
		left: 40px;
		display: flex;
		gap: $spacing-lg;
		z-index: 9;
	}

	.subgame-bookmark {
		width: 48px;
		height: 75px;
		padding: $spacing-md;
		border: none;
		cursor: pointer;
		@include transition(all);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-start;

		&[data-color='oriFlame'] {
			background: linear-gradient(135deg, #ffccaa 0%, #ffddb3 100%);
		}

		&[data-color='loupGarou'] {
			background: linear-gradient(135deg, #d4a5a5 0%, #d9b8b8 100%);
		}

		&[data-color='tarot'] {
			background: linear-gradient(135deg, #f5a5a5 0%, #f0b3b3 100%);
		}

		&[data-color='tarotAfricain'] {
			background: linear-gradient(135deg, #d4d4d4 0%, #e0e0e0 100%);
		}

		&[data-color='eightAmerican'] {
			background: linear-gradient(135deg, #b3d9ff 0%, #cce5ff 100%);
		}

		&[data-color='ascenseur'] {
			background: linear-gradient(135deg, #a5e6b3 0%, #b8f0c4 100%);
		}

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
		}

		&.active {
			transform: translateY(-8px);
			box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
			filter: brightness(0.95);
		}
	}

	.bookmark-icon {
		width: 24px;
		height: 24px;
		object-fit: contain;
	}

	.popup-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $spacing-xl;
		border-bottom: 1px solid #f0f0f0;
		background: $primary-bg;
		border-radius: $border-radius-lg $border-radius-lg 0 0;
		position: sticky;
		top: 0;
		z-index: 10;

		h2 {
			margin: 0;
			color: $text-primary;
			font-size: 32px;
			font-weight: $font-weight-bold;
			letter-spacing: -0.5px;
		}
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 28px;
		color: #999;
		cursor: pointer;
		padding: $spacing-md;
		width: 44px;
		height: 44px;
		@include flex-center;
		@include transition(color);
		border-radius: $border-radius-md;

		&:hover {
			background-color: $secondary-bg;
			color: #333;
		}
	}

	.popup-content {
		padding: 40px;
		color: $text-tertiary;
		line-height: $line-height-normal;
		font-size: 16px;
		font-weight: 400;
		overflow-y: auto;
		max-height: calc(85vh - 120px);

		:global(h2) {
			margin: $spacing-4xl 0 $spacing-xl 0;
			font-size: 22px;
			font-weight: $font-weight-semibold;
			color: $text-primary;

			&:first-child {
				margin-top: 0;
			}
		}

		:global(h3) {
			margin: 24px 0 $spacing-xl 0;
			font-size: 18px;
			font-weight: $font-weight-semibold;
			color: #1a1a1a;
		}

		:global(p) {
			margin: $spacing-xl 0;
			line-height: $line-height-normal;
			color: $text-tertiary;
		}

		:global(strong) {
			font-weight: $font-weight-semibold;
			color: $text-primary;
		}

		:global(em) {
			font-style: italic;
			color: #666;
		}

		:global(code) {
			background-color: $secondary-bg;
			padding: $spacing-xs 6px;
			border-radius: $border-radius-sm;
			font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
			font-size: 14px;
			color: #d14;
		}

		:global(ul) {
			margin: $spacing-xl 0;
			padding-left: 0;
			list-style: none;
		}

		:global(li) {
			margin: $spacing-lg 0;
			padding-left: 28px;
			position: relative;
			color: $text-tertiary;

			&::before {
				content: '•';
				position: absolute;
				left: $spacing-md;
				color: #ccc;
				font-weight: $font-weight-bold;
				font-size: 18px;
			}
		}
	}
</style>
