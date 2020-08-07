<template>
  <Layout headerTitle="My Projects" headerSubtitle="See what I've been working on.">
    <section class="section">
      <div class="grid-wrapper">
        <ul class="cards-grid">
          <li class="grid-item" v-for="project in $page.allProject.edges" :key="project.node.id">
            <g-link :to="project.node.path">
              <g-image
                class="card__image"
                :src="
                  project.node.featuredImage ||
                    `https://via.placeholder.com/400x225?text=No+Image+Available`
                "
              ></g-image>
            </g-link>
            <g-link :to="project.node.path">
              <h2 class="card__title">{{ project.node.title }}</h2>
            </g-link>
            <p class="card__subtitle">{{ project.node.subtitle }}</p>
          </li>
          <li class="grid-item"></li>
          <li class="grid-item"></li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allProject(filter: { published: {ne: false} }) {
    totalCount
    edges {
      node {
        id
        title
        subtitle
        path
        featuredImage(width: 400)
        tools {
          id
        }
      }
    }

  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "My Projects",
    meta: [
      {
        name: "author",
        content: "Chad Collins",
      },
    ],
  },
};
</script>

<style lang="scss">
.grid-wrapper {
  display: flex;
  justify-content: center;
  max-width: 1800px;
  padding: 2rem;
}
// 3 Wide Card Grid with media query
.cards-grid {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  width: 100%;
  max-width: 100vw;
  width: 1400px;
  justify-content: center;
}

.grid-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem;
  max-width: 400px;
  flex-wrap: wrap;
  transition: all 0.2s ease-in-out;
}

.card__image {
  width: 100%;
}

.card__title {
  margin: 0.3rem 0;
  padding: 0;
}
.card__subtitle {
  margin: 0;
  padding: 0;
}

/*Medium Width */
@media screen and (min-width: 940px) {
  .grid-item {
    width: calc(100% / 2);
  }
}
/*Wide Width */
@media screen and (min-width: 1300px) {
  .grid-item {
    width: calc(100% / 3);
  }
}
</style>
