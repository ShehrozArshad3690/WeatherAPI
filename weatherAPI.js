try {
    const api="b0edc8ce653a4fb686f70607230612";
    const city="lahore"
    async function weather() {
        let a =await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`);
        let b= await a.json();
        console.log(`Current Temperature of ${city} in Celcious is ${b.current.temp_c}`)
    }
    async function show(){
        await weather();
    }
    show();
} catch (error) {
    console.log(error);
}