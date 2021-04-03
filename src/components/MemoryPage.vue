<template>
    <div>
        <button id="clear" class="btn-clear" @click="clearCards">
            <i class="fa fa-trash"></i> Clear Cards
        </button>
        <div class="page-container">
             <h1>Memory Cards 
                <button id="show" class="btn btn-1" @click="goAddPage">
                    <i class="fa fa-plus"></i> 
                    Add New Card
                </button>
            </h1>
            <div class="card-container">
                <memory-item class="memoryCard"  v-if="cardList.length == 0"
                    front="Please create a new card"
                    back = "Please create a new card"></memory-item>
                <!-- <memory-item 
                    :front="showCardIndex != 0 ? cardList[showCardIndex-1][0] :cardList[0][0] " 
                    :back="showCardIndex != 0 ? cardList[showCardIndex-1][0] :cardList[0][0]" 
                    class="memoryCard left"
                >
                </memory-item> -->
                <memory-item 
                    :front="cardList[showCardIndex][0]" 
                    :back="cardList[showCardIndex][1]" 
                    class="memoryCard active"
                    v-if="cardList.length != 0"
                >
                </memory-item>
                <!-- <memory-item 
                    :front="showCardIndex != cardList.length -1 ? cardList[showCardIndex+1][0] :cardList[cardList.length -1][0]" 
                    :back="showCardIndex != cardList.length -1 ? cardList[showCardIndex+1][0] :cardList[cardList.length -1][0]" 
                    class="memoryCard right"
                >
                </memory-item> -->
            </div>
        
            <div class="navigation">
                <button id="prev" class="nav-button" @click="prevPage">
                    <i class="fa fa-arrow-left"></i>
                </button>

                <p id="current">{{showCardIndex+1}} / {{cardList.length}}</p>

                <button id="next" class="nav-button" @click="nextPage">
                    <i class="fa fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import MemoryItem from './MemoryItem';
import 'font-awesome/css/font-awesome.min.css'
export default {
    name:'memory-page',
    data(){
        return{
            showCardIndex:0,
            cardList:[],
            
        }

    },
    components:{
        MemoryItem,
    },
    methods:{
        initCard(){
            if(localStorage.getItem('cards')){
                this.cardList = JSON.parse(localStorage.getItem('cards'));
            }
            
        },
        prevPage(){
            if(this.cardList.length !== 0){
                if(this.showCardIndex == 0){
                this.showCardIndex = this.cardList.length - 1;}
                else{
                this.showCardIndex--
                }
            }   
        },
        nextPage(){
            if(this.cardList.length !== 0){
                if(this.showCardIndex == this.cardList.length - 1){
                this.showCardIndex = 0;
                }else{
                this.showCardIndex++;
            }
            }

            
        },
        clearCards(){
            localStorage.clear('cards');
            this.cardList = [];
            this.showCardIndex = -1;

        },
        goAddPage(){
            this.$router.push('/addNewPage')
        }
    },
    mounted:function(){
        this.initCard();
    }
    
}
</script>


<style >
.page-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
}


.navigation{
    display: flex;
    margin: 20px 0;
}


button{
    border: none;
    background: transparent;
}

.btn-1{
    background-color:  #55BB8E;
    font-size: 14px;
    color: #FFF;
    padding: 5px;
    border-radius: 4px;
}

.btn-clear{
    position: absolute;
    bottom: 30px;
    left: 30px;
    border: 1px solid #5F5F5F;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
}

.nav-button{
    margin: 0 20px;
}
.card-container{
    position: relative;
}

.memoryCard{
    width: 500px;
    height: 300px;

 
}
.active{


}
.left{

}

    
</style>