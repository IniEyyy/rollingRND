



const tombol = document.querySelector('#submit');
// dom event
tombol.addEventListener('click', function() {
    alert('anda berhasil login, mengalihkan ke home page..');
    window.location.href = "homePage.html";
});


const token = ~~[Math.random()*1234567]
const pictures = ['satu.jpg','dua.jpg','tiga.jpg']

//promise
function login(username){
    return new Promise((success,failed) => {
        setTimeout(() => {
            //return({token, username})
            if (!username) {failed('no username')}
            success({token, username})
        },200)
    })
}
function getUser(token){
    return new Promise((success,failed) => {
        setTimeout(() => {
            if(token){success({apikey: '*apikey123*'})}else{failed('no token')}
        },500)
    })
}
function getPictures(apikey){
    return new Promise((success,failed) => {
        setTimeout(() => {
        if(apikey){success({pictures})}else{failed('no apikey')}
        },1500)
    })
}

async function userDisp(){
    try{
        const user = await login('IniEy')
        console.log(user)
        const api = await getUser(user.token)
        console.log(api)
        const pic = await getPictures(api.apikey)
        console.log(pic.pictures)
    }catch(err){console.log(err)}
}
userDisp()