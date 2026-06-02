<script>
    import {
        Chart,
        LineController,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale,
        Filler,
    } from "chart.js";

    Chart.register(
        LineController,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale,
        Filler,
    );

    import { onMount } from "svelte";

    let FallbackData = [65, 68, 64, 70, 67, 72, 69];
    let Labels = ["1", "2", "3", "4", "5", "6", "7"];

    let canvas;

    onMount(() => {
        new Chart(canvas, {
            type: "line",
            data: {
                labels: Labels,
                datasets: [
                    {
                        data: FallbackData,
                        borderColor: "grey",
                        borderWidth: 1.5,
                        tension: 0.4,
                        pointRadius: 3,
                        pointBackgroundColor: "grey",
                        pointBorderWidth: 0,
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,

                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                },
                scales: {
                    x: { display: false },
                    y: { display: false },
                },
            },
        });
    });
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        width: 100%;
    }
</style>
