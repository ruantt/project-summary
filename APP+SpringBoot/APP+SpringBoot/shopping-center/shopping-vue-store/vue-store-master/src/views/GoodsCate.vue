<template>
  <div>
    <h2>类目管理</h2>

    <!-- 显示类目列表 -->
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category.name }}
        <button @click="editCategory(category)">编辑</button>
        <button @click="deleteCategory(index)">删除</button>
      </li>
    </ul>

    <!-- 显示类目表单 -->
    <div v-show="showForm">
      <h3>{{ formMode === 'add' ? '新增类目' : '编辑类目' }}</h3>
      <form @submit.prevent="submitCategory">
        <label for="categoryName">类目名称:</label>
        <input type="text" id="categoryName" v-model="formCategory.name">

        <button type="submit">{{ formMode === 'add' ? '添加' : '保存' }}</button>
        <button @click="cancelEdit">取消</button>
      </form>
    </div>

    <!-- 显示新增按钮 -->
    <button @click="addCategory">新增类目</button>
  </div>
</template>

<script>
  import {fetchList, creategoodsCate, updategoodsCate, getgoodsCate} from '@/api/goodsCate';
  import {fetchListWithAttr} from '@/api/goodsAttrCate';
  import {getgoodsAttrInfo} from '@/api/goodsAttr';
  import SingleUpload from '@/components/Upload/singleUpload';

  const defaultgoodsCate = {
    description: '',
    icon: '',
    keywords: '',
    name: '',
    navStatus: 0,
    parentId: 0,
    goodsUnit: '',
    showStatus: 0,
    sort: 0,
    goodsAttributeIdList: []
  };
  export default {
    name: "goodsCateDetail",
    components: {SingleUpload},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        goodsCate: Object.assign({}, defaultgoodsCate),
        selectgoodsCateList: [],
        rules: {
          name: [
            {required: true, message: '请输入品牌名称', trigger: 'blur'},
            {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
          ]
        },
        filterAttrs: [],
        filtergoodsAttrList: [{
          value: []
        }],

        categories: [
          {name: '类目1'},
          {name: '类目2'},
          {name: '类目3'}
        ],
        showForm: false,
        formMode: 'add',
        formCategory: {
          name: ''
        },
        editIndex: null
      };
    },


    created() {
      if (this.isEdit) {
        getgoodsCate(this.$route.query.id).then(response => {
          this.goodsCate = response.data;
        });
        getgoodsAttrInfo(this.$route.query.id).then(response => {
          if (response.data != null && response.data.length > 0) {
            this.filtergoodsAttrList = [];
            for (let i = 0; i < response.data.length; i++) {
              this.filtergoodsAttrList.push({
                key: Date.now() + i,
                value: [response.data[i].attributeCategoryId, response.data[i].attributeId]
              })
            }
          }
        });
      } else {
        this.goodsCate = Object.assign({}, defaultgoodsCate);
      }
      this.getSelectgoodsCateList();
      this.getgoodsAttrCateList();
    },

    methods: {
      // 向后端请求类目展示数据！！！
      getCategory() {
        this.$axios
            .get("/api/cate/categories")
            .then(res => {
              const val = {
                categoryId: 0,
                categoryName: "全部"
              };
              //获取结果
              const cate = res.data;
              cate.unshift(val);
              this.categoryList = cate;
            });
      },

//类目删除！！！
      deleteCategory(index) {
        this.$axios
            .get("/api/cate/deleteCate?id="+index.id)
            .then(res => {
              const val = {
                categoryId: 0,
                categoryName: "全部"
              };
              //获取结果

              this.categoryList = res;
            });

      },

      //类目修改！！！
      editCategory(category) {
        this.$axios
            .post("/api/cate/updateCate",category)
            .then(res => {
              const val = {
                categoryId: 0,
                categoryName: "全部"
              };
              //获取结果

              this.categoryList = res;
            });

      },

      //类目添加!!!
      addCategory() {
      
        this.$axios
            .post("/api/cate/addCate", this.newCategory)
            .then(res => {
              const val = {
                categoryId: 0,
                categoryName: "全部"
              };
              //获取结果

              this.categoryList = res;
            })
      },


    }
    
  }
</script>

<style scoped>
.goods {
  background-color: #f5f5f5;
}
/* 面包屑CSS */
.el-tabs--card .el-tabs__header {
  border-bottom: none;
}
.goods .breadcrumb {
  height: 50px;
  background-color: white;
}
.goods .breadcrumb .el-breadcrumb {
  width: 1225px;
  line-height: 30px;
  font-size: 16px;
  margin: 0 auto;
}
/* 面包屑CSS END */

/* 分类标签CSS */
.goods .nav {
  background-color: white;
}
.goods .nav .goods-nav {
  width: 1225px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
}
.nav .goods-nav .title {
  width: 50px;
  font-size: 16px;
  font-weight: 700;
  float: left;
}
/* 分类标签CSS END */

/* 主要内容区CSS */
.goods .main {
  margin: 0 auto;
  max-width: 1225px;
}
.goods .main .list {
  min-height: 650px;
  padding-top: 14.5px;
  margin-left: -13.7px;
  overflow: auto;
}
.goods .main .pagination {
  height: 50px;
  text-align: center;
}
.goods .main .none-goods {
  color: #333;
  margin-left: 13.7px;
}
/* 主要内容区CSS END */
</style>