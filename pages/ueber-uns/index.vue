<template lang="pug">
main
  section#conny.bg-red-50
    .section__content
      .card.bg-red-900.text-white
        .flex-shrink
          h1.font-serif.text-5xl.font-black.py-1 Conny Schramm
          .font-serif.text-2xl.uppercase.tracking-wider.opacity-80(role='doc-subtitle') Autorin mit Herz und Humor

          .bio.mt-6
            p Im September 1965 erblickte ich in Potsdam - nur drei Kilometer von der Grenze zu Westberlin entfernt - das Licht der Welt. Drei Kilometer, die mein Leben nachhaltig beeinflussen sollten, denn ich musste in einem sozialistischen Land aufwachsen...
            p Mein Humor hilft mir, auch mit den Schwierigkeiten des Lebens umzugehen.
            p Ich bin glücklich verheiratet. In meiner Freizeit verreise ich gerne mit meinem Mann in ferne Länder, nach Israel, Malaysia, Australien und Afrika. Ich lese gerne, treffe mich mit Freunden oder lerne neue Orte in Hamburg kennen.

        img.square.rounded-full(src='img/conny-square.jpg', class='sm:max-w-sm sm:min-w-64')
        .card__actions
          nuxt-link.link(to='kontakt', title='Kontakt')
            ChatIcon.inline
            .label Kontakt
          //- TODO: add link to books
          nuxt-link.link(to='#', title='Meine Bücher')
            BookOpenIcon.inline
            .label Meine Bücher

      ul.author-features.flex.gap-4.flex-wrap.mt-20
        li
          h2 Genres
          ul
            li Autobiographien
            li Reiseberichte
            li Kurzgeschichten

        li
          h2 Veröffentlichungen
          ul
            li
              i „Expedition Gelobtes Land – meine Suche nach Gott“
              | , AWS-Verlag, März 2021
            li
              i Australian Bustard, Wombat und Echidna“
              | , Epubli, April 2018
            li
              i „Mein ungebügeltes Leben“ – als christlich erzogenes Kind im Sozialismus aufgewachsen (Autobiografie)
              | , Brunnenverlag, August 2016

        li
          h2 Schreibstudium an der Schule des Schreibens
          p Studiengang:
            ul
              li Biografisches Schreiben
              li Belletristik

        li
          h2 Mitgliedschaften
          p
            ul
              li BVjA
              li Autorenstammtisch des BVjA Hamburg
              li Schreibwerkstatt Verein: „Alles wird schön“ Hamburg Heimfeld

  section#andreas.bg-gray-900
    .section__content
      .card.-mb-24.pb-16.flex-row-reverse.bg-gray-800.text-yellow-500.bg-gradient-to-b.from-gray-800.to.bg-gray-800.via-gray-900(
        class='sm:via-gray-800'
      )
        .self-center.flex-shrink
          h1.font-serif.text-5xl.font-black.py-1 Andreas Schramm
          .font-serif.text-2xl.uppercase.tracking-wider.opacity-90(role='doc-subtitle') Abenteurer und Hobbyfotograf
          .bio.mt-6
            p Ich wurde 1961 geboren und bin in Ostdeutschland aufgewachsen. Nun lebe ich seit 2007 in Hamburg.

            p Ich liebe das Abenteuer, immer neue (manchmal) auch etwas herausfordernde Erfahrungen in fremden Ländern und Kulturen, genieße die Natur und liebe es zu fotografieren.
              | Bei meinen Reisen mit meiner Ehefrau Conny kann ich diese schönen Hobbys immer wieder vereinen.
              | Es macht mir Freude im Anschluss an unsere Reisen schöne Fotopräsentationen zusammen zustellen.
        img.square.rounded-full.min-h-min(src='img/andy-leoparden.jpg', class='sm:max-w-sm')
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BookOpenIcon from '~/components/icons/heroicons/bookopen.svg?inline'
import ChatIcon from '~/components/icons/heroicons/chat.svg?inline'

export default defineComponent({
  components: {
    BookOpenIcon,
    ChatIcon,
  },
  setup() {},
})
</script>

<style scoped>
main > section {
  @apply w-full max-w-none;
}
main > section > .section__content {
  @apply max-w-screen-xl mx-auto;
}

/* Cards */
.card {
  @apply relative -mt-24 py-16 -mx-4 px-8 shadow-lg flex gap-8 flex-wrap-reverse items-center justify-center;
  @apply md:flex-nowrap md:justify-start sm:pt-8 sm:pb-10 sm:my-0 sm:mx-0 xl:-mx-4 sm:rounded-xl;
}
.card .card__actions {
  @apply absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 flex gap-4;
  @apply sm:right-9 sm:translate-x-0;
}
.card .card__actions .link {
  @apply border-4 rounded-full sm:px-4 p-3 font-bold font-serif text-lg leading-none flex items-center whitespace-nowrap  transition-colors;
}

#conny .card .card__actions .link {
  @apply bg-red-50 text-red-900 border-red-900;
  @apply hover:bg-gray-900 hover:text-white;
}
.card .card__actions .link > .label {
  @apply hidden sm:inline;
}
.card .card__actions .link > svg {
  @apply inline sm:mr-2 w-8 h-8 sm:w-6 sm:h-6;
}

/* Author Features */
ul.author-features {
  @apply sm:mx-4 md:mx-4 xl:mx-0;
}

ul.author-features > li {
  @apply min-w-64 flex-grow p-4 border-2 border-red-900 border-opacity-20 bg-red-900 bg-opacity-5 rounded-xl;
}
ul.author-features > li > h2 {
  @apply text-2xl text-red-900 font-black font-serif leading-7 mb-2;
}
ul.author-features > li ul {
  @apply list-disc list-inside;
}

.bio p {
  @apply mt-4;
}

.square {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
}

img.square {
  object-fit: cover;
  height: min-content;
}
</style>

