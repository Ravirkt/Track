<script>
    import {
        TrophyIcon,
        WeightIcon,
        WorkoutIcon,
        MiniChart,
        Label,
        HeaderTitle,
        HeaderSection,
        ChartCard,
        HeadingTitle,
    } from "$lib";

    let {
        countValue,
        statCardTitle,
        count,
        statCardClass,
        Icon,
        headingText,
        headingTitleClass,
        headingLevel,
    } = $props();
</script>

<!-- h3 -->

<article class="data-card {statCardClass}">
    <div class="card-title">
        <HeadingTitle
            {headingText}
            className={headingTitleClass}
            level={headingLevel}
        />

        {#if Icon}
            <Icon class="icon" />
        {/if}
    </div>

    <p class="count">{count}<span>{countValue}</span></p>
</article>

<style>
    .data-card {
        background-color: var(--card-background-color);
        padding: 1rem;
        font-family: var(--regular-font);
        font-size: clamp(12px, 3vw, 16px);
        display: flex;
        flex-direction: column;
        border-radius: var(--radius-sm);
        box-shadow: var(--box-shadow-webkit);
        border: 1px solid rgba(0, 0, 0, 0.819);
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

    .count {
        padding-top: 2rem;
        margin-top: auto;
        font-family: var(--regular-font);
        font-size: clamp(18px, 3vw, 38px);
        color: var(--secondary-text-color);
    }

    .count span {
        font-family: var(--regular-font);
        font-size: clamp(11px, 3vw, 12px);
        color: var(--blue);
        text-transform: uppercase;
    }
</style>
