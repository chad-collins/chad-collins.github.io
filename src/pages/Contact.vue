<template>
  <Layout headerTitle="Contact Me" headerSubtitle="Let's get in touch">
    <section class="section">
      <div class="flex-wrapper">
        <div class="column">
          <p>
            <font-awesome :icon="['far', 'envelope']" />
            <a href="mailto:contact@chadcollins.net">&nbsp;&nbsp;contact@chadcollins.net</a>
          </p>
          <p>
            <font-awesome :icon="['fab', 'linkedin']" />
            <a
              href="https://linkedin.com/in/chadacollins"
            >&nbsp;&nbsp;https://linkedin.com/in/chadacollins</a>
          </p>
          <p>
            <font-awesome :icon="['fab', 'github']" />
            <a href="https://github.com/chad-collins">&nbsp;&nbsp;https://github.com/chad-collins</a>
          </p>
        </div>

        <form
          class="form column"
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <label for="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name .."
            v-model="formData.name"
            required
          />

          <label for="email">Your email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email .."
            v-model="formData.email"
            required
          />

          <label for="subject">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject line .."
            v-model="formData.subject"
            required
          />

          <label for="message">Message</label>
          <textarea name="message" v-model="formData.message" required></textarea>

          <button class="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style lang="scss">
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  max-width: 1200px;
}
.column {
  margin: 2rem;
}
.form {
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}

textarea {
  width: 100%;
  height: 200px;
  border: 1px solid $light;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  resize: vertical;
  box-sizing: border-box;
}

input {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  padding-left: 0.5rem;
  height: 3.3rem;
  width: 100%;
}

label {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.submit:hover {
  background-color: $bodyText;
}

/*** iPhone and iOS Form Input Zoom Fixes ***/
/* Fix Input Zoom on devices older than iPhone 5: */
@media screen and (device-aspect-ratio: 2/3) {
  textarea,
  input {
    font-size: 16px;
  }
}

/* Fix Input Zoom on iPhone 5, 5C, 5S, iPod Touch 5g */
@media screen and (device-aspect-ratio: 40/71) {
  textarea,
  input {
    font-size: 16px;
  }
}

/* Fix Input Zoom on iPhone 6, iPhone 6s, iPhone 7  */
@media screen and (device-aspect-ratio: 375/667) {
  textarea,
  input {
    font-size: 16px;
  }
}

/* Fix Input Zoom on iPhone 6 Plus, iPhone 6s Plus, iPhone 7 Plus, iPhone 8, iPhone X, XS, XS Max  */
@media screen and (device-aspect-ratio: 9/16) {
  textarea,
  input {
    font-size: 16px;
  }
}
</style>