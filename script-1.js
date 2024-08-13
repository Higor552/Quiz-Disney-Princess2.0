let calculo = function(){
  /*Isso informa quantas vc acertou*/
  let pontos = 0
  
  let q1 = document.getElementById("a1").checked

  if (q1 == true){
    pontos = pontos + 1  
  }

  let q2 = document.getElementById("a2").checked

  if (q2 == true){
    pontos = pontos + 1  
  }

  let q3 = document.getElementById("a3").checked

  if (q3 == true){
    pontos = pontos + 1  
  }

  let q4 = document.getElementById("a4").checked

  if (q4 == true){
    pontos = pontos + 1  
  }

  let q5 = document.getElementById("a5").checked

   if (q5 == true){
     pontos = pontos + 1  
   }
 let pontos6 = 0
  let a1 = document.getElementById("q06aA").checked
  let b1 = document.getElementById("q06aB").checked
  let c1 = document.getElementById("q06aC").checked
  let d1 = document.getElementById("q06aD").checked
  let e1 = document.getElementById("q06aE").checked
   if (a1 == true){
     pontos6 = pontos6 - 1/3 
   }
  if (b1 == true){
     pontos6 = pontos6 - 1/3 
 
  }
  if (c1 == true){
     pontos6 = pontos6 - 1/3 
  }
  if (d1 == true){
     pontos6 = pontos6 + 1/2
  }
  if (e1 == true){
     pontos6 = pontos6 + 1/2
  }
  
  pontos = pontos6 + pontos

 let pontos7 = 0
  let a2 = document.getElementById("q07aA").checked
  let b2 = document.getElementById("q07aB").checked
  let c2 = document.getElementById("q07aC").checked
  let d2 = document.getElementById("q07aD").checked
  let e2 = document.getElementById("q07aE").checked
   if (a2 == true){
     pontos7 = pontos7 + 1/2
   }
  if (b2 == true) {
     pontos7 = pontos7 + 1/2
  }
  if (c2 == true){
     pontos7 = pontos7 - 1/3
  }
  if (d2 == true){
    pontos7 = pontos7 -1/3
  }      
  if (e2 == true) {
     pontos7 = pontos7 - 1/3
  }


  if (pontos7 < 0) {
     pontos7 = 0
  }
  
 pontos = pontos7 + pontos
  let pontos8 = 0
    let A3 = document.getElementById("q08aA").checked
    let b3 = document.getElementById("q08aB").checked
    let c3 = document.getElementById("q08aC").checked
    let d3 = document.getElementById("q08aD").checked
    let e3 = document.getElementById("q08aE").checked
    if (A3 == true) {
     pontos8 = pontos8 + 1/3
    }
    if (b3 == true){
      pontos8 = pontos8 - 1/2
      }
    if (c3 == true){
       pontos8 = pontos8 - 1/2
      }
    if (d3 == true){
       pontos8 = pontos8 + 1/3
      }
    if (e3 == true){
       pontos8 = pontos8 + 1/3
      }
    
  
   if (pontos8 < 0){
     pontos8 = 0
   }

     pontos = pontos + pontos8
  
  let pontos9 = 0
  let A4 = document.getElementById("q09aA").checked
  let b4 = document.getElementById("q09aB").checked
  let c4 = document.getElementById("q09aC").checked
  let d4 = document.getElementById("q09aD").checked
  let e4 = document.getElementById("q09aE").checked
  if (A4 == true) {
   pontos9 = pontos9 - 1/2
  }
  if (b4 == true){
    pontos9 = pontos9 - 1/2
    }
  if (c4 == true){
     pontos9 = pontos9 + 1/3
    }
  if (d4 == true){
     pontos9 = pontos9 + 1/3
    }
  if (e4 == true){
     pontos9 = pontos9 + 1/3
    }
  if (pontos9 < 0) {
     pontos9 = 0
  }
 
  
   pontos = pontos + pontos9

  let pontos10 = 0
  let A5 = document.getElementById("q10aA").checked
  let b5 = document.getElementById("q10aB").checked
  let c5 = document.getElementById("q10aC").checked
  let d5 = document.getElementById("q10aD").checked
  let e5 = document.getElementById("q10aE").checked
  if (A5 == true) {
   pontos10 = pontos10 + 1/3
  }
  if (b5 == true){
    pontos10 = pontos10 - 1/2
    }
  if (c5 == true){
     pontos10 = pontos10 - 1/2
    }
  if (d5 == true){
     pontos10 = pontos10 + 1/3
    }
  if (e5 == true){
     pontos10 = pontos10 + 1/3
    }
  if (pontos10 < 0) {
     pontos10 = 0
  }
  pontos = pontos + pontos10
  
  document.getElementById("nota").innerHTML = pontos.toFixed(2)
  
  let texto
  if (pontos == 10){
    texto = "Parabéns, você acertou todas as perguntas!"
 
  }
  if (pontos < 9 && pontos >= 8){
    texto = "Muito bom, mas da para melhorar!"
  }
  if (pontos < 8 && pontos >= 6){
    texto = "Éee... da para passar de ano!"
  }
  if (pontos < 6 && pontos >= 4){
    texto = "Você precisa estudar mais!"
  }
    
  if (pontos < 4 && pontos > 0){
    texto = "Você precisa estudar MUITO mais!"
  }
  if (pontos == 0){
    texto = "Reprovou! Tente de novo!"
  }
  document.getElementById("textin").innerHTML = texto
}
