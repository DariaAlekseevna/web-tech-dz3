
function tempreture(degr){
    const f = (9 / 5) * degr + 32;
    if (f == Math.round(f)){
        alert(`Цельсий: ${degr}, Фаренгейт: ${f}`);
    }
    else{
        const rf = f.toFixed(1);
        alert(`Цельсий: ${degr}, Фаренгейт: ${rf} (округление до десятых)`);
    }
}

const a = +prompt("Введите температуру в градусах Цельсия: ");
tempreture(a);

