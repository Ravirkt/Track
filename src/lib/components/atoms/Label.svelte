<script>
    // import { Label } from "$lib";

    let { labelText } = $props();
</script>

<p class="label">{labelText}</p>

<style>
    .label {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: var(--spacing-xxs) var(--spacing-sm);
        border: 1px solid var(--border-blue);
        border-radius: var(--radius-full);
        background: var(--background-blue);
        color: var(--primary-text-color);
        font-size: clamp(9px, 2.8vw, 12px);
        font-family: var(--light-font);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        width: fit-content;
        order: 1;
        justify-self: center;
    }
</style>
