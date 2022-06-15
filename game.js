let d = document, 
    botonStart = d.getElementById("start"),
    $juegoVisible = d.querySelector(".game"),
    $adivina = d.getElementById("adivina") ,
    $btnSubmit = d.getElementById("submit"),
    $numerosIngres = d.getElementById("numerosPrevios"),
    $respuesta = d.getElementById("respuesta")

    botonStart.addEventListener("click",() => {
        $juegoVisible.classList.toggle("visible")
    })


    const funcionRandomNumero = () => {
        let numerillosRandom = parseInt(Math.random()* 100)
        
        return numerillosRandom
        }

    let numerosss = funcionRandomNumero()
    console.log(`el numero random es ${numerosss} QUE MIRAS ES TRAMPA!! >:C`)
    
    let contador = 0

    const cargaNum = (e) => {
        e.preventDefault()
            contador++;
                numeroMisterioso = parseInt($adivina.value)
               if (contador <= 10){
                    let elementito = document.createElement("div");

                    elementito.innerHTML = `Ingresaste numero  ${numeroMisterioso}`
                    
                    if (numerosss === numeroMisterioso) {
                        $numerosIngres.appendChild(elementito)
                        $respuesta.innerHTML = `<h2>GANASTE</h2`

                        let imgRandom = document.createElement("img")
                        imgRandom.src = `https://www.sopitas.com/wp-content/uploads/2016/06/leo-dicaprio.jpg`
                        $respuesta.appendChild(imgRandom) 

                    }else if (numerosss<numeroMisterioso) {
                        $numerosIngres.appendChild(elementito)
                        $respuesta.innerHTML = `<h3>Casi, te pasaste</h3>`

                    } else if (numerosss>numeroMisterioso) {
                        $numerosIngres.appendChild(elementito)
                        $respuesta.innerHTML = `<h3>No, es mas grande</h3>`
                        }
                         
                    console.log(numeroMisterioso)
                    // console.log(contador)
               }else {
                  $btnSubmit.disabled = true
                  $respuesta.innerHTML = `<h3>Perdiste amigo</h3>`
               }

               
    } 
    
    $btnSubmit.addEventListener("click", cargaNum)
   