<template>
  <Layout headerTitle="Resume" headerSubtitle="Let's build something great together.">
    <section class="section">
      <div class="container">
        <p>
          I do my best to keep my linked resume up to date.
          <a href="/contact/">Get in touch</a> with me if the format doesn't suit your needs.
        </p>

        <div class="wrapper">
          <a class="card" href="/documents/chad_collins_resume.pdf" target="_blank" download>
            <p class="card__title">Resume</p>
          </a>

          <a class="card" href="/documents/chad_collins_cv.docx" target="_blank">
            <p class="card__title">CV</p>
          </a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container"></div>
    </section>
  </Layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.iframe {
  width: 100vw;
  max-width: 100%;
  height: max-content;
  border: 0;
}

.wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: calc(37vw - 20px);
  height: 46vw;
  max-width: 225px;
  max-height: 300px;
  border: 1px solid $light;
  margin: 3rem 0.5rem;
}

.card__title {
  font-size: 1.3rem;
  font-style: italic;
  font-weight: bolder;
  user-select: none;
}

@media screen and (min-width: 730px) {
  .card__title {
    font-size: 2.5rem;
  }
  .card {
    margin: 3rem;
  }
}
</style>