<script>
    let { headingTitleClass, notificationMessage, headingText, headingLevel } = $props();

    import HeaderTitle from "../atoms/HeaderTitle.svelte";
    import HeadingTitle from "../atoms/HeadingTitle.svelte";
    import NotificationParagraph from "../atoms/NotificationParagraph.svelte";
</script>

<article class="notification-row">
    <HeadingTitle
        className={headingTitleClass}
        {headingText}
        level={headingLevel}
    />

    <NotificationParagraph {notificationMessage} />
</article>

<style>
    .notification-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.8rem;
        /* border-radius: var(--radius-sm); */
        /* background-color: rgba(0, 0, 255, 0.053); */
        /* border: 1px solid var(--blue); */
        border-bottom: 2px solid black;
    }
</style>
