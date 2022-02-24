function alertExtDemo(){
    alert('Inline Alert')
}
function confirmExtDemo(){
    if(confirm('Are you sure....?')){
        alert("Yess")
    }
    else{
        alert("Nooooo")
    }
}
function promptExtDemo(){
    var fname=prompt('Enter your name')
    var lname=prompt('Enter your name')
    alert(fname+" "+lname)
}