function promiseInExplorer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`I'm a Promise`);
            resolve();
        }, 2000);
    });
}


export default async function () {
    await promiseInExplorer();
    console.log(`terminou`);
}
