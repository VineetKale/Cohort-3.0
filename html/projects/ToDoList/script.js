function deleteTodo(index){
    const elem=document.getElementById("todo-"+index);
    elem.parentNode.removeChild(elem);
}