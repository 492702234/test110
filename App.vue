<template>
    <div>
        <h1>这是APP组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodsList">GoodsList</router-link>
        <router-link to="/goodsList">多增加了一个功能</router-link>
        <router-link to="/goodsList">增加了第三个功能</router-link>
        <router-link to="/goodsList">增加了第四个功能</router-link>
        <router-link to="/goodsList">增加了第五个功能</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>