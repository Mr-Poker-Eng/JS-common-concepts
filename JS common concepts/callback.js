function misscall(person, name){
    // console.log(person);
    person(name)
}

const person1 = function(name){
    console.log("okey, i have got it", name);
};

const person2 = function(name){
    console.log("okey, i have got it again", name);
};

const person3 = function(name){
    console.log("okey, i have got it again and again", name);
};

misscall(person1, "munim")
misscall(person2, "tawseef")
misscall(person3, "munim")