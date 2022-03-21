<template lang="pug">
.website-wrapper.min-h-screen.flex.flex-col(:class="mobileMenu ? 'h-screen overflow-hidden' : undefined")
  header.bg-white.z-10.shadow-lg.top-0(:class="mobileMenu ? 'fixed inset-0' : 'sticky'")
    .max-w-screen-xl.min-h-21.mx-auto.p-3.flex.items-center.font-serif.flex-wrap.h-full
      nuxt-link(to='/').mr-auto
        .text-2xl.font-black.text-red-800.whitespace-nowrap.leading-none Conny Schramm
        .text-sm.uppercase.tracking-wider.opacity-75 Autorin
      button.w-12.h-12.p-3.-mr-1.rounded-full(@click="mobileMenu = !mobileMenu")
        MenuIcon.w-full.h-full
      nav(role='navigation').w-full.h-full
        ul.flex.justify-between.items-center.gap-2.font-sans.font-semibold.text-center(:class="mobileMenu ? 'flex-col' : undefined")
          li(v-for='(mItem, i) in menuItems', :key='`${mItem.link}-${i}`', :class='mItem.class || ""')
            nuxt-link(:to='mItem.link', :title='mItem.label') {{ mItem.label }}
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

    const mobileMenu = ref(true)

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
      mobileMenu
    }
  },
})
</script>

<style scoped>
.mobile-menu-btn {
  @apply relative inline-block md:hidden;
}

nav li {
  @apply block md:inline-block;
}

nav li > a {
  @apply hover:bg-gray-100 text-red-800 whitespace-nowrap px-4 py-2 rounded-lg;
}

nav li.call-to-action > a {
  @apply bg-red-900 text-white hover:bg-opacity-90;
}
</style>
