<template lang="pug">
main
  .hero.bg-red-50
    .max-w-screen-xl.mx-auto.px-4.py-24.flex.items-center.gap-8(class='min-h-[75vh]')
      .caption.font-serif.whitespace-nowrap.mx-auto.w-min
        h1.text-5xl.font-black.text-red-900 Conny Schramm
        .text-2xl.uppercase.tracking-wider.opacity-75 Autorin mit Herz und Humor
      .hero__image
        img.object-cover.rounded-xl.shadow-lg(src='img/conny-autobiographie.jpg')
  section
    h2 Aktuelles
    .flex.gap-4
      .post.bg-red-900.text-white.p-4.rounded-xl.shadow-lg(v-for='post in latestPosts', :key='post.title')
        h3.text-2xl.font-bold.mb-2 {{ post.title }}
        .text-md {{ post.exerpt }}
  section
    h2 Bücher
  section.bg-red-50.pb-0
    h2 Veranstaltungen
  .bg-gradient-to-br.from-red-800.to-red-900.text-white.py-8
    .max-w-screen-lg.mx-auto.px-4.flex.justify-between
      .text-2xl.font-bold Lade mich gerne zu einer Lesung ein!
      button.bg-white.text-red-900.font-bold.py-2.px-5.rounded-md(class='hover:bg-opacity-90') Mehr erfahren
  section
    h2 Über uns
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const latestPosts = ref([])

    latestPosts.value = [
      {
        title: 'Hurra, jetzt sind es Vier!',
        exerpt:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum',
      },
      {
        title: 'Expedition gelobtes Land – Meine Suche nach Gott',
        exerpt:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum',
      },
      {
        title: 'Aller guten Dinge sind DREI!',
        exerpt:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum',
      },
    ]

    return {
      latestPosts,
    }
  },
})
</script>


<style scoped>
h2 {
  @apply text-4xl font-serif font-bold pb-6;
}

.hero__image img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}
</style>