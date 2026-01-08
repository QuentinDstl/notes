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
								<img src="/ori.svg" alt={subgame.name} class="bookmark-icon" />
							{:else if key === 'loupGarou'}
								<img src="/lg.svg" alt={subgame.name} class="bookmark-icon" />
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

<style>
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		animation: fadeIn 200ms ease-in-out;
		backdrop-filter: blur(2px);
	}

	.popup-rules {
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		max-width: 700px;
		width: 90%;
		max-height: 85vh;
		animation: slideUp 300ms ease-in-out;
		position: relative;
		margin-top: 40px;
		z-index: 10;
		overflow: visible;
		display: flex;
		flex-direction: column;
	}

	.subgame-bookmarks {
		position: absolute;
		top: -64px;
		left: 40px;
		display: flex;
		gap: 12px;
		z-index: 11;
	}

	.subgame-bookmark {
		width: 48px;
		height: 64px;
		padding: 8px;
		border: none;
		border-radius: 6px 6px 0 0;
		cursor: pointer;
		transition: all 200ms ease-in-out;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.subgame-bookmark[data-color='oriFlame'] {
		background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
	}

	.subgame-bookmark[data-color='loupGarou'] {
		background: linear-gradient(135deg, #8b3a3a 0%, #5a2020 100%);
	}

	.bookmark-icon {
		width: 24px;
		height: 24px;
		object-fit: contain;
	}

	.subgame-bookmark:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
	}

	.subgame-bookmark.active {
		transform: translateY(-8px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
		filter: brightness(1.1);
	}

	.popup-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px;
		border-bottom: 1px solid #f0f0f0;
		background: #fff;
		border-radius: 12px 12px 0 0;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.popup-header h2 {
		margin: 0;
		color: #000;
		font-size: 32px;
		font-weight: 700;
		letter-spacing: -0.5px;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 28px;
		color: #999;
		cursor: pointer;
		padding: 8px;
		width: 44px;
		height: 44px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: color 200ms ease-in-out;
		border-radius: 6px;
	}

	.close-btn:hover {
		background-color: #f5f5f5;
		color: #333;
	}

	.popup-content {
		padding: 40px;
		color: #333;
		line-height: 1.8;
		font-size: 16px;
		font-weight: 400;
		overflow-y: auto;
		max-height: calc(85vh - 120px);
	}

	.popup-content :global(h2) {
		margin: 32px 0 16px 0;
		font-size: 22px;
		font-weight: 600;
		color: #000;
		margin-top: 40px;
	}

	.popup-content :global(h2:first-child) {
		margin-top: 0;
	}

	.popup-content :global(h3) {
		margin: 24px 0 12px 0;
		font-size: 18px;
		font-weight: 600;
		color: #1a1a1a;
	}

	.popup-content :global(p) {
		margin: 16px 0;
		line-height: 1.8;
		color: #555;
	}

	.popup-content :global(strong) {
		font-weight: 600;
		color: #000;
	}

	.popup-content :global(em) {
		font-style: italic;
		color: #666;
	}

	.popup-content :global(code) {
		background-color: #f5f5f5;
		padding: 2px 6px;
		border-radius: 4px;
		font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
		font-size: 14px;
		color: #d14;
	}

	.popup-content :global(ul) {
		margin: 16px 0;
		padding-left: 0;
		list-style: none;
	}

	.popup-content :global(li) {
		margin: 12px 0;
		padding-left: 28px;
		position: relative;
		color: #555;
	}

	.popup-content :global(li::before) {
		content: '•';
		position: absolute;
		left: 8px;
		color: #ccc;
		font-weight: 600;
		font-size: 18px;
	}

	/* Scrollbar styling */
	.popup-rules ::-webkit-scrollbar {
		width: 8px;
	}

	.popup-rules ::-webkit-scrollbar-track {
		background: transparent;
	}

	.popup-rules ::-webkit-scrollbar-thumb {
		background: #e0e0e0;
		border-radius: 4px;
	}

	.popup-rules ::-webkit-scrollbar-thumb:hover {
		background: #999;
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
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
