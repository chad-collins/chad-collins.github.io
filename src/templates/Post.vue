<template>
  <Layout>
    <section class="section">
      <div class="container">
        <g-link to="/" class="link">&larr; Go Back</g-link>

        <article class="article">
          <div class="article__heading">
            <h1 class="article__title">{{$page.post.title}}</h1>
            <p>{{ $page.post.date }} / {{ $page.post.timeToRead }} min read</p>
          </div>

          <p v-html="$page.post.content" />
        </article>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "MMMM Do, YYYY")
    timeToRead
  }
}
</page-query>

<style lang="scss" scoped>
.post-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: "Stylish";
}

.post-date {
  font-size: 16px;
  font-weight: 400;
}

.article__heading {
  border-bottom: 1px solid $light;
}

.article__title {
  font-size: 3rem;
  margin-bottom: 0;
}
.post-content {
}
</style>