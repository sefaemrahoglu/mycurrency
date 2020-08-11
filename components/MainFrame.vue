<template>
  <div class="container-fluid">
    <div class="row">
      <Header :myarray="currency" />
    </div>
    
    <div class="row">
      <SideBar />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import SideBar from "./SideBar";
export default {
  components: {
    Header,
    SideBar,
  },
  data() {
    return {
      currency: [
        {
          name: "Bist 100",
          value: 1134.85,
          percent: 0,
          variation: 0,
          control: false,
        },
        {
          name: "USD/TRY",
          value: 6.9735,
          percent: 0,
          variation: 0,
          control: false,
        },
        {
          name: "EUR/TRY",
          value: 8.21106,
          percent: 0,
          variation: 0,
          control: false,
        },
        {
          name: "ALTIN",
          value: 1959.5,
          percent: 0,
          variation: 0,
          control: false,
        },
        {
          name: "AKBANK",
          value: 5.28,
          percent: 0,
          variation: 0,
          control: false,
        },
        {
          name: "BTC/USD",
          value: 11127.55,
          percent: 0,
          variation: 0,
          control: false,
        },
        {
          name: "EUR/USD",
          value: 6.9735,
          percent: 0,
          variation: 0,
          control: false,
        },
      ],
    };
  },
  created() {
    for (let x in this.currency) {
      let value = this.currency[x].value;

      setInterval(() => {
        let a = Math.random();
        let y = Math.round(Math.random());
        if (y == 1) {
          value += Number(a);
          this.currency[x].control = true;
          this.currency[x].percent =
            (100 * (value - this.currency[x].value)) / this.currency[x].value;
          this.currency[x].percent = this.currency[x].percent.toFixed(2);
          this.currency[x].variation = value - this.currency[x].value;
          this.currency[x].variation = this.currency[x].variation.toFixed(4);
        } else {
          value -= Number(a);
          this.currency[x].control = false;
          this.currency[x].percent =
            (100 * (value - this.currency[x].value)) / this.currency[x].value;
          this.currency[x].percent = Math.abs(
            this.currency[x].percent.toFixed(2)
          );
          this.currency[x].variation = this.currency[x].value - value;
          this.currency[x].variation = this.currency[x].variation.toFixed(4);
        }
        this.currency[x].value = value.toFixed(2);
      }, 500);
    }
  },
};
</script>

<style >
</style>