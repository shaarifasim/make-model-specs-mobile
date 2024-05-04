let mobile = {
   iphone:{
        iphone7:{
            ram:"4/128",
            rom:512,
            resoluion:"1023/3212"
        },
        iphone7plus:{
            ram:"4/128",
            rom:512,
            resoluion:"1023/3212"
        },
        iphone8:{
            ram:"4/128",
            rom:512,
            resoluion:"1023/3212"
        },
        iphone8plus:{
            ram:"4/128",
            rom:512,
            resoluion:"1023/3212"
        },
        iphonex:{
            ram:"4/128",
            rom:512,
            resoluion:"1023/3212"
        },
        iphone11:{
            ram:"4/128",
            rom:512,
            resoluion:"1023/3212"
        },
    },
    Xiomi:{
        Xiomi1:{
             ram:"6/128",
            rom:1024,
            resoluion:"5212/3212"
        },
        Xiomi2:{
             ram:"6/128",
            rom:1024,
            resoluion:"5212/3212"
        },
        Xiomi3:{
             ram:"6/128",
            rom:1024,
            resoluion:"5212/3212"
        },
        Xiomi4:{
             ram:"6/128",
            rom:1024,
            resoluion:"5212/3212"
        },
        Xiomi5:{
             ram:"6/128",
            rom:1024,
            resoluion:"5212/3212"
        },
        Xiomi6:{
             ram:"6/128",
            rom:1024,
            resoluion:"5212/3212"
        },

    },
    redmi:{
        redmi1:{
             ram:"8/128",
            rom:"1TB",
            resoluion:"5212/3212"
        },
        redmi2:{
             ram:"8/128",
            rom:"1TB",
            resoluion:"5212/3212"
        },
        redmi3:{
             ram:"8/128",
            rom:"1TB",
            resoluion:"5212/3212"
        },
        redmi4:{
             ram:"8/128",
            rom:"1TB",
            resoluion:"5212/3212"
        },
        redmi5:{
             ram:"8/128",
            rom:"1TB",
            resoluion:"5212/3212"
        },
        redmi6:{
             ram:"8/128",
            rom:"1TB",
            resoluion:"5212/3212"
        },
    },
    realme:{
        realmi1:{
             ram:"12/128",
            rom:"4TB",
            resoluion:"5212/3212"
        },
        realmi2:{
             ram:"12/128",
            rom:"4TB",
            resoluion:"5212/3212"
        },
        realmi3:{
             ram:"12/128",
            rom:"4TB",
            resoluion:"5212/3212"
        },
        realmi4:{
             ram:"12/128",
            rom:"4TB",
            resoluion:"5212/3212"
        },
        realmi5:{
             ram:"12/128",
            rom:"4TB",
            resoluion:"5212/3212"
        },
        realmi6:{
             ram:"12/128",
            rom:"4TB",
            resoluion:"5212/3212"
        },
    },
    
}


// let keys = Object.keys(mobile);
// console.log(keys);

let brand = document.getElementById("brand")
let model = document.getElementById("model")

let allBrands = Object.keys(mobile)

function init(){
    for(let i = 0; i<allBrands.length ; i++){
    brand.innerHTML +=`<option >${allBrands[i]}</option>`
}
}
function selectedBrands() {
let selectedBrand = brand.value
let models = Object.keys(mobile[selectedBrand])
model.innerHTML = ""
for(let i = 0 ; i < models.length; i++){
    model.innerHTML +=  `<option>${models[i]}</option>`
}
}
function modelSelected(){
    let selectedBrand = brand.value
    let selectedModel = model.value
    let value = mobile[selectedBrand][selectedModel]
    let showSpecsDiv = document.getElementById("show-specs")
    showSpecsDiv.innerHTML = `<h2 style="text-align:center;">Specifications</h2> <ul><li><p>Ram: ${value.ram}</p></li><li><p>ROM: ${value.rom}</p></li><li><p>Resolution: ${value.resoluion}</p></li></ul>`
}
init()