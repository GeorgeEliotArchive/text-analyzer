function re_remove_punctuation(str){
    var arr_str = str.replace(/[^\w\s\']|_/g, " ").split(" ");
    return arr_str;
}

function boldString_keyword(str, substr) {
    var strRegExp = new RegExp(substr, 'g');
    return str.replace(strRegExp, '<b>'+substr+'</b>');
}


function matchKeywordExact(keyword,content,l_length,r_length) {
    var result = [];
    var result_temp_left = [];
    var result_temp_right = [];
    var regex = new RegExp('\\b(' + keyword + ')\\b');

    for (var i = 0; i < content.length; i++) {
        if (content[i].match(regex) != null) {
            // result.push(content[i]);

            // Left side logic.
            if (i - 1 >= 0) {

                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);

                if (index - l_length < 0) {
                    var arr_content_left = arr_content.slice(0, index);
                    var arr_content_left_1 = re_remove_punctuation(content[i - 1]);
                    delete arr_content_left_1[0];
                    var x = index - l_length;

                    arr_content_left_1 = arr_content_left_1.slice(x-1);
                    result_temp_left = [...arr_content_left_1, ...arr_content_left];
                } else {
                    var arr_content_left = arr_content.slice(index - l_length, index);
                    result_temp_left = arr_content_left;
                }
                // result.push(content[i] + "||||........||||" + result_temp_left);
            }
            else {

                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);
                if (index - l_length < 0) {
                    var arr_content_left = arr_content.slice(0, index);
                    result_temp_left = arr_content_left;
                } else {
                    var arr_content_left = arr_content.slice(index - l_length, index);
                    result_temp_left = arr_content_left;
                }
                // result.push(content[i] + "||||........||||" + result_temp_left)
            }

            // Right side logic
            if (i + 1 > content.length) {

                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);

                if (index + r_length > arr_content.length){
                    var arr_content_right = arr_content.slice(index, arr_content.length);
                    // var arr_content_right = 'x'
                    result_temp_right = arr_content_right;
                }

                else {
                    var arr_content_right = arr_content.slice(index, index + r_length + 2);
                    // var arr_content_right = 'x'
                    result_temp_right = arr_content_right;
                }
            }
            else {
                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);

                if (index + r_length > arr_content.length) {
                    var arr_content_right = arr_content.slice(index, arr_content.length);
                    var arr_content_right_1 = re_remove_punctuation(content[i + 1]);
                    delete arr_content_right_1[0];
                    var y = index + 2 + r_length - arr_content.length;
                    arr_content_right_1 = arr_content_right_1.slice(0, y);
                    result_temp_right = [...arr_content_right, ...arr_content_right_1];
                }
                else {
                    var arr_content_right = arr_content.slice(index, index + r_length + 2)
                    result_temp_right = arr_content_right;
                }
            }
            var result_str = i+1 + ":  " + result_temp_left.join(" ")  + " " + boldString_keyword(result_temp_right.join(" "), content[i].match(regex)[0]);
            result.push(result_str);
        }
    }
    return result;
}


function matchKeyword(keyword, content, l_length,r_length) {
    var result = [];
    var result_temp_left = [];
    var result_temp_right = [];
    var regex = new RegExp('\\b(' + keyword + ')\\b', 'i');
    for (var i = 0; i < content.length; i++) {
        // if (this.arr[i].search(this.keyword) != -1)
        if (content[i].match(regex) != null) {
            // result.push(content[i]);

            // Left side logic.
            if (i - 1 >= 0) {

                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);

                if (index - l_length < 0) {
                    var arr_content_left = arr_content.slice(0, index);
                    var arr_content_left_1 = re_remove_punctuation(content[i - 1]);
                    delete arr_content_left_1[0];
                    var x = index - l_length;

                    arr_content_left_1 = arr_content_left_1.slice(x-1);
                    result_temp_left = [...arr_content_left_1, ...arr_content_left];
                } else {
                    var arr_content_left = arr_content.slice(index - l_length, index);
                    result_temp_left = arr_content_left;
                }
                // result.push(content[i] + "||||........||||" + result_temp_left);
            }
            else {

                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);
                if (index - l_length < 0) {
                    var arr_content_left = arr_content.slice(0, index);
                    result_temp_left = arr_content_left;
                } else {
                    var arr_content_left = arr_content.slice(index - l_length, index);
                    result_temp_left = arr_content_left;
                }
                // result.push(content[i] + "||||........||||" + result_temp_left)
            }

            // Right side logic
            if (i + 1 > content.length) {

                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);

                if (index + r_length > arr_content.length){
                    var arr_content_right = arr_content.slice(index, arr_content.length);
                    // var arr_content_right = 'x'
                    result_temp_right = arr_content_right;
                }

                else {
                    var arr_content_right = arr_content.slice(index, index + r_length + 2);
                    // var arr_content_right = 'x'
                    result_temp_right = arr_content_right;
                }
            }
            else {
                var arr_content = re_remove_punctuation(content[i]);
                delete arr_content[0];
                var index = arr_content.indexOf(content[i].match(regex)[0]);

                if (index + r_length > arr_content.length) {
                    var arr_content_right = arr_content.slice(index, arr_content.length);
                    var arr_content_right_1 = re_remove_punctuation(content[i + 1]);
                    delete arr_content_right_1[0];
                    var y = index + 2 + r_length - arr_content.length;
                    arr_content_right_1 = arr_content_right_1.slice(0, y);
                    result_temp_right = [...arr_content_right, ...arr_content_right_1];
                }
                else {
                    var arr_content_right = arr_content.slice(index, index + r_length + 2)
                    result_temp_right = arr_content_right;
                }
            }
            var result_str = i+1 + ":  " + result_temp_left.join(" ")  + " " + boldString_keyword(result_temp_right.join(" "), content[i].match(regex)[0]);
            result.push(result_str);

        }
    }
    return result;
}

function keywordsearch() {
    /*search button show function by Jennie Ren*/
    var T = document.getElementById("search-result");
    T.style.display = "block";  // <-- Set it to block
    /*the end*/
    var status_value = $("input[type='checkbox']").is(':checked')
    this.keyword = $("#keyword").val();
    this.content = $("#novel_content").text();
    this.arr = this.content.split("\n");
    this.result = [];
    var finalResult = "";
    document.getElementById("keyword_test").innerHTML = "Selected keyword is: " + this.keyword;
    var l_length_str = document.getElementById("left_context");
    var l_length_int = parseInt(l_length_str.value);

    var r_length_str = document.getElementById("right_context");
    var r_length_int = parseInt(r_length_str.value);

    if (status_value == true) {
        // alert(status_value);
        this.result = matchKeywordExact(this.keyword, this.arr, l_length_int, r_length_int);
        if (this.result == "") {
            document.getElementById("query_results").innerHTML = "No result for the keyword :" + "  " + this.keyword;
            document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : 0" + "</h3>"
        } else {
            for (var j = 0; j < this.result.length; j++) {
                // document.write("result" + j + ":" + this.result[j] + "<br>");
                var _result_temp = this.result[j];
                finalResult += "<a id='result' href='javascript:void(0);' onclick='relocate(this)' style='color: #1a1e21'>" + _result_temp  + "</a><br>";

                document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : " + "  " + this.result.length + "</h3>";
                document.getElementById("query_results").innerHTML = finalResult;
            }
        }
    } else {
        // document.getElementById("query_results").innerHTML = "Functions in development...";
        // alert(status_value);

        this.result = matchKeyword(this.keyword, this.arr,l_length_int,r_length_int);
        if (this.result == "") {
            document.getElementById("query_results").innerHTML = "No result for the keyword :" + "  " + this.keyword;
            document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : 0" + "</h3>"
        } else {
            for (var j = 0; j < this.result.length; j++) {
                var _result_temp = this.result[j];
                // document.write("result" + j + ":" + this.result[j] + "<br>");
                finalResult += "<a id='result' href='javascript:void(0);' onclick='relocate(this)' style='color: #1a1e21'>" + _result_temp  + "</a><br>";
                document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : " + "  " + this.result.length + "</h3>";
                document.getElementById("query_results").innerHTML = finalResult;
            }
        }
    }
}


function relocate(obj){
    var keyword = obj.innerText;
    var content = $("#novel_content").text();
    var arr = content.split("\n");
    for(var i = 0; i < arr.length; i++){
        if (arr[i].split(" ")[0] == keyword.split(" ")[0]){
            // var _index = content.indexOf(arr[i].split(" ")[0]);
            var _index = i + 1;
            arr[i] = '<b>' + arr[i] + '</b>';
            document.getElementById("novel_content").innerHTML = arr.join("\n");
            scrollTo(_index)
            alert(arr[i]+ "***" + keyword + '***' + height);
            break;
        }
        else {
            continue;
        }
    }
    // var row_content = obj.innerText;
    // var keyword = row_content.split(" ")[0];
    // var content = document.getElementById("novel_content");
    // var initText = content.innerHTML;
    // var index = initText.indexOf(keyword);
    // var arr = initText.split(" ");
    // arr.splice(index, row_content.length, `<span class="light-high">${row_content}</span>`)
    // content.innerHTML = arr.join(" ");
    // alert(content)
}

function scrollTo(index){
    var content_position = document.getElementById("novel_content");
    var lineHeight = 56;
    const row = (index).toFixed(0);
    content_position.scrollTop = (row - 2) * lineHeight;
}





