<template>
  <Layout :headerTitle="$page.project.title" :headerSubtitle="$page.project.subtitle">
    <section class="section">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb__item">
            <g-link to="/projects">Projects</g-link>
          </li>
          <li class="breadcrumb__item">/</li>
          <li class="breadcrumb__item">
            <g-link :to="$page.project.path">{{$page.project.title}}</g-link>
          </li>
        </ul>
        <article class="article">
          <g-image
            v-if="$page.project.featuredImage"
            class="article__image"
            :src="$page.project.featuredImage"
          />
          <h2 v-if="$page.project.content" class="article__heading">Summary</h2>
          <p v-html="$page.project.content" />
          <h2 v-if="$page.project.tools[1]" class="article__heading">Skills &#38; Tools</h2>
          <ul class="tools-list">
            <li class="tool" v-for="tool in $page.project.tools" :key="tool.id">
              <g-image
                class="tool__image"
                :src="require(`!!assets-loader?width=20!@images/${tool.image}`)"
              />
              {{tool.name}}
            </li>
          </ul>
          <h2 v-if="$page.project.deployedLink" class="article__heading">See It Live</h2>
          <a v-if="$page.project.deployedLink" :href="$page.project.deployedLink">
            <font-awesome class="icon" :icon="['far', 'sun']" />
            {{$page.project.deployedLink}}
          </a>
          <h2 v-if="$page.project.sourceCodeLink" class="article__heading">See The Code</h2>
          <a v-if="$page.project.sourceCodeLink" :href="$page.project.sourceCodeLink">
            <font-awesome class="icon" :icon="['fab', 'github']" />
            {{$page.project.sourceCodeLink}}
          </a>
        </article>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
   project: project (id: $id) {
    id
    title
    path
    subtitle
    sourceCodeLink
    deployedLink
    content
    featuredImage(width: 800)
    tools {
      id
      name
      image
    }
  }

}
</page-query>
<script>
export default {
  name: "Project Template",
  metaInfo() {
    return {
      title: this.$page.project.name,
      meta: [{ name: "author", content: "Chad Collins" }],
    };
  },
};
</script>

#

<style lang="scss">
.article__heading:not(:first-child) {
  margin-top: 2rem;
}

.article__image {
  max-width: 100%;
}

.icon {
  margin-right: 5px;
  font-size: 1.2rem;
}
.tools-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.tool {
  display: flex;
  align-items: center;
  margin: 0.3rem;
  background-color: $bodyText;
  color: $background;
  font-size: smaller;
  padding: 0.2rem 0.7rem;
  border-radius: 4px;
  font-weight: 700;
}

.tool__image {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.breadcrumb {
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 2rem;
}
.breadcrumb__item {
  margin: 0 0.5rem;
}
</style>