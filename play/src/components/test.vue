<script setup lang="ts" name="JsPlugin">
import UtilsVue from '@double_ming/utils-vue'

</script>

<template>
    <div>
       <UtilsVue />
    </div>
</template>

<style lang="scss" scoped>
#screen {
    height: 100vh;
}

.action {
    position: fixed;
    z-index: 99999999;
    left: 0;
    top: 0;
    background-color: #1a1a1a;
    
    &-text {
        padding: 0.6em 1.2em;
        color: white;
    }

    button {
        color: white;
    }

    &-info {
        padding: 0.6em 1.2em;
        text-align: left;
        font-size: 20px;
        color: red;
    }

    button {
        width: 100px;
    }
}
</style>
