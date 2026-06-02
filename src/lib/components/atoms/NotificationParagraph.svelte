<script>
    let { notificationMessage } = $props();
</script>

<p class="notification-message">
    <span>Trainer:</span>
    {notificationMessage}
</p>

<style>
    .notification-message {
        color: var(--secondary-text-color);
        font-size: clamp(10px, 3vw, 11px);
    }

    .notification-message span {
        color: var(--primary-text-color);
        background-color: var(--green);
        padding: 0.1rem;
        font-size: clamp(10px, 3vw, 11px);
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: auto;
        width: fit-content;
    }

    .notification-message {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
