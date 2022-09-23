let mounth = prompt(`Какой у вас месяц?`)

// if (mounth === 12 || mounth === 1 || mounth === 2) {
// } else if (mounth === 3 || mounth === 4 || mounth === 5) {
//     alert(`Spring`)
// } else if (mounth === 6 || mounth === 7 || mounth === 8) {
//     alert(`Summer`)
// } else if (mounth >= 9 || mounth <= 11 || mounth === ) {
//     alert(`Autumn`)
// } else {
//     alert(`Нет такого месяца!`)
// }

if (mounth >= 1 && mounth <= 2 || mounth == `Январь` || mounth == `Февраль`) alert(`Зима`)

else if (mounth >= 3 && mounth <= 5 || mounth == `Maрт` || mounth == `Апрель` || mounth == `Май`) alert(`Весна`)

else if (mounth >= 6 && mounth <= 8 || mounth == `Июнь` || mounth == `Июль` || mounth == `Август`) alert(`Лето`)

else if (mounth >= 9 && mounth <= 11 || mounth == `Сентябрь` || mounth == `Октябрь` || mounth == `Ноябрь`) alert(`Осень `)

else if (mounth == 12 || mounth == `Декабрь`) alert(`Зима`)
else alert(`Нет такого месяца`)