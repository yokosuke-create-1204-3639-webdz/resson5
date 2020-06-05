<template>
  <div class="home">
    <input type="text" placeholder="name" v-model="name">
    <input type="number" placeholder="age" v-model="age">
    <button @click="add">送信</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  // deta(){
  //   return{
  //     name: "",
  //     age: ""
  //   };
  // },
  methods: {
    add() {
      var db = firebase.firestore();
      db.collection("users")
        .add({
          name: "太郎",
          age: 20
        })
        .then(doc => {
          console.log(doc);
        });
    }
  }
};
// export default{
//   created(){
//     const date = new Date()
//     const createdTime = date.getMilliseconds()
//     console.log(createdTime)
//   },
//   mounted(){
//     const date = new Date()
//     const mountedTime = date.getMilliseconds()
//     console.log(mountedTime)
//   }
</script>
