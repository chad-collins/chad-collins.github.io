<template>
  <Layout headerTitle="Resume" headerSubtitle="Let's build something great together.">
    <section class="section">
      <div class="container">
        <p>
          I do my best to keep my linked resume up to date.
          <a href="/contact/">Get in touch</a> with me if the format doesn't suit your needs.
        </p>

        <div class="wrapper">
          <a
            class="card"
            href="https://drive.google.com/file/d/1OxFjbsuo7TvmTbgV7N8gvJSCSEbjrMn4/view?usp=sharing"
            target="_blank"
          >
            <p class="card__label">Resume</p>
          </a>

          <a
            class="card"
            href="https://docs.google.com/document/d/1w_CKLhCxuxdYepTNCNL3_fctJ4tBS_gxSmpuCp2cDuc/edit?usp=sharing"
            target="_blank"
          >
            <p class="card__label">CV</p>
          </a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  box-sizing: border-box;
  display: flex;
  background-color: $bodyText;
  width: calc(37vw - 20px);
  height: 46vw;
  max-width: 225px;
  max-height: 300px;
  color: $background;
  margin: 3rem 0.5rem;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
}

.card__label {
  font-style: italic;
  font-weight: bolder;
}
@media screen and (min-width: 730px) {
  .card {
    margin: 3rem;
    font-size: 3rem;
  }
}
</style>