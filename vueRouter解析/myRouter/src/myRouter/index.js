

let vue
  class myRouter{
    static install(_vue){
      vue = _vue
      vue.mixin({
        beforeCreate(){
          vue.prototype.$myRouter = '我是 自定义 路由'
        }
      })
    }
    
    constructor(option){
      this.hashChangeFn()
    }
    
    hashChangeFn(){
      // 这里为神魔需要 bind this 如果用call 怎么改写
      window.addEventListener('hashchange',this.handleHashChange.bind(this),false)
    }
    
    handleHashChange(e){
      // newURL: "http://localhost:8080/#/111112221111111"
      // oldURL: "http://localhost:8080/#/11111222111"
      console.log(e)
    }
    
  }
  
  export default myRouter


