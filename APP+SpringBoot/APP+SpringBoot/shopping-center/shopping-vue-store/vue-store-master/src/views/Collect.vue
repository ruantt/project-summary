<!--
 * @Description: 我的收藏页面组件
 * @Author: hai-27
 * @Date: 2020-02-20 17:22:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-12 19:34:00
 -->
<template>
  <div>
    <h2>商品收藏</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} ({{ product.isFavourite ? '已收藏' : '未收藏' }})
        <button @click="toggleFavourite(product)">
          {{ product.isFavourite ? '取消收藏' : '收藏' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectList: [],
      products: [
        { name: '商品1', isFavourite: false },
        { name: '商品2', isFavourite: false },
        { name: '商品3', isFavourite: false }
      ]
    };
  },
  activated() {
    // 获取收藏数据
    this.$axios
      .get("/api/collect/user/" + this.$store.getters.getUser.userId)
      .then(res => {
        if (res.data.code === "001") {
          this.collectList = res.data.data;
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  methods: {
    add() {
      this.$axios
          .post("/{productId}", this.newProduct)
          .then(res => {
            const val = {
              categoryId: 0,
              categoryName: "全部"
            };
            //获取结果
            const cate = res.data;
            cate.unshift(val);
            this.categoryList = cate;
          })

        }
      }      
};
</script>
<style>
.collect {
  background-color: #f5f5f5;
}
.collect .collect-header {
  height: 64px;
  background-color: #fff;
  border-bottom: 2px solid #ff6700;
}
.collect .collect-header .collect-title {
  width: 1225px;
  margin: 0 auto;
  height: 64px;
  line-height: 58px;
  font-size: 28px;
}
.collect .content {
  padding: 20px 0;
  width: 1225px;
  margin: 0 auto;
}
.collect .content .goods-list {
  margin-left: -13.7px;
  overflow: hidden;
}
/* 收藏列表为空的时候显示的内容CSS */
.collect .collect-empty {
  width: 1225px;
  margin: 0 auto;
}
.collect .collect-empty .empty {
  height: 300px;
  padding: 0 0 130px 558px;
  margin: 65px 0 0;
  background: url(../assets/imgs/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}
.collect .collect-empty .empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}
.collect .collect-empty .empty p {
  margin: 0 0 20px;
  font-size: 20px;
}
/* 收藏列表为空的时候显示的内容CSS END */
</style>