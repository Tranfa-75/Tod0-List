document.querySelector('#add').onclick = function(){
    var input = document.querySelector('.todo input').value;
    if(input == "")alert('Please enter any todo first');
    else{
        var todo_item = document.querySelector('.todo-item');
        todo_item.innerHTML += `
        <div class="todo-item">
        <span>${input}</span>
        <button class="remove btn btn-danger btn-sm">Delete</button>
        </div>
        `;

        var remove_btns = document.querySelectorAll('.remove');
        for(var i=0; i<remove_btns.length; i++){
            remove_btns[i].onclick = function(){
                this.parentNode.removeChild();
            }
        }

        var todo_item = document.querySelectorAll('.todo-item');
        for(var i=0; i<todo_item.length; i++){
            todo_item[i].onclick = function() {
                this.classlist.add('completed');
            }
        }

        // var remove btns = document.querySelector('.remove');
        // for

        document.querySelector('.todo input').value ="";
    }
}