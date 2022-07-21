

//Solution 1 - in progress

var addBoldTag = function(s, words) {
    if (!words.length) return s;
    const ranges = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let start = s.indexOf(word);
        while (start >= 0) {
            let end = start + word.length;
            ranges.push([start, end]);
            start = s.indexOf(word, end)
        }
    }
    
    if (ranges.length == 0) return s;
    const mergedRanges = mergeRanges(ranges);
    console.log(ranges)
    let prev = 0;
    let result = "";
    
    for (let i = 0; i < mergedRanges.length; i++) {
        const [start, end] = mergedRanges[i];
        result += s.slice(prev, start);
        result+= "<b>" + s.slice(start, end) + "</b>";
        prev = end;
    }
    result+=s.slice(mergedRanges[mergedRanges.length - 1][1])
    
    return result
};

function mergeRanges(ranges) {
    ranges.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])
    const mergedRanges = [ranges[0]];
    for (let i = 1; i < ranges.length; i++) {
        if (mergedRanges[mergedRanges.length -1][1] >= ranges[i][0]) {
            mergedRanges[mergedRanges.length -1][1] = Math.max(ranges[i][1], mergedRanges[mergedRanges.length -1][1] ) 
        } else {
            mergedRanges.push(ranges[i])
        }
    }
    return mergedRanges;
}

//Solution 2
//Time: O(N * M * K) where N is s.length, M is words.length, K is word.length
var addBoldTag = function(s, words) {
    if (!words.length) return s;
    const bold = new Array(s.length).fill(false);
    
    for (let start = 0; start < s.length ; start++) {
        let maxEnd = start - 1;
        for (let word of words) {
            if (word.length == 0) continue;
            if (s.startsWith(word, start)) {
                maxEnd = start + word.length - 1; 
            }
        }
        if (maxEnd < start) continue;
        for(let i = start; i <= maxEnd; i++) {
            bold[i] = true;
        }
    }
    
    let result = "";
    for (let start = 0; start < s.length; start++) {
        if (bold[start] === false) {
            result += s[start];
            continue;
        } 
        result += "<b>";
        let end = start;
        while (end < s.length && bold[end]) {
            end++;
        }
        result += s.substring(start, end);
        result+="</b>";
        start = end - 1;   
    }
    return result
};
