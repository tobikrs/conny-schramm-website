<template lang="pug">
.website-wrapper.min-h-screen.flex.flex-col(:class='mobileMenu ? "h-screen overflow-hidden" : undefined')
  header.bg-white.z-10.shadow-lg.top-0(:class='mobileMenu ? "fixed inset-0" : "sticky"')
    .max-w-screen-xl.min-h-21.mx-auto.p-3.flex.items-center.font-serif.flex-wrap.h-full
      nuxt-link.mr-auto(to='/')
        .text-2xl.font-black.text-red-800.whitespace-nowrap.leading-none Conny Schramm
        .text-sm.uppercase.tracking-wider.opacity-75 Autorin
      button.w-12.h-12.p-3.-mr-1.rounded-full(class='md:hidden', @click='mobileMenu = !mobileMenu')
        MenuIcon.w-full.h-full(v-if='!mobileMenu')
        XIcon.w-full.h-full(v-else)
      nav.w-full.h-full.pt-8(role='navigation', class='md:w-auto md:pt-0 md:block', :class='mobileMenu ? undefined : "hidden"')
        ul.flex.justify-between.items-stretch.gap-2.font-sans.font-semibold.text-center(
          :class='mobileMenu ? "flex-col" : undefined'
        )
          li(
            v-for='(mItem, i) in menuItems',
            :key='`${mItem.link}-${i}`',
            :class='mItem.class || ""',
            @click='() => onMenuItemClick(i)'
          )
            nuxt-link(:to='mItem.link', :title='mItem.label') {{ mItem.label }}
  nuxt
  footer.bg-gray-800.text-white.h-32.mt-auto
    pre TODO: Footer mit Inhalt füllen
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import MenuIcon from '~/components/icons/heroicons/menu.svg?inline'
import XIcon from '~/components/icons/heroicons/x.svg?inline'

export default defineComponent({
  components: {
    MenuIcon,
    XIcon,
  },
  setup() {
    const menuItems = ref([])

    const mobileMenu = ref(false)

    const onMenuItemClick = (index) => {
      mobileMenu.value = false
    }

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
        label: 'Kontakt',
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
      mobileMenu,
      onMenuItemClick,
    }
  },
})
</script>

<style scoped>
nav li > a {
  @apply inline-block w-full hover:bg-gray-100 focus-within:bg-gray-100 text-red-800 whitespace-nowrap px-4 py-2 rounded-lg;
}

nav li.call-to-action {
  @apply mt-auto -mx-6 md:mx-0;
}

nav li.call-to-action > a {
  @apply px-10 md:px-4 bg-red-900 text-white hover:bg-opacity-90;
}
</style>
