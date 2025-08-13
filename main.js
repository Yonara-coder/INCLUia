const allAi = document.querySelectorAll(".ai")

const allAiArray = Array.from(allAi)

allAiArray.forEach((e) => {
    e.onclick = () => showModal(e.id)
})

const modal = document.getElementById("modal")

function showModal(name){
    modal.classList.remove("invisible")

    const allChild = modal.children
    const allChildArray = Array.from(allChild)

    allChildArray.forEach((e) => {  
        if(e.nodeName === "P"){
            modal.removeChild(e)
        }
    })

    const p = document.createElement("p")
    p.innerText = name
    modal.appendChild(p)
}

const close = document.getElementById("close")

function closeModal(){
    modal.classList.add("invisible")
}

close.onclick = closeModal