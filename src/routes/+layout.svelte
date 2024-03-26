<script lang="ts">
import "../app.pcss";
import "flowbite";
import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar></Navbar>

<div class="mt-2 pt-3 px-5">
    <slot></slot>
</div>