<script>
    import {
        TrophyIcon,
        WeightIcon,
        WorkoutIcon,
        MiniChart,
        Label,
        HeaderTitle,
        HeaderSection,
    } from "$lib";
    import { onMount } from "svelte";
    import { Chart } from "chart.js/auto";
    import { nonnegative } from "zod";

    let { metricValue, analyticsCardIcon, analyticsCardTitle, chartData, chartLabels } = $props();


</script>

<article class="analytics-card js-off">
    <h4 class="analytics-card-title">{analyticsCardTitle} {analyticsCardIcon} <WorkoutIcon /></h4>

    <MiniChart
        data={chartData}
        labels={chartLabels}
    />
    <span class="value">{metricValue}</span>
</article>

<noscript>
    <article class="analytics-card">
        <h4 class="analytics-card-title">{analyticsCardTitle}</h4>
        <ul>
            <li>wk 1: 3 CM</li>
            <li>wk 2: 5 CM</li>
            <li>wk 3: 2 CM</li>
            <li>wk 4: 4 CM</li>
            <li>wk 5: 6 CM</li>
            <li>wk 6: 3 CM</li>
            <li>wk 7: 5 CM</li>
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
    }
</style>
