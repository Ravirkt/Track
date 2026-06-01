<script>
    import { MiniChart } from "$lib";
    import { onMount } from "svelte";

    let {
        metricValue,
        analyticsCardTitle,
        chartData,
        chartLabels,
        Icon,
        headingLevel,
        headingText,
        headingTitleClass,
    } = $props();

    import HeaderTitle from "../atoms/HeaderTitle.svelte";
    import HeadingTitle from "../atoms/HeadingTitle.svelte";

    let javascriptOn = $state(false);

    onMount(() => {
        javascriptOn = true;
    });
</script>

<article class="analytics-card" class:js-off={!javascriptOn}>
    <div class="analytics-card-title">
        <HeadingTitle
            {headingText}
            className={headingTitleClass}
            level={headingLevel}
        />
        {#if Icon}
            <Icon class="icon" />
        {/if}
    </div>

    <MiniChart data={chartData} />
    <span class="value">{metricValue}</span>
</article>

<noscript>
    <article class="analytics-card">
        <HeadingTitle
            {headingText}
            className={headingTitleClass}
            level={headingLevel}
        />
        <ul>
            {#each chartData as value, i}
                <li>{value}</li>
            {/each}
        </ul>
    </article>
</noscript>

<style>
    .js-off {
        display: none;
    }

    .analytics-card {
        background-color: var(--card-background-color);
        font-family: var(--regular-font);
        font-size: clamp(13px, 3vw, 16px);
        border-radius: var(--radius-sm);
        box-shadow: var(--box-shadow-webkit);
        border: 1px solid rgba(0, 0, 0, 0.819);
        padding: 1rem;
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

    .mini-chart {
        width: 100%;
    }

    canvas {
        width: 100%;
    }

    .value {
        color: var(--primary-text-color);
        background-color: var(--green);
        padding: 0.1rem;
        font-size: clamp(9px, 2.8vw, 11px);
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: auto;
    }

    noscript ul li {
        color: var(--secondary-text-color);
        list-style: none;
        color: var(--primary-text-color);
        background-color: var(--green);
        padding: 0.1rem;
        font-size: clamp(9px, 2.8vw, 11px);
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        width: fit-content;
    }

    noscript ul {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
</style>