<template>

  <div class="hotTechnology">
    <h2 class="titlehot">技术热门
      <br>Hot technology</h2>
    <el-carousel :interval="4000" type="card" height="320px" class="threecontainer">
      <el-carousel-item v-for="itemThree in indexThreepic" :key="itemThree.imgName" class="threeboxwidth">
        <img src="../../assets/images/1.jpg" alt="" class="threepicimg">
        <p>
          <a :href="itemThree.href">{{ itemThree.imgTitle }}</a>
        </p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    name: 'hotTechnology',
    data() {
      return {
        indexThreepic: [{
            imgName: 'assets/images/1.jpg',
            imgTitle: '水产养殖专用的水下成像系统',
            href: '1'
          },
          {
            imgName: 'assets/images/2.jpg',
            imgTitle: '可定制化的喷油器体锻造自动化系统研发应用',
            href: '2'
          },
          {
            imgName: 'assets/images/3.jpg',
            imgTitle: '形象宣传片—“华润置地形',
            href: '3'
          },
          {
            imgName: 'assets/images/4.jpg',
            imgTitle: '【美国】Nervomatrix 智能止痛技术',
            href: '4'
          }
        ]
      }
    },
    methods: {

    }
  }

</script>

<style scoped>
  .hotTechnology {
    padding-top: 2%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }

  .threepicimg {
    width: 550px;
    height: 260px;
    margin: 0;
    padding: 0;
    /* margin-bottom: 300px;  */
  }

  .threeboxwidth {
    /* width: 445px !important; */
    padding-top: 20px;
    border-radius: 5px;
    /* margin-bottom: 300px;  */
  }

  .titlehot {
    color: #fff;
    font-family: "黑体";
    padding-bottom: 2%;
    font-size: 2em;
    letter-spacing: 10px;
    font-weight: 800;
  }

</style>
