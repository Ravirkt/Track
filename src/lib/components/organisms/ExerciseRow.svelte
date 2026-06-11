<script>
    let { allReps, allSets, headingTitleClass, headingText, headingLevel } =
        $props();

    import SetRepWrapper from "$lib/components/molecules/SetRepWrapper.svelte";
    import HeadingTitle from "../atoms/HeadingTitle.svelte";
</script>

<article class="exercise-row">
    <HeadingTitle
        className={headingTitleClass}
        {headingText}
        level={headingLevel}
    />

    <SetRepWrapper {allReps} {allSets} />
</article>

<style>
    .exercise-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.8rem;
        border-bottom: 2px solid black;
    }
</style>
