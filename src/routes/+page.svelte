<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let selectedTheme = 'system';
    export let choosenTheme = 'dark';

    const choosenThemeStore = writable(choosenTheme);

    choosenThemeStore.subscribe(value => {
        choosenTheme = value;
    });

    $: choosenTheme = selectedTheme === 'system'
        ? typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        : selectedTheme;
</script>

<container class="{choosenTheme === 'dark' ? 'dark-theme' : 'light-theme'}">
    <header class="flex items-center justify-between p-4 border-b mb-6">
        <h2 class="text-xl font-semibold">Theme Selector</h2>
        <select
            class="border rounded px-2 py-1"
            bind:value={selectedTheme}
        >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    </header>
</container>

