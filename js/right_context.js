function right_context_change(){
    var right_context_value = document.getElementById("right_context");
    document.getElementById("rightContext_value").innerHTML = "Left context length: " + " " + right_context_value.value;
}
//
//     if (i + 1 > content.length){
//         var arr_content = re_remove_punctuation(content[i]);
//         var index = arr_content.indexOf(keyword);
//         if (index + r_length > content[i].length - 1){
//             var arr_content_right = arr_content.slice(index, content[i].length - 1);
//             result_temp_right = arr_content_right;
//         }
//         else {
//             var arr_content_right = arr_content.slice(index, index + r_length - 1);
//             result_temp_right = arr_content_right;
//         }
//     }
//     else {
//         var arr_content = re_remove_punctuation(content[i]);
//         var arr_content_right_1 = re_remove_punctuation(content[i + 1]);
//         var index = arr_content.indexOf(keyword);
//         var y = index + 1 - content[i].length;
//         var arr_content_right = arr_content.slice(index,content[i].length -1);
//         arr_content_right_1 = arr_content_right_1.slice(0,y);
//         result_temp_right = [...arr_content_right, arr_content_right_1];
//     }
// }
// result.push(content[i] + "||||........||||" + [...result_temp_left, ...result_temp_right]);