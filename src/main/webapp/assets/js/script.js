/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
window.onload =()=>{
    let regions=document.getElementsByClassName("region");
    for (var i = 0; i < regions.length; i++) {
        regions[i].onclick=(event)=>{
           let region=event.currentTarget.innerHTML;
           let banderas="";
           let url="https://restcountries.com/v3.1/region/"+region;
           fetch(url).then(function(resp){ return resp.json();})
                   .then(function(datos){
                        for (var i = 0; i < datos.length; i++) {
                            banderas+=  `<img class="bandera" id="${datos[i].name.common}"  src="${datos[i].flags.png}" alt="alt"/>` ;
                        }
                        document.getElementById("banderas").innerHTML=banderas;
                        let banderasImg=document.getElementsByClassName("bandera");
                        for (var i = 0; i < banderasImg.length; i++) {
                            banderasImg[i].onclick=function(e){
                                alert(e.currentTarget.id);
                            };
                        }
                   });
           }                         
        };  
};


