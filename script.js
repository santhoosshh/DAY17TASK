
'use strict';
let timer=10;
let time = document.getElementById('display');
time.style.margin= "auto";
time.style.textAlign = "center";
time.style.border = "black 1px dotted"
time.style.maxWidth ="200px"
setTimeout(() => {
    time.className="badge badge-pill badge-dark";
    time.style.maxWidth = "300px";
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.className = "badge badge-pill badge-dark";
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.className = "badge badge-pill badge-dark";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "badge badge-pill badge-dark";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "badge badge-pill badge-dark";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "badge badge-pill badge-dark";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "badge badge-pill badge-dark";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "badge badge-pill badge-dark";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "badge badge-pill badge-dark";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "badge badge-pill badge-dark";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.style.fontSize = "28px";
                                            time.style.maxWidth = "400px";
                                            time.className = "badge badge-pill badge-dark";
                                            time.innerHTML = "Happy independence Day"
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000); 
