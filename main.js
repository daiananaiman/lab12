let h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = "Lab12 Assignment";
h1[0].style.color = "blue";

var hr = document.createElement("hr");
document.body.appendChild(hr);

let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

const arr = ["find elements in the DOM (<b>5 points</b>);", "create/add/remove elements (<b>5 points</b>);", "change content of the elements (<b>5 points</b>);", "change styles of the elements (<b>5 points</b>);", "change attributes of the elements (<b>5 points</b>);", "change classes of the elements (<b>5 points</b>)."];
let ul = document.createElement("ul");
ul.setAttribute('id', 'theList');
for (i = 0; i <arr.length; i++) {
    var li = document.createElement('li');     
    li.innerHTML = arr[i];
    ul.appendChild(li);
    if (i % 2 == 0) {
        li.style.color = "green"
    }
    else {
        li.style.color = "purple"
    }
}
document.body.appendChild(ul);

let p2 = document.createElement("p");
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";
document.body.appendChild(p2);

let link = document.createElement("a");
link.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
link.innerText = "link.";
p2.appendChild(link);

var hr_1 = document.createElement("hr");
document.body.appendChild(hr_1);

let h2_1 = document.createElement("h2");
h2_1.innerHTML = "Submission";
h2_1.style.color = "red";
document.body.appendChild(h2_1);

let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

const arr_1 = ["Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).", "Clone this repository to your local machine and work inside it.", "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with &quotHello, World!&quot message (<b>1 point</b>).", "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).", "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).", "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).", "After you finish your work, submit it to the Github (<b>2 points</b>)."];
let ul_1 = document.createElement("ul");
ul_1.classList.add("submission");
console.log(ul_1.classList);
for (i = 0; i < arr_1.length; i++) {
    var li_1 = document.createElement('li');     
    li_1.innerHTML = arr_1[i];
    ul_1.appendChild(li_1);
    if (i % 2 == 0) {
        li_1.style.color = "green"
    }
    else {
        li_1.style.color = "purple"
    }
}
document.body.appendChild(ul_1);

var hr_2 = document.createElement("hr");
document.body.appendChild(hr_2);