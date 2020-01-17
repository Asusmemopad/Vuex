<template>
  <div>
    <div id="box1">
      <h1>WELCOME</h1>
    </div>
    <div id="box2"></div>
    <div id="box3"></div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#box1 {
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/i1.jpg");
  background-size: cover;
  display: table;
  background-attachment: fixed;
}
#box2 {
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/i2.jpg");
  background-size: cover;
  display: table;
  background-attachment: fixed;
}
#box3 {
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/i3.jpg");
  background-size: cover;
  display: table;
  background-attachment: fixed;
}
h1 {
  font-family: arial black;
  font-size: 50px;
  color:white;
  margin: 0px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
</style>
