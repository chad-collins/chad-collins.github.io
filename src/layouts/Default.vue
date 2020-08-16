<template>
  <div>
    <Navbar />
    <main class="layout" role="main">
      <section class="section">
        <div class="container">
          <div class="header">
            <h1 class="header__title">{{headerTitle}}</h1>
            <h2 v-if="headerSubtitle" class="header__subtitle">{{headerSubtitle}}</h2>
          </div>
        </div>
      </section>

      <slot />
      <div class="footer">
        <p>
          &copy;2020. Built by
          <a href="http://linkedin.com/in/chadacollins">Chad Collins</a>
        </p>
        <g-link to="/">
          <Logo />
        </g-link>
      </div>
    </main>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import Logo from "@/components/Logo.vue";
export default {
  components: { Navbar, Logo },
  props: { headerTitle: "", headerSubtitle: "" },
};
</script>

<style lang="scss">
html,
body {
  font-family: raleway, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-style: normal;
  line-height: 29px;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.header {
  border-bottom: 1px solid $light;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin-top: 2rem;

  margin-bottom: 10px;
}

.header__title {
  line-height: 55px;
  font-size: 3rem;
  padding: 0;
  margin: 0;
}

.header__subtitle {
  margin-top: 10px;
  font-weight: 200;
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
}

.footer {
  padding-top: calc(30rem / 5);
  text-align: center;
  font-size: 1rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  p {
    margin-bottom: 2rem;
  }
}

@media screen and (min-width: 940px) {
  .header {
    margin-top: 4.5rem;
    justify-content: center;
  }
  .header__title {
    font-size: 4.5rem;
  }
  .header__subtitle {
    font-size: 1.3rem;
    margin-top: 35px;
  }
}
</style>
