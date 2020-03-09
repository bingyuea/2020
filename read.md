关于vue的数据双向绑定

```
// 数据劫持，转成getter和setter

			observer(data)


			function observer(obj){
				Object.keys(obj).forEach((item) => {
					defineReactive(obj,item,obj[item])
				})
			}

			function defineReactive(obj,key,value){
				Object.defineProperty(obj,key, {
					get(){
						return value;
					},
					set(newValue){
						value = newValue;
						title.innerHTML = newValue ;
					}
				})
