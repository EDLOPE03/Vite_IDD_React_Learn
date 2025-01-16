
function Food(){
    const food = 'Orange';
    const food2 = 'Banana';
    const food3 = 'Apple';
    return (
        <ul>
            <li>{food3}</li>
            <li>{food2}</li>
            <li>{food.toLocaleUpperCase()}</li>
        </ul>
    );
}

export default Food;