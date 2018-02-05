<template>
  <div class="expertIndex">
    <div class="erpertMainBox">
      <h2 class="titlehot">行业顶尖专家 资深技术顾问
        <br>Collaborators</h2>
      <el-row :gutter="20">
        <el-col :span="8" class="collaboratorsBox" v-for="(itemZhuanjia,index) in zhuanjiaArray" :key="itemZhuanjia.key" v-if="itemZhuanjia.imageUrls == null ? false : true && index < 6">
          <router-link :to="'/technicalDetails/'+index">
          <a href="#">
            <div class="neibox">
              <img :src="itemZhuanjia.imageUrls" alt="" class="collaboratorsBoxImg">
              <p class="name">{{itemZhuanjia.title}}</p>
              <span class="borderLingyu">{{itemZhuanjia.posterScreenName}}</span>
              <span class="borderLingyu">{{itemZhuanjia.publishDateStr}}</span>
            </div>
          </a>
          </router-link>
        </el-col>
      </el-row>
      <div class="more">
        <span>
          <a href="">查看更多医药科学专家</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import luan from '../../assets/images/zhuanjiapic/1.jpg'
  export default {
    name: 'expertIndex',
    data() {
      return {
        zhuanjiaArray: [],
        activePage : "9"
      }
    },
    methods: {

    },
    created() {

      // var url = 
      this.$http.get(
        '/api/news/qihoo?kw=%E4%B8%93%E5%AE%B6&site=http%3A%2F%2Fnews.sohu.com%2F&apikey=PXYYZZLJn5JSfTasvTJUai1bIjyQNT9g6rsPg2LXUWf44KimzdnXEamLhqJdVpLb', {
          params: {

          }
        }).then(res => {
            this.zhuanjiaArray = res.data.data;
        // console.log(this.tableData[0].create_at);
        
      }, response => {
        console.log("res");
      })
    }
  }

</script>

<style scoped>
  .expertIndex {
    width: 100%;
    /* height: 1100px; */
    border-bottom: 4px solid #000;
  }

  .erpertMainBox {
    width: 1000px;
    height: 1000px;
    margin: 0 auto;
    /* border: 1px solid #ddd; */
  }

  .erpertMainBox a:hover .collaboratorsBoxImg {
    transform: scale(1.1);
    transition: 1s;
  }

  .fl {
    float: left !important;
  }

  .fr {
    float: right !important;
  }

  .titlehot {
    font-family: "黑体";
    padding-bottom: 2%;
    font-size: 2em;
    letter-spacing: 10px;
    font-weight: 800;
    padding-top: 50px;
  }

  .collaboratorsBox {
    /* border:1px solid #ddd; */
    padding: 10px;
    height: 370px;
  }


  .collaboratorsBox .neibox {
    width: 95%;
    height: 350px;
    margin: 0 auto;
    -moz-box-shadow: 2px 2px 4px #D6D6D6;
    -webkit-box-shadow: 2px 2px 4px #D6D6D6;
    box-shadow: 2px 2px 4px #D6D6D6;
    overflow: hidden;
  }

  .collaboratorsBox .collaboratorsBoxImg {
    width: 100%;
  }

  .borderLingyu {
    border: 1px solid #696969;
    padding: 8px;
    color: dimgray;
  }

  .borderLingyu:hover {
    background: #6399df;
    color: #fff;
  }

  .collaboratorsBox .name {
    font-family: "黑体";
    font-size: 1.4em;
    font-weight: 800;
  }

  .collaboratorsBox .borderLingyu {
    font-size: 0.8em;
  }

  .more {


    margin-top: 30px;
  }

  .more span a {
    border: 1px solid #000;
    padding: 10px;
  }

  .more span a:hover {
    color: #fff;
    /* font-weight: 800; */
    background: #000;
  }

</style>
