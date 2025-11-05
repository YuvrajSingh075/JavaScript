const myObj = {
    js: "javaScript",
    cpp: "c++",
    py: "python",
    ruby: "ruby of aap"
}

for (const key in myObj) {
    console.log(`${key} file extension of : ${myObj[key]}`);
    
}

const programing = ["js", "c++", "java", "ruby", "swift"];
for(const key in programing){
    console.log(programing[key]);
}