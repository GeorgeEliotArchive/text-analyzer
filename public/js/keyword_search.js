// // Load wink-nlp package  & helpers.
// const winkNLP = require( 'wink-nlp' );
// // Load "its" helper to extract item properties.
// const its = require( 'wink-nlp/src/its.js' );
// // Load "as" reducer helper to reduce a collection.
// const as = require( 'wink-nlp/src/as.js' );
// // Load english language model — light version.
// const model = require( 'wink-eng-lite-model' );
// // Instantiate winkNLP.
// const nlp = winkNLP( model );
//
// function POSTAG(sentence){
//     const text = sentence
//     const doc = nlp.readDoc(text);
//     // console.log(doc.tokens().out(its.type, as.freqTable));
//     return doc.tokens().out(its.pos)
// }

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
    // alert(keyword)
    var content = $("#novel_content").text();
    var arr = content.split("\n");
    var width = document.getElementById("novel_content").clientWidth ;
    // alert(width)
    var total_pixels = 0;
    var adjust_factor = 11;
    var total_lines = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i].split(" ")[0] == keyword.split(" ")[0]){
            var _index = i;
            arr[i] = '<div id="relocated_result" class="relocated_result" style="height: 30px; width: 468px"><b>' + arr[i] + '</b></div>';
            // console.log(arr[i])
            // alert(arr[i]);
            document.getElementById("novel_content").innerHTML = arr.join("\n");
            let x = document.getElementById('relocated_result');
            x.scrollIntoView()
            // document.getElementById('relocate_result').scrollIntoView()
            // alert(get_tex_width(arr[i],"20px serif") / width);
            // alert(keyword.split(" ")[0])
            // scrollTo(total_pixels);
            break;
        }
        else {
            // alert(textSize("20px","Crimson Text",arr[i]).width, get_tex_width(arr[i], "20px Crimson Text"))
            // if (get_tex_width(arr[i], "20px Crimson Text") / width <= 1){
            //     // total_lines += 1
            //   total_pixels = total_pixels + 30;
            // }
            // else {
            //     var x = Math.ceil(get_tex_width(arr[i], "20px Crimson Text") / width);
            //     total_pixels = total_pixels + 30 * x
            //     // total_lines += x
            // }
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

function scrollTo(pixels){
    var content_position = document.getElementById("novel_content");
    // // var lineHeight = 56;
    // // const row = (pixels).toFixed(0);
    content_position.scrollTop = pixels - 60;
    // $('novel_content').scrollTop(pixels);
}

// String.prototype.byteLength = function() {
//     var length = 0;
//     Array.from(this).map(function(char){
//         if(char.charCodeAt(0)>255) {
//             length += 2;
//         }else {
//             length++;
//         }
//     });
//
//     return length;
// }

// String.prototype.width = function(font) {
//     var f = font || '12px arial',
//         o = $('<div></div>')
//             .text(this)
//             .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
//             .appendTo($('body')),
//         w = o.width();
//
//     o.remove();
//
//     return w;
// }

// var getWidthOfText = function(text, styles) {
//     var isObjectJSON = function(obj) {
//         return obj && typeof obj === 'object' && !Array.isArray(obj);
//     };
//
//     var element = document.createElement('div');
//     if (isObjectJSON(styles)) {
//         var styleKeys = Object.keys(styles);
//         for (var i = 0, n = styleKeys.length; i < n; ++i) {
//             element.style[styleKeys[i]] = styles[styleKeys[i]];
//         }
//     }
//     element.style.display = 'inline-block';
//     element.innerHTML = text;
//     document.body.appendChild(element);
//     var width = element.offsetWidth;
//     document.body.removeChild(element);
//     return width;
// };

function get_tex_width(txt, font) {
    this.element = document.createElement('canvas');
    this.context = this.element.getContext("2d");
    this.context.font = font;
    return this.context.measureText(txt).width;
}

const get_tex_height = (txt, font) => {
    const element = document.createElement('canvas');
    const context = element.getContext("2d");
    context.font = font;
    const height = parseInt(context.font)
    return height;
}

function textSize(fontSize,fontFamily,text){
    var span = document.createElement("span");
    var result = {};
    result.width = span.offsetWidth;
    result.height = span.offsetHeight;
    span.style.visibility = "hidden";
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.display = "inline-block";
    document.body.appendChild(span);
    if(typeof span.textContent != "undefined"){
        span.textContent = text;
    }else{
        span.innerText = text;
    }
    result.width = parseFloat(window.getComputedStyle(span).width) - result.width;
    result.height = parseFloat(window.getComputedStyle(span).height) - result.height;
    return result;
}


