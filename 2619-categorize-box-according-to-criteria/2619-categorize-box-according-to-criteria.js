/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let volume=length*height*width;
    const isBulky=length>=10**4||
        width>=10**4||
         height>=10**4||
          mass>=10**4||
          volume>=10**9
          let result="";
    const isHeavy=mass>=100
    if(isHeavy&&isBulky)
    result="Both"
    else if(!isHeavy&&!isBulky)
    result="Neither"
    else if(!isHeavy&&isBulky)
    result="Bulky"
    else if (isHeavy&&!isBulky)
    result="Heavy"

    return result

};