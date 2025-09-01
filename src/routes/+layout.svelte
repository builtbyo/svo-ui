<script lang="ts">
    import '../app.css';
    
    let { children } = $props();
 
</script>

<svelte:head>
    <title>Your Dynamic Title</title>
    <meta name="description" content="Your dynamic description" />
</svelte:head>


{@render children()}
