<template>

  <div class="p-3" style="max-width: 400px; margin: 50px auto; background: #234">


    <div class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-white bg-vue-dark">
      {{ calculatorValue || 0 }}
    </div>


    <div class="row no-gutters">
      <div class="col-3" v-for="n in calculatorElements" :key="n">
        <div class="lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class"
             :class="{'bg-vue-green': ['C','*','/','-','+','%','='].includes(n)}"
             @click="action(n)"
        >
          {{n}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },

  data() {
    return {
      calculatorValue: '',
      calculatorElements: ['C','*','/','-',7,8,9,'+',4,5,6,'%',1,2,3,'=',0,'.'],
      operator: null,
      previousCalculatorValue: '',
    }
  },

  methods: {
    action(n){

      /* Append value */
      if(!isNaN(n) || n === '.'){
        this.calculatorValue += n + '';
      }

      /* Clear value */
      if(n === 'C'){
        this.calculatorValue = '';
      }

      /* Percentage function*/
      if(n === '%'){
        this.calculatorValue = this.calculatorValue / 100 + '';
      }

      /* Operators */
      if(['/','*','-','+'].includes(n)){
        this.operator = n;
        this.previousCalculatorValue = this.calculatorValue;
        this.calculatorValue = '';
      }

      /* Calculating result using the evalu function */
      if(n === '='){
        this.calculatorValue = eval(
            this.previousCalculatorValue + this.operator + this.calculatorValue
        );
        this.previousCalculatorValue = '';
        this.operator = null;
      }


    }
  }
}
</script>


<style scoped>
.bg-vue-dark {
  background: rgba(2, 0, 255, 0.24);
}
.hover-class:hover {
  cursor: pointer;
  background: #5d17b3;
}
.bg-vue-green {
  background: #a11b80;
}
</style>