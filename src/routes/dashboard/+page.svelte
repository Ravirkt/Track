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
    let { user, pictures, weights, waists, bodyfats, heartrates } = data;
</script>

<HeaderSection
    spanOne="Goodmorning"
    spanTwo="{user.name} {user.lastname}"
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
            <StatCard
                count={user.start_weight}
                countValue="Kg"
                Icon={ScaleIcon}
                headingLevel="h3"
                headingText="Start weight"
                headingTitleClass="card-title"
            />
            <StatCard
                count={user.start_bodyfat}
                countValue="%"
                Icon={BodyFatIcon}
                headingLevel="h3"
                headingText="Bodyfat"
                headingTitleClass="card-title"
            />
            <StatCard
                count={user.start_waist}
                countValue="CM"
                Icon={WaistIcon}
                headingLevel="h3"
                headingText="Waist"
                headingTitleClass="card-title"
            />
            <StatCard
                count={user.resting_heart_rate}
                countValue="BPM"
                Icon={HeartRateIcon}
                headingLevel="h3"
                headingText="Heartrate (rest)"
                headingTitleClass="card-title"
            />
        </div>
    </section>

    <section class="dashboard-analytics-container">
        <HeadingTitle
            headingText="Analytics"
            className="dashboard-analytics-container-title"
            level="h3"
        />

        <div class="analytics-container">
            <ChartCard
                metricValue="KG"
                chartData={weights}
                Icon={ScaleIcon}
                headingLevel="h4"
                headingText="Weight"
                headingTitleClass="analytics-card-title"
                ariaLabelChartName="Weight"
            />
            <ChartCard
                metricValue="%"
                chartData={bodyfats}
                Icon={BodyFatIcon}
                headingLevel="h4"
                headingText="Bodyfat"
                headingTitleClass="analytics-card-title"
                ariaLabelChartName="Bodyfat"
            />

            <ChartCard
                metricValue="CM"
                chartData={waists}
                Icon={WaistIcon}
                headingLevel="h4"
                headingText="Waist"
                headingTitleClass="analytics-card-title"
                ariaLabelChartName="Waist"
            />
            <ChartCard
                metricValue="BPM"
                chartData={heartrates}
                Icon={HeartRateIcon}
                headingLevel="h4"
                headingText="Heartrate (rest)"
                headingTitleClass="analytics-card-title"
                ariaLabelChartName="Heartrate (rest)"
            />
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
</style>
