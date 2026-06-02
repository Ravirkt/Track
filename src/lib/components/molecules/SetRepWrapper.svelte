<script>
    import RepsLabel from "$lib/components/atoms/RepsLabel.svelte";
    import SetsLabel from "$lib/components/atoms/SetsLabel.svelte";

    let { allReps, allSets } = $props();
</script>

<div class="exercise-data">
    <SetsLabel {allSets} />
    <RepsLabel {allReps} />
</div>

<style>
    .exercise-data {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
</style>
