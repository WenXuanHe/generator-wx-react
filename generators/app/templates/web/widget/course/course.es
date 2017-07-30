 import './course.css';
 let course = {
     init() {
         const vm = new Vue({
             el: '#app',
             data: {
                isShow:false,
                 msg: 'Hello yd-vue-kernel',
                 datas:[]
             },
             mounted: function() {
                 this.$http.get('index/getdata').then(response => {
                     this.datas = response.body.data;
                 }, response => {
                     console.error(response);
                 });
             },
             methods: {
                 hello() {
                     console.log( this.$refs.technology);
                     this.isShow = !this.isShow;
                 }
             }
         });
     }
 };
 export
 default course;