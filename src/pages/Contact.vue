<template>
  <Layout headerTitle="Contact Me" headerSubtitle="Let's get in touch">
    <section class="section">
      <div class="container">
        <form
          class="form"
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

          <div class="form__info-wrapper">
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" v-model="formData.name" />
          </div>
          <div class="form__info-wrapper">
            <label for="email">Your email</label>
            <input type="email" name="email" v-model="formData.email" />
          </div>
          <div class="form__info-wrapper">
            <label for="email">Subject</label>
            <input type="text" name="subject" v-model="formData.email" />
          </div>

          <div class="form__message-wrapper">
            <label for="message">Message</label>
            <textarea name="message" v-model="formData.message"></textarea>
          </div>

          <button class="submit" type="submit">Submit</button>
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
.form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}
.form__info-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 200px;
  border: 1px solid $light;
  border-radius: 4px;
  margin-bottom: 20px;
  resize: vertical;
}

.submit {
  background-color: $bodyText;
  color: $background;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit:hover {
  background-color: $bodyText;
}
</style>