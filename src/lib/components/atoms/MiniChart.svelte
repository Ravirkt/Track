<script>
    import { onMount } from "svelte";
    import { Chart } from "chart.js/auto";

    let { data = [], labels = [] } = $props();

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
    <canvas bind:this={canvas} />
</div>

<style>
    .mini-chart-container {
        width: 100%;
    }

    canvas {
        width: 100%;
    }
</style>
