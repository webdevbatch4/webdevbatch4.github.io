Vue.component("grocery-list",{
    props:["todo"],
    template:"<li> **** {{todo.desc}}</li>"
})