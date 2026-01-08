<script lang="ts">
	export let selectedGame: string | null;
	export let popupRules: Record<string, { name: string; rules: string }>;
	export let onClose: () => void;

	function handlePopupKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			onClose();
		}
	}
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
			<div class="popup-header">
				<h2>{popupRules[selectedGame].name}</h2>
				<button class="close-btn" on:click={onClose}>×</button>
			</div>
			<div class="popup-content">
				<p>{popupRules[selectedGame].rules}</p>
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
		border-radius: 8px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		max-width: 600px;
		width: 90%;
		max-height: 80vh;
		overflow-y: auto;
		animation: slideUp 300ms ease-in-out;
	}

	.popup-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 32px;
		border-bottom: 1px solid #e5e5e5;
		background: #fff;
		border-radius: 8px 8px 0 0;
	}

	.popup-header h2 {
		margin: 0;
		color: #000;
		font-size: 28px;
		font-weight: 600;
		letter-spacing: -0.5px;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 28px;
		color: #666;
		cursor: pointer;
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: color 100ms ease-in-out;
	}

	.close-btn:hover {
		color: #000;
	}

	.popup-content {
		padding: 32px;
		color: #333;
		line-height: 1.8;
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
