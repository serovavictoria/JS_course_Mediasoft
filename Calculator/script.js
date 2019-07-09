let firstN =fNumber();
let secondN = sNumber();
let oper = operat();
function fNumber ()
{ 
	let firstNumber = prompt("Введите первое число");
	let firstNumber1 =+ firstNumber;
	return firstNumber1;
}
function sNumber()
{
	let secondNumber = prompt("Введите второе число");
	let secondNumber1 =+ secondNumber;
	return secondNumber1;
}
function operat()
{
   let operation = prompt("Введите операцию");
   return operation;
}
function calculator(firstN,secondN,oper) 
{
	if (isNaN(firstN)||isNaN(secondN))
	{
		alert('Кажется, что Вы что-то не так ввели, попробуйте еще раз');
	}
	else
		 var result;
		switch(oper)
		{
			case'+':
			result = firstN + secondN;
			break;
			case'-':
			result = firstN - secondN;
			break;
			case'*':
			result = firstN *  secondN;
			break;
			case'/':
			result = firstN / secondN;
			break;
			case'%':
			result = firstN % secondN;
			break;
			default:
			alert('Операция некорректна');
		}
		alert ("Результат : " + result);
}
calculator(firstN,secondN,oper);

