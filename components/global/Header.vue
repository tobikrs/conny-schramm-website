<template lang="pug">
header.fixed.top-0.flex.justify-between.h-14.w-full.bg-white
  h1.self-center.whitespace-nowrap Conny Schrammm
  nav.links.ml-2
    ul.list-none
      li.border-none.ml-0.pl-0
        a(href='#') News
      li
        a(href='#') Veranstaltung
      li
        a(href='#') Über mich
        nav
          ul
            li
              a(href='#') Reiseberichte
      li
        a(href='#') Kontakt
  nav.main
    ul
      li
        a(href='#') 
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style lang="postcss" scoped>
.links {
  @apply uppercase;
}

.links > ul > li {
  @apply inline-block ml-4 pl-4 border-l border-current border-solid;
}
</style>