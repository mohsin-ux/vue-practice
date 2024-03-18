<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" v-model="password" />

    <label>Role:</label>
    <select v-model="role">
      <option value="designer">Web Designer</option>
      <option value="developer">Web Developer</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div>
      <input type="checkbox" value="shaun" v-bind="names" />
      <label>shaun</label>
    </div>

    <div>
      <input type="checkbox" value="yoshi" v-bind="names" />
      <label>yoshi</label>
    </div>

    <div>
      <input type="checkbox" value="mario" v-bind="names" />
      <label>mario</label>
    </div>
  </form>

  <p>Email:{{ email }}</p>
  <p>Password:{{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: " ",
      password: "",
      role: "designer",
      terms: true,
      names: [],
    };
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  padding: 40px;
  background: white;
  border-radius: 10px;
  text-align: left;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.7em;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 1px;
}
input,
select {
  width: 100%;
  padding: 10px 6px;
  color: #555;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0;
  position: relative;
  top: 2px;
}
</style>
