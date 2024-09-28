
function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('oi sou a promise')
            resolve()
        }, 2000);
    })
}

export default async function executa () {
    const p1 = await p()
    console.log('terminou')
}