<script>
    let { allSets } = $props();
</script>

<p class="sets"><span>Sets:</span> {allSets}</p>

<style>
    .sets {
        font-family: var(--light-font);
        font-size: clamp(10px, 3vw, 11px);
        color: var(--secondary-text-color);
    }

    .sets span {
        color: var(--primary-text-color);
        background-color: var(--blue);
        padding: 0.1rem;
        font-size: clamp(10px, 3vw, 11px);
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: auto;
    }
</style>
