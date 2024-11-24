let fullList = [];

function renderlist(){
    let todoHTML = '';
    for(let i = 0; i < fullList.length; i++){
        const todoobject = fullList[i];
        const todo = todoobject.name;
        const dueDate = todoobject.due_date;
        const html = 
        `<p>
            ${todo} ${dueDate}
            <button onclick="
                fullList.splice(${i},1);
                renderlist();
            ">
                Delete
            </button>
        </p>`;
        todoHTML += html; 
         
        }
    document.querySelector('.works').innerHTML= todoHTML ;

}

function todolist (){
    const work = document.querySelector('.todowork');
    const list = work.value;
    const workDate = document.querySelector('.date');
    const dateList = workDate.value;
    fullList.push({
        name: list,
        due_date: dateList
    });
    work.value='';
    workDate.value='';
    renderlist();
}


// let fullList = ['Do homework', 'Play'];

//         function renderlist() {
//             let todoHTML = '';
//             for (let i = 0; i < fullList.length; i++) {
//                 const todo = fullList[i];
//                 const html = `<p>${todo}</p>`;
//                 todoHTML += html;
//             }
//             console.log(todoHTML);
//             document.querySelector('.works').innerHTML = todoHTML;
//         }

//         function todolist() {
//             const work = document.querySelector('.todowork');
//             const list = work.value.trim(); // Trim whitespace from input
//             if (list !== '') {
//                 fullList.push(list);
//                 work.value = '';
//                 console.log(fullList);
//                 renderlist();
//             }
//         }

//         // Initial rendering
//         renderlist();