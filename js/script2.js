const obj=JSON.parse(localStorage.getItem('heroObj'))
const glob=document.querySelector('.glob')
console.log(obj);

const show=(res)=>{
    const fo=(arr)=>{
        arr.forEach(item => {
            return item
        })
    }
        return glob.innerHTML=`
        <div class="hed">
            <div class="imgB">
                <img src="${res.images.lg}" alt=""></div>
            <div class="block2">
                <h1>${res.name}</h1>
                <h2>${res.biography.fullName}</h2>
                <div class="stats">
                    <div class="ff">
                        <p>combat:${res.powerstats.combat}</p>
                        <p>durability:${res.powerstats.durability}</p>  
                    </div>
                    <div  class="ff"> 
                        <p>intelligence:${res.powerstats.intelligence}</p>
                        <p>power:${res.powerstats.power}</p>
                    </div>
                    <div  class="ff">
                        <p>speed:${res.powerstats.speed}</p>
                        <p>strength:${res.powerstats.strength}</p>
                    </div>
                </div>
            </div>
            <div class="block3">
                <h2>appearance</h2>
                <div class="ff">
                    <p>gender:${res.appearance.gender}</p>
                    <p>hairColor:${res.appearance.hairColor}</p>
                </div>
                <div class="ff">
                    <p>height :${res.appearance.height[1]}</p>
                    <p>race:${res.appearance.race}</p>
                </div>
                <div class="ff">weight:${res.appearance.weight[1]}</div>
            </div>
        </div>
        <div class="bio">
            <h1 class="bgh">Biografi</h1>
            <h4>aliases:${res.biography.aliases},  alignment:${res.biography.alignment}, alterEgos:${res.biography.alterEgos}, firstAppearance:${res.biography.firstAppearance}, fullName:${res.biography.fullName}, placeOfBirth:${res.biography.placeOfBirth}, publisher:${res.biography.publisher},  work:${res.work.occupation}, connections:${res.connections.groupAffiliation},${res.connections.relatives}</h4>
        </div>`
}
show(obj)