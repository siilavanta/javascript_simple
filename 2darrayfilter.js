var arr = [{"nid":"31","0":{"tid":"20","name":"Bench Press","objectDate":"2012-02-08","goal":"rep","result":"55.00","comments":"sick!","maxload":"250"},"1":{"tid":"22","name":"Back Squat","objectDate":"2012-02-08","goal":"time","result":"8.00","comments":"i was tired.","maxload":"310"}},{"nid":"30","0":{"tid":"19","name":"Fran","objectDate":"2012-02-07","goal":"time","result":"5.00","comments":null}}];


function filterByProperty(array, prop, value){
    var filtered = [];
    for(var i = 0; i < array.length; i++){

        var obj = array[i];

        for(var key in obj){
            if(typeof(obj[key] == "object")){
                var item = obj[key];
                if(item[prop] == value){
                    filtered.push(item);
                }
            }
        }

    }    

    return filtered;

}



var byName = filterByProperty(arr, "name", "Fran");
var byGoal = filterByProperty(arr, "goal", "time");
console.log(byName)
console.log(byGoal)
//https://stackoverflow.com/questions/9206914/how-to-filter-multidimensional-javascript-array/56267951
