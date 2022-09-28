// Load wink-nlp package  & helpers.
const winkNLP = require( 'wink-nlp' );
// Load "its" helper to extract item properties.
const its = require( 'wink-nlp/src/its.js' );
// Load "as" reducer helper to reduce a collection.
const as = require( 'wink-nlp/src/as.js' );
// Load english language model — light version.
const model = require( 'wink-eng-lite-model' );
// Instantiate winkNLP.
const keyword_extractor = require("keyword-extractor");

const nlp = winkNLP( model );
// const text = 'Hello World! How are you?';
// const doc = nlp.readDoc( text );

// console.log( doc.out() );
//
//
// console.log( doc.tokens().out( its.type, as.freqTable ) );
// console.log( doc.tokens().out( its.value) );
// console.log( doc.tokens().out( its.pos ) );


function keyword_extract(sentence){
    const extraction_result = keyword_extractor.extract(sentence,{
        language:"english",
        remove_digits: true,
        return_changed_case:true,
        remove_duplicates: false,
        return_max_ngrams:2
    });
    return extraction_result
}
//
console.log(keyword_extract('New Webb Image Captures Clearest View of Neptune’s Rings in Decades'))

