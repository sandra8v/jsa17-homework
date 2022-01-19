// Bài 1: 
//   1.Get all the job hits
let hits = jobData.hits
console.log(hits)
for(let i = 0; i < hits.length; i++) {
    console.log(hits[i].jobTitle)
}
//   2.Get the first job hit
console.log(hits[0])
//   3.Get jobTitle of the first job
console.log(hits[0].jobTitle)
//   4.Get the benefits of the first job hit
console.log(hits[0].benefits)
//   5.Log out first job hit benefit values
console.log(hits[0].benefits[0].benefitValue)
//   6.Log out jobTitle and benefitValue of all job hits
let hits2 = hits[0].benefits

for(let i = 0; i < hits.length; i++) {
    console.log(hits[i].jobTitle)
}

for(let i = 0; i<hits2.length;i++) {
    console.log(hits2[i].benefitValue)
}
//   7.Log out locations, skills, jobSalary of all job hits
for(let i = 0; i < hits.length; i++) {
    console.log(hits[i].locations)
    console.log(hits[i].skills)
    console.log(hits[i].jobSalary)
}
// Bài 2: 
let a = [4,"hello",{username:"Long",password:"123456"},[1,2,3]]

for(let i = 0; i< a.length;i++) {
    if(typeof a[i] === "number") {
        a[i] += a[i]
    }else if(typeof a[i] === "string") {
        a[i] += 'world' 
    }else if(typeof a[i] === "object") {
        if(Array.isArray(a[i])) {
            for(let j = 0; j < a[i].length; j++) {
                console.log(a[j])
            }
        }else {
            let keys = ""
            let values = ""
            for(let k in a[i]) {
                keys += `${k}-`
                values += `${a[i][k]}-`
            }
            console.log(keys + ', ' + values)
        }
    }
}