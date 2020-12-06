const app = new Vue ({
    el: "#app",
    data:{
        ciao: 'hola',
        
    },
    created(){

    },
    methods:{
        goDown(){
            // window.scrollTo(0, 500); 
            this.$refs.all.scrollTop += this.$refs.element.scrollHeight;
        },
        goUp(){
            this.$refs.all.scrollTop -= this.$refs.element.scrollHeight;

        }
    }
})