<template>
    <div class="addNewPage">
        <h1>Add New Card
            <button @click="goMemoryPage" class="clearbtn"><i class="fa fa-times"></i></button>
        </h1>
        

        <div class="question input-container">
            <label for="">Question</label>
            <textarea placeholder="Enter Question..." v-model="question"></textarea>
        </div>
        
        <div class="answer input-container">
            <label for="">Answer</label>
            <textarea placeholder="Enter Answer..." v-model="answer"></textarea>
        </div>

        <div>
            <button @click="addNewCard" class="add-card-btn">
            <i class="fa fa-plus"></i>
            Add Card
        </button>
        </div>

    </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
export default {
    name:"add-new-page",
    data(){
        return{
            question:"",
            answer:"",
            cardList:[],
        }
    },
    methods:{
        initCards(){
            if(localStorage.getItem('cards')){
                this.cardList = JSON.parse(localStorage.getItem('cards'));
            }
        },
        addNewCard(){
            if(this.question !== "" || this.answer !== ""){
                this.cardList.push([this.question,this.answer]);
                localStorage.setItem('cards',JSON.stringify(this.cardList));
                this.question = "";
                this.answer = "";
            }
            this.goMemoryPage();

        },
        goMemoryPage(){
            this.$router.push('/')
        }
    },
    mounted:function(){
        this.initCards();
    }
    
}
</script>


<style >

body{
    background-color: #FAFAFA;
    min-height: 100vh;
}
.addNewPage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1{
    position: relative;
    margin-bottom: 30px;
    text-align: center;
}

h1 button{
    position: absolute;
    right: 0;
    transform: translate(120%, 50%);
    border: none;
    background-color: transparent;
}

label{
    display: block;
    margin-bottom: 10px;
}

.input-container{
    margin-bottom: 10px;
}



textarea{
    width: 500px;
    max-width: 100%;
    padding: 12px;
    font-size: 16px;
}

.add-card-btn{
    border: none;
    background-color: #55BB8E;
    padding: 10px;
    border-radius: 5px;
    color: #FFF;
    display: block;
    text-align: center;
    margin-top: 20px;
}

button:focus{
    outline: none;
}


    
</style>