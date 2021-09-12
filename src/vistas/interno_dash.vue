<template>
    <div class="paneldash">
        <div class="paneldash_detalle"></div>
        <div class="paneldash_grafica"></div>
    </div>
</template>
<style scoped>
.paneldash{
    /* outline: 2px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
}
.paneldash_detalle{
    outline: 2px solid green;
    width: 30%;
    height: 100%;
}
.paneldash_grafica{
    outline: 2px solid red;
    width: 70%;
    height: 100%;
}
</style>