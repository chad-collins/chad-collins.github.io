<template>
  <div>
    <Navbar />
    <main class="layout" role="main">
      <section class="section">
        <div class="container">
          <div class="header">
            <h1 class="header__title">{{headerTitle}}</h1>
            <h2 v-if="headerSubtitle" class="header__subtitle lined-heading">{{headerSubtitle}}</h2>
          </div>
        </div>
      </section>

      <slot />
      <div class="footer">
        <p>
          &copy;2020. Built by
          <a href="http://linkedin.com/in/chadacollins">Chad Collins</a>
        </p>
      </div>
    </main>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
export default {
  components: { Navbar },
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.header__title {
  padding: 0;
  margin: 0;
  font-size: 2rem;
}

.header__subtitle {
  margin: 0;

  font-weight: 200;
  font-size: small;
  font-weight: 600;
  padding: 0;
}

.footer {
  padding-top: calc(30rem / 5);
  text-align: center;
  font-size: 1rem;
  padding-bottom: 3rem;
}

@media screen and (min-width: 940px) {
  .header__title {
    font-size: 4.5rem;
  }
  .header__subtitle {
    font-size: 1.3rem;
  }
}
</style>
