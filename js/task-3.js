function getElementWidth(content, padding, border) {
    let contentW = parseFloat(content);
    let paddingW = parseFloat(padding);
    let borderW = parseFloat(border);
    let borderBox = contentW + (paddingW * 2) + (borderW * 2);
    return borderBox;
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));