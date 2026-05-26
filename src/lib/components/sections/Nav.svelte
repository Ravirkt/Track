<script>
    import { LoginIcon, HamburgerIcon } from "$lib";

    let open = $state(false);
</script>

<nav class="nav" class:open>
    <ul class="nav-list">
        <li>
            <button
                class="nav-item nav-trigger"
                onclick={() => (open = !open)}
            >
                <HamburgerIcon />
            </button>
        </li>
        <li><a href="/" class="nav-item"><LoginIcon /></a></li>
        <li><a href="/" class="nav-item"><LoginIcon /></a></li>
        <li><a href="/" class="nav-item"><LoginIcon /></a></li>
        <li><a href="/" class="nav-item"><LoginIcon /></a></li>
        <li><a href="/" class="nav-item"><LoginIcon /></a></li>
    </ul>
</nav>

<style>
    .nav {
        position: fixed;
        right: 1.5rem;
        top: 1.5rem;
        transform: none;
        z-index: 99999;
    }

    .nav-list {
        list-style: none;
        position: relative;
        width: 3rem;
        height: 3rem;
    }

    .nav-list li {
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s;
    }

    .nav-list li:first-child {
        z-index: 10;
    }

    .nav-list li:not(:first-child) a {
        pointer-events: none;
    }
    .nav:global(.open) .nav-list li:nth-child(1) {
        transform: translateY(0px);
    }
    .nav:global(.open) .nav-list li:nth-child(2) {
    }
    .nav:global(.open) .nav-list li:nth-child(3) {
    }
    .nav:global(.open) .nav-list li:nth-child(4) {
        transform: translateY(147px);
    }
    .nav:global(.open) .nav-list li:nth-child(5) {
        transform: translateY(196px);
    }
    .nav:global(.open) .nav-list li:nth-child(6) {
        transform: translateY(245px);
    }

    .nav:global(.open) .nav-list li:not(:first-child) a {
        pointer-events: auto;
    }

    @media (hover: hover) {
        .nav-list:hover li:nth-child(1) {
            transform: translateY(0px);
        }
        .nav-list:hover li:nth-child(2) {
            transform: translateY(49px);
        }
        .nav-list:hover li:nth-child(3) {
            transform: translateY(98px);
        }
        .nav-list:hover li:nth-child(4) {
            transform: translateY(147px);
        }
        .nav-list:hover li:nth-child(5) {
            transform: translateY(196px);
        }
        .nav-list:hover li:nth-child(6) {
            transform: translateY(245px);
        }

        .nav-list:hover li:not(:first-child) a {
            pointer-events: auto;
        }
    }

    .nav-item {
        width: 3rem;
        height: 3rem;
        background-color: var(--blue);
        border-radius: var(--radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        border: none;
    }

    .nav-item:hover {
        background-color: var(--blue);
        border: 1px solid var(--primary-text-color);
    }

</style>
