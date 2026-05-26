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
</script>

<HeaderSection spanOne="Goodmorning" spanTwo="Jane Doe" labelText="Dashboard" />

<section class="dashboard-container">
    <h3 class="dashboard-title">Stats</h3>

    <div class="card-container">
        <article class="data-card">
            <h3 class="card-title">
                Workouts this week <WorkoutIcon />
            </h3>

            <p class="count">4</p>
        </article>

        <article class="data-card">
            <h3 class="card-title">
                Personal bests <TrophyIcon />
            </h3>

            <p class="count">3</p>
        </article>

        <article class="data-card">
            <h3 class="card-title">
                Current weight <WeightIcon />
            </h3>

            <p class="count">80<span>kg</span></p>
        </article>

        <article class="data-card">
            <h3 class="card-title">Total workouts <WorkoutIcon /></h3>

            <p class="count">18</p>
        </article>
    </div>
</section>

<section class="dashboard-analytics-container">
    <h4 class="dashboard-analytics-title">Analytics</h4>

    <div class="analytics-container">
        <article class="analytics-card js-off">
            <h4 class="analytics-card-title">Waist <WorkoutIcon /></h4>

            <MiniChart
                data={[95, 93, 92, 90, 88]}
                labels={["jan", "feb", "mrt", "apr", "mei"]}
            />
            <span class="value">CM</span>
        </article>

        <noscript>
            <article class="analytics-card">
                <h4 class="analytics-card-title">Waist</h4>
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

        <article class="analytics-card js-off">
            <h4 class="analytics-card-title">Bodyfat <WorkoutIcon /></h4>

            <MiniChart
                data={[3, 5, 2, 4, 6, 3, 5]}
                labels={[
                    "wk 1",
                    "wk 2",
                    "wk 3",
                    "wk 4",
                    "wk 5",
                    "wk 6",
                    "wk 7",
                ]}
            />
            <span class="value">%</span>
        </article>

        <noscript>
            <article class="analytics-card">
                <h4 class="analytics-card-title">Waist</h4>
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

        <article class="analytics-card js-off">
            <h4 class="analytics-card-title">Weight <WeightIcon /></h4>

            <MiniChart
                data={[3, 5, 2, 4, 6, 3, 5]}
                labels={[
                    "wk 1",
                    "wk 2",
                    "wk 3",
                    "wk 4",
                    "wk 5",
                    "wk 6",
                    "wk 7",
                ]}
            />
            <span class="value">KG</span>
        </article>

        <noscript>
            <article class="analytics-card">
                <h4 class="analytics-card-title">Waist</h4>
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

        <article class="analytics-card js-off">
            <h4 class="analytics-card-title">Waist <WorkoutIcon /></h4>

            <MiniChart
                data={[3, 5, 2, 4, 6, 3, 5]}
                labels={[
                    "wk 1",
                    "wk 2",
                    "wk 3",
                    "wk 4",
                    "wk 5",
                    "wk 6",
                    "wk 7",
                ]}
            />

            <span class="value">CM</span>
        </article>

        <noscript>
            <article class="analytics-card">
                <h4 class="analytics-card-title">Waist</h4>
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
    </div>
</section>

<section class="current-workout-and-notifications-container">
    <h4 class="current-workout-and-notifications-title">Today's workout</h4>

    <section class="current-workout-container">
        <div class="workout-container">
            <article class="exercise-row">
                <h5 class="exercise-row-title">Bench press</h5>

                <div class="exercise-data">
                    <span class="sets">Sets: 4</span>
                    <span class="reps">Reps: 8-5-4-3</span>
                </div>
            </article>

            <article class="exercise-row">
                <h5 class="exercise-row-title">Bench press</h5>

                <div class="exercise-data">
                    <span class="sets">Sets: 4</span>
                    <span class="reps">Reps: 8-5-4-3</span>
                </div>
            </article>

            <article class="exercise-row">
                <h5 class="exercise-row-title">Bench press</h5>

                <div class="exercise-data">
                    <span class="sets">Sets: 4</span>
                    <span class="reps">Reps: 8-5-4-3</span>
                </div>
            </article>

            <article class="exercise-row">
                <h5 class="exercise-row-title">Bench press</h5>

                <div class="exercise-data">
                    <span class="sets">Sets: 4</span>
                    <span class="reps">Reps: 8-5-4-3</span>
                </div>
            </article>

            <article class="exercise-row">
                <h5 class="exercise-row-title">Bench press</h5>

                <div class="exercise-data">
                    <span class="sets">Sets: 4</span>
                    <span class="reps">Reps: 8-5-4-3</span>
                </div>
            </article>

            <article class="exercise-row">
                <h5 class="exercise-row-title">Bench press</h5>

                <div class="exercise-data">
                    <span class="sets">Sets: 4</span>
                    <span class="reps">Reps: 8-5-4-3</span>
                </div>
            </article>
        </div>

        <div class="notifications-container">
            <article class="exercise-row">
                <h5 class="notification-title">Check in</h5>

                <p class="notification-message">
                    You need to go up in weight. I see you already hit 12 reps.
                </p>
            </article>

            <article class="exercise-row">
                <h5 class="notification-title">Check in</h5>

                <p class="notification-message">
                    You need to go up in weight. I see you already hit 12 reps.
                </p>
            </article>

            <article class="exercise-row">
                <h5 class="notification-title">Check in</h5>

                <p class="notification-message">
                    You need to go up in weight. I see you already hit 12 reps.
                </p>
            </article>

            <article class="exercise-row">
                <h5 class="notification-title">Check in</h5>

                <p class="notification-message">
                    You need to go up in weight. I see you already hit 12 reps.
                </p>
            </article>

            <article class="exercise-row">
                <h5 class="notification-title">Check in</h5>

                <p class="notification-message">
                    You need to go up in weight. I see you already hit 12 reps.
                </p>
            </article>
        </div>
    </section>
</section>

<style>
    .header-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        padding: 5rem 1rem 1rem 1rem;
    }

    h1 {
        order: 2;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xxxs);
    }

    h1 span:nth-child(2) {
        color: var(--orange);
    }

    .label {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: var(--spacing-xxs) var(--spacing-sm);
        border: 1px solid var(--border-orange);
        border-radius: var(--radius-full);
        background: var(--background-orange);
        color: var(--orange);
        font-size: clamp(9px, 2.8vw, 12px);
        font-family: var(--light-font);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        width: fit-content;
        order: 1;
        justify-self: center;
    }

    /* dasboard card */

    .dashboard-container {
        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card-container {
        /* gap: 1rem; */
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-sm);
    }

    @media (min-width: 600px) {
        .card-container {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    .data-card {
        background-color: var(--card-background-color);
        padding: 1rem;
        font-family: var(--regular-font);
        font-size: clamp(13px, 3vw, 16px);
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
        color: var(--orange);
        text-transform: uppercase;
    }

    /* chart-wokout containr */

    .dashboard-analytics-container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .analytics-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-sm);
    }

    @media (min-width: 600px) {
        .analytics-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    @media (min-width: 900px) {
        .analytics-container {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
        }
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

    /* current workout today */

    .current-workout-and-notifications-container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .current-workout-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-sm);
    }

    @media (min-width: 600px) {
        .current-workout-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    .workout-container,
    .notifications-container {
        padding: 1rem;
        /* background-color: var(--card-background-color); */
        background-color: hsl(203, 100%, 35%);
        border-radius: var(--radius-sm);
        box-shadow: var(--box-shadow-webkit);
        border: 1px solid rgba(0, 0, 0, 0.819);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        overflow: scroll;
        max-height: 20rem;
    }

    .exercise-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: var(--radius-sm);
        background-color: rgba(183, 183, 251, 0.308);
        background-color: var(--card-background-color);
    }

    .exercise-row-title,
    .notification-title {
        color: var(--secondary-text-color);
    }

    .notification-message {
        color: var(--secondary-text-color);
        font-size: clamp(10px, 3vw, 11px);
    }

    .exercise-data {
        display: flex;
        flex-direction: column;
    }

    .sets,
    .reps {
        font-family: var(--light-font);
        font-size: clamp(10px, 3vw, 11px);
        color: var(--secondary-text-color);
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
