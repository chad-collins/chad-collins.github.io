<template>
  <Layout headerTitle="Contact Me" headerSubtitle="Let's get in touch">
    <section class="section">
      <div class="container">
        <form class="form" method="POST" action="/success" data-netlify="true">
          <label for="fname">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label for="lname">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." />

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <button class="submit" type="submit">Submit</button>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid $light;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
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