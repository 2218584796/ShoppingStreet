<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/tick.svg" alt="">
  </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props:{
          isChecked:{
            type:Boolean,
            default:false
          }
      }
    }
</script>

<style scoped>
.check-button{
  border: 1px solid #A9A9A9;
  border-radius: 50%;
}
  .check{
    border-color: var(--color-tint);
    background-color: var(--color-tint);
  }
</style>
