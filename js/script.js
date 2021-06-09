const cards=document.querySelector('.cards')
const numbers=document.querySelector('.numbers')
const inp=document.querySelector('.inp')
const sq=document.querySelectorAll('.sq')
const fetFun=(cb)=>{
    fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(res=>res.json())
    .then(res=>{
        cb(res)
    })
}
const number=()=>{
    fetFun(res=>{
        const arr=[]
        let nn=Math.floor(res.length / 20)
        for(let i=0;i<nn+2;i++){
            arr[i]=`<button onclick="nums(${i})" class="sq">${i+1}</button>`
        }
        numbers.innerHTML=arr.join('')
    })   
}
const nums=(i)=>{
    cardsFun(i*19)
}
inp.addEventListener('input',e =>{
    const search=e.target.value.toUpperCase();
    fetFun(res=>{
        const rr=res.filter(item => item.name.toUpperCase().includes(search))
        show(rr,'')
    })
})
const show=(res,num)=>{
    const ress= res.splice(num,20).map(item => {
        return`
            <div class="card">
            <div style="background: url('${item.images.md}') center / cover;" class="body"></div>
            <div>
            <div class="hed"><h3>${item.name}</h3></div>
            <div class="footer">
                <div>
                    <p>strength:${item.powerstats.strength}</p>
                    <p>speed:${item.powerstats.speed}</p>
                    <p>intelligence:${item.powerstats.intelligence}</p>
                </div>
        </div>
        <button class="btn" onclick="more(${item.id})" >More</button></div>
    </div>`
    }).join('')
    cards.innerHTML=ress
}
const cardsFun=(num=0)=>{
    fetFun(res=>{
        show(res,num)
    })
}
const more=(a)=>{
    fetFun(res =>{
        const obj=res.find(item => item.id === a)
        localStorage.setItem('heroObj',JSON.stringify(obj))
        window.open('index2.html','_self')
    })
}
cardsFun()
number()