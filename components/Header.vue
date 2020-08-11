<template>
  <div class="container-fluid p-0" >
    <div class="row mainframe">
      <div class="currency col" v-for="(x,y) in widthArray" :key="y">
        <div @click.prevent="getChart(x)">
          <div class="container rowsize p-0">
            <div class="row inlineframe">
              <div class="col-7 text-left">{{x.name}}</div>
              <div
                class="col-5 text-right"
                :class="{ success : x.control , danger : !x.control}"
              >{{x.value}}</div>
            </div>
          </div>
          <div class="container rowsize p-0">
            <div class="row inlineframe">
              <div class="col-7 text-left">
                <div v-if="x.control" :class="{ success : x.control}">
                  <i class="fa fa-arrow-up"></i>
                  {{x.percent}}%
                </div>
                <div v-else :class="{danger : !x.control}">
                  <i class="fa fa-arrow-down"></i>
                  {{x.percent}}%
                </div>
              </div>

              <div
                class="col-5 text-left"
                :class="{ success : x.control , danger : !x.control}"
              >{{x.variation}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myarray"],
  data() {
    return {
      widthArray: null,
      browserWidth: 0,
    };
  },
  created() {
    this.widthArray = [...this.myarray];
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.browserWidth = window.innerWidth;
    },
    getChart(x){
      this.$store.dispatch('getDetailArray',x);
    }
  },
  watch: {
    "widthArray.length"(data) {
      console.log(data, "değişti");
      console.log(this.widthArray);
    },
    browserWidth() {
      if (this.browserWidth < 1120) {
        this.$delete(this.widthArray, 6);
      }
      if (this.browserWidth < 960) {
        this.$delete(this.widthArray, 5);
      }
      if (this.browserWidth < 800) {
        this.$delete(this.widthArray, 4);
      }
      if (this.browserWidth < 640) {
        this.$delete(this.widthArray, 3);
      }
      if (this.browserWidth < 480) {
        this.$delete(this.widthArray, 2);
      }
      if (this.browserWidth < 320) {
        this.$delete(this.widthArray, 1);
      }
      if (this.browserWidth < 160) {
        this.$delete(this.widthArray, 0);
      }

      if (this.browserWidth >= 1020) {
        if (this.widthArray.length == 6) {
          this.widthArray.push(this.myarray[6]);
        } else {
          if (
            this.widthArray.length == 0 ||
            this.widthArray.length == 1 ||
            this.widthArray.length == 2 ||
            this.widthArray.length == 3 ||
            this.widthArray.length == 4 ||
            this.widthArray.length == 5
          ) {
            this.widthArray = [];
            this.widthArray.push(this.myarray[0]);
            this.widthArray.push(this.myarray[1]);
            this.widthArray.push(this.myarray[2]);
            this.widthArray.push(this.myarray[3]);
            this.widthArray.push(this.myarray[4]);
            this.widthArray.push(this.myarray[5]);
            this.widthArray.push(this.myarray[6]);
          }
        }
      }
      if (this.browserWidth >= 960) {
        if (this.widthArray.length == 5) {
          this.widthArray.push(this.myarray[5]);
        } else {
          if (
            this.widthArray.length == 0 ||
            this.widthArray.length == 1 ||
            this.widthArray.length == 2 ||
            this.widthArray.length == 3 ||
            this.widthArray.length == 4
          ) {
            this.widthArray = [];
            this.widthArray.push(this.myarray[0]);
            this.widthArray.push(this.myarray[1]);
            this.widthArray.push(this.myarray[2]);
            this.widthArray.push(this.myarray[3]);
            this.widthArray.push(this.myarray[4]);
            this.widthArray.push(this.myarray[5]);
          }
        }
      }
      if (this.browserWidth >= 800) {
        if (this.widthArray.length == 4) {
          this.widthArray.push(this.myarray[4]);
        } else {
          if (
            this.widthArray.length == 0 ||
            this.widthArray.length == 1 ||
            this.widthArray.length == 2 ||
            this.widthArray.length == 3
          ) {
            this.widthArray = [];
            this.widthArray.push(this.myarray[0]);
            this.widthArray.push(this.myarray[1]);
            this.widthArray.push(this.myarray[2]);
            this.widthArray.push(this.myarray[3]);
            this.widthArray.push(this.myarray[4]);
          }
        }
      }
      if (this.browserWidth >= 640) {
        if (this.widthArray.length == 3) {
          this.widthArray.push(this.myarray[3]);
        } else {
          if (
            this.widthArray.length == 0 ||
            this.widthArray.length == 1 ||
            this.widthArray.length == 2
          ) {
            this.widthArray = [];
            this.widthArray.push(this.myarray[0]);
            this.widthArray.push(this.myarray[1]);
            this.widthArray.push(this.myarray[2]);
            this.widthArray.push(this.myarray[3]);
          }
        }
      }
      if (this.browserWidth >= 480) {
        if (this.widthArray.length == 2) {
          this.widthArray.push(this.myarray[2]);
        } else {
          if (this.widthArray.length == 0 || this.widthArray.length == 1) {
            this.widthArray = [];
            this.widthArray.push(this.myarray[0]);
            this.widthArray.push(this.myarray[1]);
            this.widthArray.push(this.myarray[2]);
          }
        }
      }
      if (this.browserWidth >= 320) {
        if (this.widthArray.length == 1) {
          this.widthArray.push(this.myarray[1]);
        } else {
          if (this.widthArray.length == 0) {
            this.widthArray = [];
            this.widthArray.push(this.myarray[0]);
            this.widthArray.push(this.myarray[1]);
          }
        }
      }
      if (this.browserWidth >= 160) {
        if (this.widthArray.length == 0) {
          this.widthArray.push(this.myarray[0]);
        }
      }
    },
  },
};
</script>

<style scoped>
.mainframe {
  background-color: #2a2e39;
  height: 60px;
  
  overflow: hidden;
}
.inlineframe {
  height: 30px;
}
.currency {
  height: 60px;
  color: white;
  border-left: 1px solid red;
  overflow: hidden;
  min-width: 160px;
  cursor: pointer;
}
.rowsize {
  height: 30px;
}
.success {
  color: green;
}
.danger {
  color: red;
}
</style>