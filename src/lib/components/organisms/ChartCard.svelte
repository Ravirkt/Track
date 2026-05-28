<script>
    import {
        MiniChart,
    } from "$lib";

    let { metricValue, analyticsCardTitle, chartData, chartLabels, Icon } =
        $props();
</script>

<article class="analytics-card js-off">
    <h4 class="analytics-card-title">
        {analyticsCardTitle}
        {#if Icon}
            <Icon class="icon" />
        {/if}
    </h4>

    <MiniChart data={chartData} />
    <span class="value">{metricValue}</span>
</article>

<noscript>
    <article class="analytics-card">
        <h4 class="analytics-card-title">{analyticsCardTitle}</h4>
        <ul>
            {#each chartData as value, i}
                <li>{value}</li>
            {/each}
        </ul>
    </article>
    <style>
        .js-off {
            display: none;
        }
    </style>
</noscript>

<style>
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
