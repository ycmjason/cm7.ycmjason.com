<template>
  <header>
    <div class="container">
      <SidebarButton class="sidebar-button" @toggle-sidebar="$emit('toggle-sidebar')"></SidebarButton>
      <nuxt-link to="/" class="site-name">Cm7</nuxt-link>
      <div class="site-tag">alpha</div>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue';

export default {
  components: {
    SidebarButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

header {
  background-color: $color-primary;
  color: $color-background;
  box-shadow: 0 1px 3px #656565;
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100vw;
  height: $header-height;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}

.site-name {
  font-family: $font-secondary;
  color: currentColor;
  font-weight: 300;
}

.container {
  display: flex;
  align-items: center;
  padding: 1rem;
}

.sidebar-button {
  margin-right: 1rem;
  @media (min-width: $media-breakpoint-md) {
    display: none;
  }
}

.site-tag {
  text-transform: uppercase;
  font-size: 0.7rem;
  align-self: flex-end;
}
</style>
