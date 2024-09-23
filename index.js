// part-1
function calculateTriangleArea(a, b, c) {
    
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
     return area;
}


// part-2
function prependJavaScript(originalString) {
    return "javascript " + originalString;
}


