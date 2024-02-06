const greeting :string="Hello, TypeScript!";
console.log(greeting);

function multi(a:number,b:number){
    return a+b;
}
console.log(multi(5,4));

function isEven(a:number){
    if(a%2==0){
        return true;
    }
    return false;
}
console.log(isEven(5));
function greetUser(usersName:string){
    console.log(`Hi ${usersName}`)
}
greetUser("sir")

function filterPositiveNumbers( array:number[]){
    return array.filter(elem=>elem>0);
}

console.log(filterPositiveNumbers([4,-5,6,-7,8]))