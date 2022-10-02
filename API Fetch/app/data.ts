export async function getData(){
    const cards: any[] = [];
    try {
        for (let i = 1; i<10; i++) {
            let response = await fetch('https://swapi.dev/api/people/' + i);
            let data = await response.json();
            console.log(data);
            cards.push(data);
        }
        return cards;
    } catch (error) {
        console.log(error);
    }
}