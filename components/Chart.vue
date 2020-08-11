
<template>
  <div class="col-9" style="margin-right:250px w-100">
    <div class="container">
      <h1>{{getDetail.name}}</h1>
    </div>
    <div class="col-12  ml-1 " style="border:1px solid; ">
      <div class="row">
        <div class="col-xl-2">
        <div class="row">
          <h6 class="col-6 ">Değer</h6>
          <div class="col-6 text-right">{{getDetail.value}}</div>
        </div>
      </div>
      <div class="col-xl-2" style="border-left:1px solid;">
        <div class="row text-left">
          <h6 class="col-6 ">%</h6>
          <div class="col-6 text-right">{{getDetail.percent}}</div>
        </div>
      </div>
      <div class="col-xl-2" style="border-left:1px solid;">
        <div class="row">
          <h6 class="col-6">Değişim</h6>
          <div class="col-6 text-right">{{getDetail.variation}}</div>
        </div>
      </div>
      <div class="col-xl-2" style="border-left:1px solid;">
        <div class="row">
          <h6 class="col-6">Değişim</h6>
          <div class="col-6 text-right">{{getDetail.variation}}</div>
        </div>
      </div>
      <div class="col-xl-2" style="border-left:1px solid;">
        <div class="row">
          <h6 class="col-6">Değişim</h6>
          <div class="col-6 text-right">{{getDetail.variation}}</div>
        </div>
      </div>
      <div class="col-xl-2" style="border-left:1px solid;">
        <div class="row">
          <h6 class="col-6">Değişim</h6>
          <div class="col-6 text-right">{{getDetail.variation}}</div>
        </div>
      </div>
      </div>
    </div>

    <div class="justify-content-center mt-5 ml-1 p-0" style="margin-left:200px">
      <div class="col-xl-12  m-1 p-1 justify-content-center"  style="margin-left:200px">
        <client-only >
          <v-chart :options="option"  />
        </client-only>
      </div>
    </div>
    <div class="row justify-content-center text-center mt-5 p-0" v-for="(x,y) in 3" :key="y">
      <div class="col-lg-5 m-1" style="border:1px solid">
        <h1>Haber</h1>
        <p class="text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
          quam ipsa corrupti odit nostrum,
          obcaecati magnam dolores vitae r
          eprehenderit at voluptatibus deserunt
          aspernatur modi quos officiis qui sit iure ipsum.
        </p>
      </div>
      <div class="col-lg-5 m-1" style="border:1px solid">
        <h1>Haber</h1>
        <p class="text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
          quam ipsa corrupti odit nostrum,
          obcaecati magnam dolores vitae r
          eprehenderit at voluptatibus deserunt
          aspernatur modi quos officiis qui sit iure ipsum.
        </p>
      </div>
    </div>
  </div>
</template>
 
<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */

</style>
 
<script>
import { mapGetters } from "vuex";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      data: [],
      now: +new Date(2020, 1, 1),
      oneDay: 24 * 3600 * 1000,
      value: Math.random() * 1000,
      option: {
        title: {
          text: "Dynamic Data + Time Axis",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "s1",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: this.data,
          },
        ],
      },
    };
  },
  methods: {
    randomData() {
      this.now = new Date(+this.now + this.oneDay);
      this.value = this.value + Math.random() * 21 - 10;
      return {
        name: this.now.toString(),
        value: [
          [
            this.now.getFullYear(),
            this.now.getMonth() + 1,
            this.now.getDate(),
          ].join("/"),
          Math.round(this.value),
        ],
      };
    },
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }
    setInterval(() => {
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }
      this.option.series = [
        {
          data: this.data,
          name: "s1",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
        },
      ];
    }, 1000);
  },
  computed: {
    ...mapGetters({ getDetail: "getDetail" }),
  },
};
</script>