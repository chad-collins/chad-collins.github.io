<template>
  <Layout headerTitle="Hi, I'm Chad." headerSubtitle="I'm a Full-Stack Developer">
    <section id="about" class="section">
      <div class="container">
        <p>My name is Chad Collins and I'm a software developer based in Columbus Ohio. I formerly spent several years in the wireless industry with experiences ranging from management, tech support, and customer service. I made the decision to become a software developer because I wanted a career that allowed me to combine my creative and analytical skill sets to solve problems. Programming allows me to collaborate on projects and watch my ideas come to life as I code, and I can’t think of a better way to spend my life.</p>
      </div>
    </section>

    <section id="summary" class="section">
      <div class="container">
        <h2 class="lined-heading">What I Bring</h2>
        <div class="summary__grid">
          <div class="summary__box">
            <h3 class="box__title">A Passion to Learn</h3>
            <p
              class="box__content"
            >I love gaining new skills and sharpening my existing ones. Technology is always moving forward, and learning new skills to keep pace is a challenge that drives me.</p>
          </div>

          <div class="summary__box">
            <h3 class="box__title">Broad Business Exposure</h3>
            <p
              class="box__content"
            >I have several years of experience working for a Fortune 500 company, building and managing client-facing teams tasked with creating exceptional client experiences. I have extensive experience collaborating as part of a team to reach our shared vision.</p>
          </div>

          <div class="summary__box">
            <h3 class="box__title">Full Stack Experience</h3>
            <p
              class="box__content"
            >I've worked on projects where I needed to be involved through every part of process, from creating Java and Spring Restful APIs, building the decoupled front-end with React, and doing all of the styling from scratch."</p>
          </div>
        </div>
      </div>
    </section>
    <section id="tech" class="section">
      <div class="container">
        <h2 class="lined-heading">Technology</h2>
        <h3 class="box__title">Front End</h3>
        <ul class="tools">
          <li class="tools__item" v-for="tool in $page.frontEnd.edges" :key="tool.id">
            <g-image
              class="tools__image"
              :src="require(`!!assets-loader?width=50!@images/${tool.node.image}`)"
            />
            <p class="tools__name">{{tool.node.name}}</p>
          </li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
        </ul>

        <h3 class="box__title">Back End</h3>
        <ul class="tools">
          <li class="tools__item" v-for="tool in $page.backEnd.edges" :key="tool.id">
            <g-image
              class="tools__image"
              :src="require(`!!assets-loader?width=50!@images/${tool.node.image}`)"
            />
            <p class="tools__name">{{tool.node.name}}</p>
          </li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
          <li class="tools__item spacer"></li>
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
  frontEnd: allTools(filter: { family: { eq: "frontEnd" }})  {
    edges {
      node {
        id
        name
        image
        family
      }
    }
  }
  backEnd: allTools(filter: { family: { eq: "backEnd" }})  {
    edges {
      node {
        id
        name
        image
        family
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About Me",
    meta: [
      {
        name: "author",
        content: "Chad Collins",
      },
    ],
  },
};
</script>


<style>
.tools {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
}

.tools__item {
  display: flex;
  padding: 3px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1px;
  width: 100px;
  flex-wrap: wrap;
  transition: all 0.2s ease-in-out;
}

.tools__name {
  font-size: small;
}

.tools__image {
  margin-right: 0.5rem;
  width: 30px;
  height: auto;
}

.spacer {
  border: 0;
}

@media screen and (min-width: 940px) {
  .tools__item {
    width: calc((100% / 6) - 2px);
  }
  .tools__image {
    margin-right: 0.5rem;
    width: 50px;
    height: auto;
  }

  .summary__grid {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }
  .summary__box {
    width: calc((100% / 3) - 30px);
  }
}
</style>
