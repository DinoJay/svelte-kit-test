<script>
  import Title from './Title.svelte';
  let animate = false;
</script>

<span
  on:mouseover={() => {
    console.log('mouseover');
    animate = true;
  }}
  on:mouseout={() => {
    animate = false;
    console.log('mouseout');
  }}
  class="text-5xl"><Title {animate}>Home</Title></span>
