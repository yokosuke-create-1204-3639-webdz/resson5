<template>
  <div id="app">
    <div id="nav">
     <router-view />
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  color: white;
  font-family: "Noto Sans JP"; }
  html,
  body {
    background-color: #20262e;
  }
</style>