<template>
  <div id="navbar">
    <button
      class="burger"
      @click="displayNav = !displayNav"
      v-bind:class="{ change: displayNav }"
    >
      <div class="burger__line line1"></div>
      <div class="burger__line line2"></div>
      <div class="burger__line line3"></div>
    </button>
    <g-link class="branding" to="/">
      <!-- <g-image class="branding__image" src="@/assets/images/logo--primary.png" /> -->
      <div class="branding__logo">CC</div>
      <p class="branding__text">Chad Collins</p>
    </g-link>
    <nav v-bind:class="{ show: displayNav }" class="nav">
      <g-link class="nav__link" to="/projects">Projects</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
      <a
        class="nav__link"
        href="https://drive.google.com/file/d/1OggN9846DI3wN7UiBQktka4VUSQXe4BI/view?usp=sharing"
        target="_blank"
        >Resume</a
      >
      <div class="nav-links-right">
        <a href="http://github.com/chad-collins">
          <SvgIcon class="icon" icon="github" height="20" width="20" />
        </a>
        <a href="http://linkedin.com/in/chadacollins">
          <SvgIcon class="icon" icon="linkedin" height="20" width="20" />
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  components: {
    SvgIcon,
  },
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
  display: inline-block;
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
  margin-right: 0.8rem;
  width: 50px;
}

.branding__text {
  font-size: 1.6rem;
  font-weight: 400;
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
}

.burger {
  background-color: inherit;
  box-sizing: none;
  border: none;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: $outer-margin;
}

.burger__line {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
}

/* Rotate first bar */
.change .line1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

/* Fade out the second bar */
.change .line2 {
  opacity: 0;
}

/* Rotate last bar */
.change .line3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

.nav-links-right {
  background-color: white;
  border-bottom: 1px solid $light;
  padding: 1rem;
}

.icon {
  cursor: pointer;
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
