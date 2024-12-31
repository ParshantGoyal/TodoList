let todo ={work_enter: "",work_date: "",};
let todoList = [];

function addTodo(){
let textButton = document.querySelector('#Work_enter').value;
let textDate = document.querySelector('#work_date').value;
add_data_to_storage(textButton,textDate);
}
function add_data_to_storage(text_data1,text_date2){
todo.work_enter = text_data1;
todo.work_date =text_date2;
todoList.push({work_enter: text_data1,work_date: text_date2,});
localStorage.setItem("TodoDATA",JSON.stringify(todoList))

}

function Displaytodo(){
    let DT =localStorage.getItem('TodoDATA');
     let DisTodo = JSON.parse(DT);
     //let DisTodo;
        let todo = document.querySelector('#d_C');

    for(let i=0; i<=DT.length;i++){
         //DisTodo = [JSON.parse(DT[i])];
        todo.innerHTML += `<div><td>${DisTodo[i].work_enter}</td>
        <td>${DisTodo[i].work_date}</td>
        <td><button onclick="DeleteTodo(${i})">Delete</button></td>
        </div><br>`
    }
}
//DisTodo.splice(${i},1)
Displaytodo();
function DeleteTodo(i){
    localStorage.removeItem('TodoDATA[i]');
    Displaytodo();

}