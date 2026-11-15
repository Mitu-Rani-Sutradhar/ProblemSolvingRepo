// Problem 3: Find the Largest of Three Numbers

function Largest(a, b, c){
    if( a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else{
        return c;
    }
}
console.log(Largest(4,6,3));
// or

function largest(a,b,c){
    return Math.max(a,b,c);
}
console.log(largest(8,9,5));