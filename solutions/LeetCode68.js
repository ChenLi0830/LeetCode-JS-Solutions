/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [], resultI = 0;
    for (let i=0;i<words.length;i++){
        let start = i, charLength=0;//i- start == space counts;
        while (i<words.length && i-start + charLength + words[i].length<=maxWidth) {
            charLength += words[i].length;
            i++;
        }
        i--;

        let averageSpace,n;
        if (i===words.length-1){
            averageSpace = 1;
            n = 0;
        } else {
            averageSpace = i-start===0 ? 0 : Math.floor((maxWidth-charLength)/(i-start));
            n = maxWidth - charLength - averageSpace*(i-start);//Number of the spaces that need extra space.
        }

        let line = words[start], space="";
        for (let j=0;j<averageSpace;j++) space += " ";


        for (let j=start+1;j<=i;j++){
            line += space + (n-- >0 ? " ":"")+words[j];
        }
        if (line.length<maxWidth) {//If there is only one word, add trailing
            // space if
            // necessary
            let tailingSpace = "";
            for (let j=0;j<maxWidth-line.length;j++) tailingSpace += " ";
            line += tailingSpace;
        }
        result[resultI++] = line;
    }
    return result;
};

//fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);
//fullJustify(["a","ab","a","a"], 5);
//fullJustify(["What","must","be","shall","be."], 12);
fullJustify(["Listen","to","many,","speak","to","a","few."], 6);
