<template>
  <div id="navbar">
    <button class="burger" @click="displayNav = !displayNav" v-bind:class="{ change: displayNav }">
      <div class="burger__line line1"></div>
      <div class="burger__line line2"></div>
      <div class="burger__line line3"></div>
    </button>
    <g-link class="branding" to="/">
      <!-- <g-image class="branding__image" src="@/assets/images/logo--primary.png" /> -->
      <Logo />
      <p class="branding__text">Chad Collins</p>
    </g-link>
    <nav v-bind:class="{ show: displayNav }" class="nav">
      <g-link class="nav__link" to="/projects/">Projects</g-link>
      <g-link class="nav__link" to="/contact/">Contact</g-link>
      <g-link class="nav__link" to="/resume/">Resume</g-link>
      <!-- <g-link class="nav__link" to="/blog/">Blog</g-link> -->

      <div class="nav-links-right">
        <a href="http://github.com/chad-collins">
          <font-awesome class="icon" :icon="['fab', 'github']" />
        </a>
        <a href="http://linkedin.com/in/chadacollins">
          <font-awesome class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: { Logo },
  data() {
    return {
      displayNav: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// Margin between navbar elements and verticle edge
$outer-margin: 1rem;

#navbar {
  display: block;
}

.branding {
  align-items: center;
  display: flex;
  width: max-content;
  margin-left: $outer-margin;
}

.branding__logo {
  align-items: center;
  background-color: $bodyText;
  border-radius: 50%;
  color: $background;
  display: flex;
  font-size: 1.5rem;
  height: 50px;
  justify-content: center;
  margin-right: 0.5rem;
  width: 50px;
  user-select: none;
}

.branding__text {
  font-size: 1.6rem;
  font-weight: 400;
  user-select: none;
}

.nav {
  list-style-type: none;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 0;
  background-color: $bodyText;
  display: flex;
  flex-direction: column;
}
.nav__link {
  margin: 1rem 0 1rem 2rem;
  color: $background;
  font-size: 1.1rem;
}

.burger {
  background-color: inherit;
  box-sizing: none;
  border: none;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: $outer-margin;
}

.burger__line {
  width: 27px;
  height: 4px;
  margin-bottom: 0.25rem;
  background-color: $dark;
  transition: 0.4s;
}

/* Rotate first bar */
.change .line1 {
  -webkit-transform: rotate(-45deg) translate(-7px, 7px);
  transform: rotate(-45deg) translate(-4px, 7px);
}

/* Fade out the second bar */
.change .line2 {
  opacity: 0;
}

/* Rotate last bar */
.change .line3 {
  -webkit-transform: rotate(-45deg) translate(-7px, 7px);
  transform: rotate(45deg) translate(-4px, -7px);
}

.nav-links-right {
  background-color: white;
  border-bottom: 1px solid $light;
  padding: 1rem;
  display: flex;
}

.icon {
  cursor: pointer;
  font-size: 1.5rem;
}

.icon:last-child {
  margin-left: 25px;
}
.show {
  max-height: 300px;
}

@media screen and (min-width: 768px) {
  #navbar {
    display: flex;
    align-items: center;
  }
  .nav {
    display: flex;
    flex-direction: row;
    background-color: $background;
    border: none;
    max-height: unset;
  }

  .nav__link {
    color: $bodyText;
  }

  .burger {
    display: none;
  }
  .nav-links-right {
    position: absolute;
    top: 20px;
    right: $outer-margin;
    border: none;
  }
}
</style>
