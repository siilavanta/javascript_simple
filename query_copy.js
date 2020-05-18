var arr2 = []
var temtitle = []
  function myarr(arr, srt, end, name){

  var arr = []
  for(var i = srt; i < end; i++){
  arr.push(name[i].outerHTML)

    }
  return arr;
  }

console.log(myarr(arr2, 0, 4, chapter))
console.log(myarr(temtitle, 10, 21, title))
var subheadarr = myarr(temtitle, 0, 5, subhead)
var sarr = ''
for(var i = 0; i <subheadarr.length; i++){
  sarr += subheadarr[i] + " "
}
