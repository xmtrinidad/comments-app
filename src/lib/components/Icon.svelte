<script lang="ts">
  export let name: string;
  export let width = 24;
  export let height = 24;
  export let fill = '#000';
  let icons: { [key: string]: {box: number, name: string, svg: string} } = {
    "add": {
      box: 24,
      name: "add",
      svg: `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`
    },
    "minus": {
      box: 24,
      name: "add",
      svg: `<path d="M19 13H5v-2h14v2z"/>`
    }
  }
  let displayIcon = icons[name];
</script>
<svg
class={$$props.class}
{width}
{height}
{fill}
viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg>