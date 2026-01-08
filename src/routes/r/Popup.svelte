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
