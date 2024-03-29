const keyword_extractor = require("keyword-extractor");

function keyword_extract(sentence){
    const extraction_result = keyword_extractor.extract(sentence,{
        language:"english",
        remove_digits: true,
        return_changed_case:true,
        remove_duplicates: false
    });
    return extraction_result
}

function file_info() {

    // 1. Get the value from select tag
    // this.data_value = $("#select_novel_list option:selected").val();
    // this.data_title = $("#select_novel_list option:selected").text();
    var myselect = document.getElementById("select_novel_list");
    var data_value = myselect.value;
    // document.getElementById("p_novel_file_name").innerHTML = "Selected file name: " + data_value + ", type of file is:" + typeof data_value;

    // 2. Read the value(URL) and get the txt content
    if (data_value == "0") {
        document.getElementById('novel_content').innerHTML = "Choose a novel from the drop-down list"
    } else {
        var txtFile = new XMLHttpRequest();
        txtFile.open("GET", data_value, false);
        txtFile.onreadystatechange = function () {
            if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
                if (txtFile.status === 200) {  // Makes sure it's found the file.
                    allText = txtFile.responseText;
                }
                else alert('Error: Can not found file')
            }
        }
        txtFile.send(null);
        document.getElementById("novel_content").innerHTML = allText;
    }
    // var extract_result = keyword_extract(allText);
    // alert(extract_result);
    this.arr_allText= allText.split("\n");
    document.getElementById("total_text_lines").innerHTML = "Total text lines : " + "  " + this.arr_allText.length;
    document.getElementById("total_word_count").innerHTML = "Total word count : " + "  " + allText.length;
    $( '#query_results' ).empty();
    $( '#query_results_title' ).empty();

}


    // 3. Print the content into text area
//     this.data_content = document.getElementById("input_file").files[0];
//
//     var reader = new FileReader();
//     reader.onload = function (e){
//         var textarea = document.getElementById("novel_content");
//         textarea.value = e.target.result;
//     }
//     reader.readAsText(this.data_content)
// }



    // document.getElementById("novel_content").value = this.allText
