<script lang="ts">
import { defineComponent } from "vue";
import type CalculatorType from "@/types/CalculatorTypes";
export default defineComponent({
  data() {
    return {
      calData: {
        calValue: null,
        savedValue: null,
        valResult: null,
        selectOperation: "",
      } as CalculatorType,
    };
  },
  methods: {
    addNumber(number: number) {
      if (this.calData.calValue)
        this.calData.calValue = Number(
          this.calData.calValue.toString() + number.toString()
        );
      else this.calData.calValue = number;
    },
    addOperation(key: string) {
      this.calData.selectOperation = key;
      if (this.calData.savedValue && this.calData.calValue) {
        this.calData.valResult = this.getResult()!;
      } else {
        this.calData.savedValue = this.calData.calValue;
      }
      this.calData.calValue = 0;
    },
    getResult() {
      if (this.calData.savedValue && this.calData.calValue) {
        switch (this.calData.selectOperation) {
          case "+":
            return this.calData.savedValue + this.calData.calValue;
          case "-":
            return this.calData.savedValue - this.calData.calValue;
          case "*":
            return this.calData.savedValue * this.calData.calValue;
          case "/":
            return this.calData.savedValue / this.calData.calValue;
          default:
            return 0;
        }
      }
    },
  },
});
</script>

<template>
  <main>
    <div
      class="relative w-96 rounded-lg overflow-hidden z-10 bg-white/90 shadow-lg"
    >
      <div class="h-64 w-full flex flex-wrap content-end px-5">
        <div class="w-full">
          <input class="w-full h-full text-right text-5xl" />
        </div>
        <div class="w-full h-9 text-right">
          {{ calData.calValue }} - {{ calData.selectOperation }}-{{
            calData.savedValue
          }}
          - {{ calData.valResult }}
        </div>
      </div>
      <div class="w-full rounded-lg overflow-hidden">
        <div class="w-full flex">
          <div class="cal-button w-1/4">C</div>
          <div class="cal-button w-1/4" @click="addOperation('%')">%</div>
          <div class="cal-button w-1/4">
            <v-icon name="co-delete" :scale="1.6" />
          </div>
          <div class="cal-button w-1/4" @click="addOperation('/')">/</div>
        </div>
        <div class="flex">
          <div class="w-3/4 flex flex-wrap">
            <div
              class="cal-button w-1/3"
              @click="addNumber(i)"
              v-for="i in 9"
              :key="i"
            >
              {{ i }}
            </div>
            <div class="w-full flex">
              <div class="cal-button w-1/3">.</div>
              <div class="cal-button w-1/3" @click="addNumber(0)">0</div>
              <div class="cal-button w-1/3">
                <v-icon name="co-av-timer" :scale="1.6" />
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <div class="cal-button w-full" @click="addOperation('x')">x</div>
            <div class="cal-button w-full" @click="addOperation('-')">-</div>
            <div class="cal-button w-full" @click="addOperation('+')">+</div>
            <div class="cal-button w-full" @click="addOperation('=')">=</div>
          </div>
        </div>
      </div>
    </div>
    <div class="blob-box"></div>
  </main>
</template>

function getResult(): number|null { throw new Error("Function not
implemented."); }
