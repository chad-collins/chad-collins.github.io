<template>
  <Layout headerTitle="Blog" headerSubtitle="All of my ramblings">
    <section class="section">
      <div class="container">
        <ul>
          <PostList v-for="post in $page.posts.edges" :key="post.node.id" :post="post" />
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
 posts: allPost(filter: { published: {eq: true} }) {
    totalCount
    edges {
      node {
        id
        title
     
        path
        published
     
  
      }
    }

  }
}
</page-query>
<script>
import PostList from "@/components/PostList";
export default {
  components: { PostList },
};
</script>

<style>
</style>