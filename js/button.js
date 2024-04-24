var count = 0;
document.getElementById("myButton").onclick = function() {
        count++
        if (count % 2 == 0){
            document.getElementById("demo").innerHTML = "";
        } else {
            var img = document.createElement("img");
            img.src = " https://proprikol.ru/wp-content/uploads/2020/04/kartinki-vzlom-15.jpg ";
            document.getElementById("demo").appendChild(img);
        }
}