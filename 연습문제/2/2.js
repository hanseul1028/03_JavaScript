const divs = document.querySelectorAll(".number");

for(let div of divs){
    div.addEventListener("click", (e) => {

        const str = e.target.innerText;
        switch(str){}

        str += div.value + " ";
    });
}