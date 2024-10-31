


let data = [23, 58, 69, 44, 77, 152, 66, 77,20,10,20,30]
console.log(data);
console.log(data.length);

let show = ""
data.forEach(element => {

    show += `

        <div class="card m-3" style="width: 18rem;">
        <img src="./bg-1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title"><b><u>Username</u></b></h3>
            <h5 class="card-title"><b><i>Email</i></b></h5>
            <h5 class="card-title"><b><i>Phone</i></b></h5>
        </div>
        </div>

    `

    document.getElementById("show-all-data").innerHTML = show



});









