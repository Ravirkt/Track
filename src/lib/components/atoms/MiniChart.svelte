<script>
    import { onMount } from "svelte";
    import { Chart } from "chart.js/auto";

    import { FallBackChart } from "$lib";

    let { data = [], labels = ["7", "6", "5", "4", "3", "2", "1"] } = $props();

    let canvas;

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
        <canvas bind:this={canvas} />
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
</style>
