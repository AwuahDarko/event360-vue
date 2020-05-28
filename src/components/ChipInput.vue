<template>
    <div class="chip-container">
      <div class="chip" v-for="(chip, i) of chips" :key="chip.label">
        {{chip}}
        <i class="material-icons" @click="deleteChip(i)">clear</i>
      </div>
      <input class="form-control" v-model="currentInput" @keypress.space="saveChip" @keydown.delete="backspaceDelete">
    </div>
</template>





<script>
export default {
    props: {
    set: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chips:[],
      currentInput: ''
    }
  },
  methods: {
    saveChip() {
      const {chips, currentInput, set} = this;
      ((set && chips.indexOf(currentInput) === -1) || !set) && chips.push(currentInput);
      this.currentInput = '';
    },
    deleteChip(index) {
      this.chips.splice(index, 1);
    },
    backspaceDelete({which}) {
      which == 8 && this.currentInput === '' && this.chips.splice(this.chips.length - 1);
    }
  },
}
</script>



<style scoped>
.chip-container {
  width: 400px;
  border: 1px solid #ccc;
  min-height: 34px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.chip-container .chip {
  margin: 4px;
  background: #e0e0e0;
  padding: 0px 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
}
.chip-container .chip i {
  cursor: pointer;
  opacity: 0.56;
  margin-left: 8px;
  font-size: 1rem;
}
.chip-container input {
  flex: 1 1 auto;
  width: 30px;
  border: none;
  outline: none;
  padding: 4px;
}

</style>