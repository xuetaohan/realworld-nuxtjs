exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=3501054a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-3501054a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3501054a>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-3501054a>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-3501054a>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Sign in" : "Sign up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-3501054a>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-3501054a>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-3501054a>"+_vm._ssrEscape(_vm._s(field)+"  "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-3501054a>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-3501054a><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-3501054a></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-3501054a><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-3501054a></fieldset> <fieldset class=\"form-group\" data-v-3501054a><input type=\"password\" placeholder=\"Password\" minlength=\"8\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-3501054a></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-3501054a>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=3501054a&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js
 // 用户登录

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 仅在客户端加载 js-cookie 包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: "LoginIndex",
  computed: {
    isLogin() {
      return this.$route.name === "login";
    }

  },

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      errors: {} // 错误信息

    };
  },

  methods: {
    async onSubmit() {
      try {
        // 提交表单请求登录
        // 账号：65458658@qq.com
        // 密码：12345678
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        console.log(data); // 保存用户的登录状态

        this.$store.commit('setUser', data.user); // 为防止刷新页面数据丢失，我们需要把数据持久化

        Cookie.set('user', data.user);
        this.$router.push("/");
      } catch (error) {
        // console.log("请求失败", error);
        this.errors = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3501054a",
  "c14e8b6a"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map