<script>
    import {
        Chart,
        LineController,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale,
        Filler,
        Tooltip,
    } from "chart.js";

    Chart.register(
        LineController,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale,
        Filler,
        Tooltip,
    );

    import { onMount } from "svelte";
    import { FallBackChart } from "$lib";

    let {
        canvas,
        data = [],
        labels = ["7", "6", "5", "4", "3", "2", "1"],
        ariaLabelChartName,
    } = $props();

    onMount(() => {
        new Chart(canvas, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        data,
                        borderColor: "black",
                        borderWidth: 1.5,
                        tension: 0.4,
                        pointRadius: 3,
                        pointBackgroundColor: "blue",
                        pointBorderWidth: 0,
                        fill: false,
                    },
                ],
            },
            options: {
                animations: {
                    tension: {
                        duration: 1500,
                        easing: "linear",
                        from: 0,
                        to: 1,
                        loop: true,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false },
                },
            },
        });
    });
</script>

<div class="mini-chart-container">
    {#if data.every((chartdata) => chartdata === null)}
        <FallBackChart />
    {:else}
        <canvas
            bind:this={canvas}
            role="img"
            aria-label="Analytics chart for {ariaLabelChartName}"
            loading="lazy"
        ></canvas>
        <table class="visually-hidden">
            <caption>Chart data over the last 7 weeks</caption>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {#each data as value, i}
                    <tr>
                        <td>{labels[i]}</td>
                        <td>{value}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</div>

<style>
    .mini-chart-container {
        width: 100%;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    canvas {
        width: 100%;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
    }
</style>
