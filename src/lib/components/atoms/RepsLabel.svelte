<script>
    let { allReps } = $props();
</script>

<p class="reps"><span>Reps:</span> {allReps}</p>

<style>
    .reps {
        font-family: var(--light-font);
        font-size: clamp(10px, 3vw, 11px);
        color: var(--secondary-text-color);
    }

    .reps span {
        color: var(--primary-text-color);
        background-color: var(--green);
        padding: 0.1rem;
        font-size: clamp(10px, 3vw, 11px);
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: auto;
    }
</style>
