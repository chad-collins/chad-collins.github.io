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

          <label for="name">Your name</label>
          <input type="text" name="name" placeholder="Your name .." v-model="formData.name" />

          <label for="email">Your email</label>
          <input type="email" name="email" placeholder="Your email .." v-model="formData.email" />

          <label for="email">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject line .."
            v-model="formData.subject"
          />

          <label for="message">Message</label>
          <textarea name="message" v-model="formData.message"></textarea>

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
  height: 3.3rem;
  width: 100%;
}

label {
  margin-top: 1rem;
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