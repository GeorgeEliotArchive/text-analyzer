function left_context_change(){
    var left_context_value = document.getElementById("left_context");
    document.getElementById("leftContext_value").innerHTML = "Left context length: " + " " + left_context_value.value;
}

// if (i - 1 >= 0) {
//     // 1. Remove punctuation and replace them to space, change the string to array
//     var arr_content = re_remove_punctuation(content[i]);
//
//     // 2. Get the key word index from array
//     var index = arr_content.indexOf(keyword);
//
//     // 3. If the length of the left side not satisfied, take the previous one data, then combine to 1 array.
//     if (index + 1 - l_length < 0) {
//         var arr_content_left = arr_content.slice(0, index + 1);
//         var arr_content_left_1 = re_remove_punctuation(content[i - 1]);
//         var x = index + 1 - l_length;
//
//         arr_content_left_1 = arr_content_left_1.slice(x);
//         result_temp_left = [...arr_content_left_1, ...arr_content_left];
//     } else {
//         var arr_content_left = arr_content.slice(index + 1 - l_length, index + 1);
//         result_temp_left = arr_content_left;
//     }
//     // result.push(content[i] + "  " + index);
//     result.push(content[i] + "||||........||||" + result_temp_left);
// } else {
//     var arr_content = re_remove_punctuation(content[i]);
//     var index = arr_content.indexOf(keyword);
//     if (index + 1 - l_length < 0) {
//         var arr_content_left = arr_content.slice(0, index);
//         result_temp_left = arr_content_left;
//     } else {
//         var arr_content_left = arr_content.slice(index + 1 - l_length, index);
//         result_temp_left = arr_content_left;
//     }
//     result.push(content[i] + "||||........||||" + result_temp_left)
// }
