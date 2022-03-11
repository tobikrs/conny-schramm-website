<template lang="pug">
.website-wrapper.min-h-screen.flex.flex-col
  header.bg-white.z-10.shadow-lg.sticky.top-0
    .max-w-screen-xl.min-h-21.mx-auto.p-3.flex.items-center.justify-between.font-serif
      nuxt-link(to='/')
        .text-2xl.font-black.text-red-800.whitespace-nowrap.leading-none Conny Schramm
        .text-sm.uppercase.tracking-wider.opacity-75 Autorin
      nav(role='navigation')
        ul.flex.justify-between.h-full.items-center.gap-2.font-sans.font-semibold
          li(v-for='(mItem, i) in menuItems', :key='`${mItem.link}-${i}`', :class='mItem.class || ""')
            nuxt-link(:to='mItem.link', :title='mItem.label') {{ mItem.label }}
          li.only-mobile.w-12.h-12
            nuxt-link.absolute.inset-0.p-2.rounded-full(to='menu', role='button')
              MenuIcon.w-full.h-full
  nuxt
  footer.bg-gray-800.text-white.h-32.mt-auto
    pre TODO: Footer mit Inhalt füllen
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import MenuIcon from '~/components/icons/heroicons/menu.svg?inline'
import XIcon from '~/components/icons/heroicons/x.svg?inline'

export default defineComponent({
  components: {
    MenuIcon,
    XIcon,
  },
  setup() {
    const menuItems = ref([])

    menuItems.value = [
      {
        label: 'News',
        link: 'news',
      },
      {
        label: 'Angebote',
        link: 'angebote',
      },
      {
        label: 'Über uns',
        link: 'ueber-uns',
      },
      {
        label: 'News',
        link: 'kontakt',
      },
      {
        label: 'Buche uns!',
        link: 'kontakt',
        class: 'call-to-action',
      },
    ]

    return {
      menuItems,
    }
  },
})
</script>

<style scoped>
nav li:not(.only-mobile) {
  @apply hidden md:inline-block;
}

nav li.only-mobile {
  @apply relative inline-block md:hidden;
}

nav li > a {
  @apply hover:bg-gray-100 text-red-800 whitespace-nowrap;
}
nav li:not(.only-mobile) > a {
  @apply px-4 py-2 rounded-lg;
}

nav li.call-to-action > a {
  @apply bg-red-900 text-white hover:bg-opacity-90;
}
</style>
