<template>
    <!-- <flipper :flipped="flipped" @click="flipCard" height=50% width=50% transition="ease"> -->
        <div @click="flipText" :class="cardClass">
            <div class="card card-front" v-if="frontSeen">{{front}}</div>
            <div class="card card-back" v-if="backSeen">{{back}}</div>
            <!-- <div slot="back" class="card">{{back}}</div> -->
        </div>
    <!-- </flipper> -->

</template>

<script>
import Flipper from 'vue-flipper';
export default {
    name:'memory-item',
    components:{
        Flipper,
    },
    props:['front','back'],
    data(){
        return{
            frontSeen:true,
            backSeen:false,
            flipped:false,
            cardClass:"card-container",
        }

    },
    methods:{
        flipText(){
            this.frontSeen = !this.frontSeen;
            this.backSeen = !this.backSeen;
            if(this.cardClass == "card-container"){
                this.cardClass += " show-answer";
            }
            else{
                this.cardClass = "card-container";
            }

        },
        flipCard(){
            this.flipped = !this.flipped;
        }
    }
    
}
</script>

<style src="vue-flipper/dist/vue-flipper.css" />
<style >
.card{
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    width: 500px;
    height: 300px;
    background-color: #FFF;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-container{
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
    
}


.show-answer{
    transform: rotateX(180deg);
}

.card-frot{
    transform: rotateX(0deg);
}

.card-back{
  transform: rotateX(180deg);
}

    
</style>