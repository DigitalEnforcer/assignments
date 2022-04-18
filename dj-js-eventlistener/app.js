var box = document.getElementById("djBox");

box.addEventListener('mouseover', function(){box.style.background ="blue"});
box.addEventListener('mousedown', function(){box.style.background ="red"});
box.addEventListener('mouseup', function(){box.style.background ="yellow"});
box.addEventListener('dblclick', function(){box.style.background ="green"});
document.body.addEventListener('wheel', function(){box.style.background ="orange"});
document.body.addEventListener('keydown', keyEvent)

function keyEvent(e){
    var value = e.key;
    if (value === "r"){
        box.style.backgroundColor = "red";
    }
    if (value === "b"){
        box.style.backgroundColor = "blue";
    }
    if (value === "y"){
        box.style.backgroundColor = "yellow";
    }
    if (value === "g"){
        box.style.backgroundColor = "green";
    }
    if (value === "o"){
        box.style.backgroundColor = "orange";
    }
}

