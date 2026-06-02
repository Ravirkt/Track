<script>
    import { Label, HeaderTitle } from "$lib";

    let { spanOne, spanTwo, labelText } = $props();
</script>

<header class="header-container">
    <HeaderTitle spanOne={spanOne} spanTwo={spanTwo} />
    <Label {labelText} />
</header>

<style>
    .header-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        padding: 5rem 1rem 1rem 1rem;
    }
</style>
