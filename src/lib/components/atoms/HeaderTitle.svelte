<script>
    let { spanOne, spanTwo } = $props();
</script>

<h1 class="header-title">
    <span>{spanOne}</span>
    <span>{spanTwo}</span>
</h1>

<style>
    h1 {
        order: 2;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xxxs);
    }

    h1 span:nth-child(2) {
        color: var(--blue);
    }
</style>
