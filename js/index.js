// create var tbody
var tbody = document.getElementById('tbody');
//getJson
$.getJSON("./pets.json", function(json){
    json.map(getPet).forEach(function(item){
        item = item.split("-");
        tbody.innerHTML +=
        "<tr>"
            +"<td> <img src='./img/"+item[0]+"' alt='img'></td>"
            +"<td>"+item[1]+"</td>"
            +"<td>"+item[2]+"</td>"
            +"<td>"+item[3]+"</td>"
        +"</tr>"
    });
});
//serializer
function getPet(item){
    return [
        item.img, item.name, item.breed, item.sex
    ].join("-")
}