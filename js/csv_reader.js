console.log("Hello, this is the test")
console.log("CSV reader test")

d3.csv("/data/Novel_list.csv",function(csvdata){

    var data = csvdata;
    var data_list = Object.values(data)
    console.log(data_list);
});