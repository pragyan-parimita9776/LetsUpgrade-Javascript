var array=[
    {name:"pragyan" ,age:"23",city:"cuttack",salary:"200000"},
    {name:"biswa" ,age:"26",city:"mukhiguda",salary:"800000"}
]
function show(){
    let table ="<table border =1px id='myTable'>"
    table+="<thread>";
    table+="<tr style ='text-align : center'>";

    table+="<th>Name</th>";
    table+="<th>age</th>";
    table+="<th>city</th>";
    table+="<th>salary</th>";
    
   table+="</tr>";
   table+="</thread>";
for (var i=0; i< array.length; i++){
    
    table +="<tr>";
    table+="<td>"+array[i].name+"</td>" ;
    table+="<td>"+array[i].age+"</td>";
    table+="<td>"+array[i].city+"</td>";
    table+="<td>"+array[i].salary+"</td>";
    table +="</tr>";
}
table+="</table>";
document.getElementById("box").innerHTML=table;
}
show()

function searchName(){

    var input = document.getElementById("searchTable").values;
    var filter =input.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
     
    for(i=0; i<tr.length; i++){
        td=tr[i].getElementsByTagName("td")[0];
        
     if(td) {
         var txtValue = td.textContent || td.innerTextv|| td1.textContent ||td1.innerText;
         if(txtValue.toUpperCase().indexOf(filter)> -1){
             tr[i].style.display = "";
         }else {
             tr[i].style.display="none";
         }
     }
    }
}
searchTable();

function searchCity(){

    var input = document.getElementById("searchTable1").values;
    var filter =input.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
    
    for(var j=0; j<tr.length; j++){
       let  td1=tr[j].getElementsByTagName("td")[2];
        
     if(td1) {
          txtValue = td1.textContent || td.innerText;
         if(txtValue.toUpperCase().indexOf(filter)> -1){
             tr[j].style.display = "";
         }else {
             tr[j].style.display="none";
         }
     }
    }
}
searchCity();

function deleteRow(){
    for(var d= document.getElementsById("myTable").rows.length-1; d>0; d--){
        return document.getElementsById("myTable").deleteRow(d);
    }
}

deleteRow();