<!-- 2nd : Define the component by containing it in its own file !-->
<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    // if it had data() ou behaviour [methods()] it would be nested here
    export default {
    
}
</script>

<style>

    .box { background: #e3e3e3; padding: 10px; border: 1px solid #c5c5c5; margin-bottom: 10px; text-align: center;}

</style>