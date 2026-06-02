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
        StatCard,
        ScaleIcon,
        BodyFatIcon,
        WaistIcon,
        HeartRateIcon,
        ExerciseRow,
        NotificationRow,
        HeadingTitle,
    } from "$lib";

    let { data } = $props();

    let chartCards = [
        {
            metricValue: "KG",
            chartData: data.weights,
            Icon: ScaleIcon,
            headingText: "Weight",
            ariaLabelChartName: "Weight",
        },
        {
            metricValue: "%",
            chartData: data.bodyfats,
            Icon: BodyFatIcon,
            headingText: "Bodyfat",
            ariaLabelChartName: "Bodyfat",
        },
        {
            metricValue: "CM",
            chartData: data.waists,
            Icon: WaistIcon,
            headingText: "Waist",
            ariaLabelChartName: "Waist",
        },
        {
            metricValue: "BPM",
            chartData: data.heartrates,
            Icon: HeartRateIcon,
            headingText: "Heartrate (rest)",
            ariaLabelChartName: "Heartrate (rest)",
        },
    ];

    const statCards = [
        {
            count: data.user.start_weight,
            countValue: "KG",
            Icon: ScaleIcon,
            headingText: "Start weight",
        },
        {
            count: data.user.start_bodyfat,
            countValue: "%",
            Icon: BodyFatIcon,
            headingText: "Bodyfat",
        },
        {
            count: data.user.start_waist,
            countValue: "CM",
            Icon: WaistIcon,
            headingText: "Waist",
        },
        {
            count: data.user.resting_heart_rate,
            countValue: "BPM",
            Icon: HeartRateIcon,
            headingText: "Heartrate (rest)",
        },
    ];
</script>

<HeaderSection
    spanOne="Goodmorning"
    spanTwo="{data.user.name} {data.user.lastname}"
    labelText="Dashboard"
/>

<main>
    <section class="dashboard-container">
        <HeadingTitle
            headingText="Starting stats"
            className="dashboard-container-title"
            level="h2"
        />

        <div class="card-container">
            {#each statCards as card}
                <StatCard
                    count={card.count}
                    countValue={card.countValue}
                    Icon={card.Icon}
                    headingLevel="h3"
                    headingText={card.headingText}
                    headingTitleClass="card-title"
                />
            {/each}
        </div>
    </section>

    <section class="dashboard-analytics-container">
        <HeadingTitle
            headingText="Analytics"
            className="dashboard-analytics-container-title"
            level="h3"
        />

        <div class="analytics-container">
            {#each chartCards as card}
                <ChartCard
                    metricValue={card.metricValue}
                    chartData={card.chartData}
                    Icon={card.Icon}
                    headingLevel="h4"
                    headingText={card.headingText}
                    headingTitleClass="analytics-card-title"
                    ariaLabelChartName={card.ariaLabelChartName}
                />
            {/each}
        </div>
    </section>

    <div class="current-workout-and-notifications-container">
        <section class="current-workout-container">
            <HeadingTitle
                headingText="Upper day"
                className="current-workout-container-title"
                level="h5"
            />

            <div class="workout-container">
                <ExerciseRow
                    allReps="4-5-7-8"
                    allSets="4"
                    workoutName="Hacksquad"
                    headingLevel="h5"
                    headingText="Hack squad"
                    headingTitleClass="exercise-row-title"
                />

                <ExerciseRow
                    allReps="4-5-7-8"
                    allSets="4"
                    workoutName="Hacksquad"
                    headingLevel="h5"
                    headingText="Hack squad"
                    headingTitleClass="exercise-row-title"
                />

                <ExerciseRow
                    allReps="4-5-7-8"
                    allSets="4"
                    workoutName="Hacksquad"
                    headingLevel="h5"
                    headingText="Hack squad"
                    headingTitleClass="exercise-row-title"
                />

                <ExerciseRow
                    allReps="4-5-7-8"
                    allSets="4"
                    workoutName="Hacksquad"
                    headingLevel="h5"
                    headingText="Hack squad"
                    headingTitleClass="exercise-row-title"
                />

                <ExerciseRow
                    allReps="4-5-7-8"
                    allSets="4"
                    workoutName="Hacksquad"
                    headingLevel="h5"
                    headingText="Hack squad"
                    headingTitleClass="exercise-row-title"
                />
            </div>
        </section>

        <section class="current-workout-container">
            <HeadingTitle
                headingText="Upper day"
                className="notifications-container-title"
                level="h5"
            />

            <div class="notifications-container">
                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />

                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />

                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />

                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />

                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />

                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />

                <NotificationRow
                    notificationMessage="Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, iste praesentium maiores ea facere
                    assumenda pariatur totam at enim aperiam?"
                    headingTitleClass="notification-row-title"
                    headingLevel="h5"
                    headingText="Check in"
                />
            </div>
        </section>
    </div>
</main>

<style>
    /* dasboard card */
    .dashboard-container {
        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-sm);
    }

    @media (min-width: 400px) {
        .card-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    @media (min-width: 650px) {
        .card-container {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
        }
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

    @media (min-width: 400px) {
        .analytics-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    @media (min-width: 800px) {
        .analytics-container {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    /* ---------------- */
    .current-workout-and-notifications-container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .current-workout-and-notifications-title {
        padding: 1rem;
    }

    .current-workout-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-sm);
        background-color: var(--card-background-color);
        border-radius: var(--radius-sm);
        overflow: hidden;
    }

    @media (min-width: 600px) {
        .current-workout-and-notifications-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    @media (min-width: 1000px) {
        .current-workout-and-notifications-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    .workout-container,
    .notifications-container {
        padding: 1rem;
        background-color: var(--card-background-color);
        border-radius: var(--radius-sm);
        box-shadow: var(--box-shadow-webkit);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: scroll;
        max-height: 20rem;
    }

    .exercise-row,
    .notification-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.8rem;
        border-bottom: 2px solid black;
    }
</style>
