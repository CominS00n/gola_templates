<template>
    <div v-if="!isloaded" class="h-screen flex flex-col items-center justify-center text-center font-headers">
        <div class="myMove uppercase text-[#DB574D] text-3xl space-y-3">
            <h1>Jacob</h1>
            <h1>Grønberg</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageLoader",
    data() {
        return{
            isloaded: false
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState == "complete"){
                this.isloaded =true
            }
        }
        
    }
}
</script>

<style scoped>
    .myMove{
        animation: myMove 4s infinite;
    }

    @keyframes myMove {
        0% {
            scale: 1;
        }
        50% {
            scale: 1.5;
        }
        100% {
            scale: 1;
        }
    }
</style>