<script>
    let { headingText, className, level = "h1" } = $props();

    const levels = ["h1", "h2", "h3", "h4", "h5", "h6"];

    const validateLevel = (level) => {
        return levels.includes(level) ? level : "h1";
    };

    const validatedLevel = $derived(validateLevel(level));
</script>

<svelte:element this={validatedLevel} class={className}>
    {headingText}
</svelte:element>

<style>
    .exercise-row-title,
    .notification-row-title {
        color: var(--secondary-text-color);
    }

    .analytics-card-title {
        font-family: var(--headline-font);
        font-size: clamp(12px, 3vw, 14px);
        color: var(--secondary-text-color);
        padding-bottom: 0.5rem;

        display: flex;
        flex-direction: row;
        gap: var(--spacing-xxs);
        align-items: center;
        justify-content: space-between;
    }

    .card-title {
        font-family: var(--headline-font);
        font-size: clamp(12px, 3vw, 14px);
        color: var(--secondary-text-color);

        display: flex;
        flex-direction: row;
        gap: var(--spacing-xxs);
        align-items: center;
        justify-content: space-between;
    }

    .dashboard-container-title {
        font-size: clamp(14px, 2.5vw, 18px);
        font-family: var(--headline-font);
    }

    .dashboard-analytics-container-title {
        font-size: clamp(14px, 2.5vw, 18px);
        font-family: var(--headline-font);
    }

    .current-workout-container-title {
        padding: 1rem 1rem 1rem 1rem;
        color: var(--primary-text-color);
        background-color: var(--green);
    }

    .notifications-container-title {
        padding: 1rem 1rem 1rem 1rem;
        color: var(--primary-text-color);
        background-color: var(--green);
    }
</style>
