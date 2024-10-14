/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const people = names.map((name, index) => {
        return [name, heights[index]]
    })
    people.sort((a,b) => b[1]-a[1])
    return people.map((person) => person[0])
};