// создание Конструктора калькулятора
var Calculator = function() {
	symbols = '<%+*/-789456123C0=';
	// Создание поля для калькулятора
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.id = 'div';
	// Создание окна ввывода цифр
	var field = document.createElement('p');
	field.innerHTML = '';
	div.appendChild(field);
	field.id = 'field';
	// Создание кнопок калькулятора
	for (x of symbols) {
		var btn = document.createElement('button');
		btn.innerHTML = x;
		div.appendChild(btn);
		btn.id = x;
		btn.classList.add('button');
		btn.onclick = function(event) {
			// Функция клика на кнопку с определением this как текущую кнопку клика
			switch (this.innerHTML) {
				case 'C': // кнопка операцией очистки всего поля
					field.innerHTML = '';
					break;
				case '=': // кнопка вычисления результата
					field.innerHTML = eval(field.innerHTML);
					break;
				case '&lt;': // кнопка удаление последнего символа в field
					field.innerHTML = field.innerHTML.slice(0, -1);
					break;
				default: // добавить из обекта this символ в field
					field.innerHTML += this.innerHTML;
			}
		};
	}
	document.getElementById('=').style.backgroundColor = '#00E676';
	document.getElementById('<').style.backgroundColor = '#FF5252';
};

// создание кнопки включения калькулятора
var on = document.createElement('button');
on.innerHTML = 'Включить калькулятор';
// Включение калькулятора
on.onclick = function(event) {
	var calculator = new Calculator();
	document.body.removeChild(on);
	document.body.appendChild(off);
};

// создание кнопки выключения калькулятора
var off = document.createElement('button');
off.innerHTML = 'Выключить калькулятор';
document.body.appendChild(on);
// Выключение калькулятора
off.onclick = function(event) {
	document.body.removeChild(div);
	document.body.removeChild(off);
	document.body.appendChild(on);
};
