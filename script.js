// 2. Вычислить значение полинома с введенными N, a0..aN, x

document.getElementById('input-n').addEventListener('input', createAInputs);
document.addEventListener('input', function (e) {
    let x = document.getElementById('input-x').value;
    let n = document.getElementById('input-n').value;
    let a = Array.from(document.querySelector('.inputs-a-container')
        .querySelectorAll('input')).map(input => input.value);

    writePolynom(n, x, a);
})

function createAInputs(e) {
    let inputAmount = e.target.value;
    let inputsAContainer = document.querySelector('.inputs-a-container');
    inputsAContainer.innerHTML = '';
    for (let i = 0; i < inputAmount; ++i) {
        let inputsAContainerItem = document.createElement('div');
        let inputA = document.createElement('input');
        inputA.type = 'number';

        inputsAContainerItem.innerText = `Input a${i}: `;
        inputsAContainerItem.appendChild(inputA);
        inputsAContainer.appendChild(inputsAContainerItem);
    }
}

function calcSum(n, x, a) {
    let sum = 0;
    for (var i = 0; i < n; ++i) {
        sum += a[i] * x ** i;
    }
    return sum;
}

function isPolynomCorrect(n, x, a) {
    return n && x && isCorrectArr(a);
}

function writeSum(n, x, a) {
    document.querySelector('.sum-container').innerText =
        `Total sum of polynom: ${calcSum(n, x, a)}`;
}

function removeSum(n, x, a) {
    document.querySelector('.sum-container').innerText = '';
}

function createPolynomString(n, x, a) {
    let polynomString = '';
    for (var i = 0; i < n; ++i) {
        polynomString += `${a[i]} x ${x}<sup>${i}</sup> `;
        if (i != n - 1) {
            polynomString += '+ ';
        }
    }
    return polynomString;
}

function writePolynom(n, x, a) {
    let polynomContainer = document.querySelector('.polynom-container');
    if (isPolynomCorrect(n, x, a)) {
        let polynomString = createPolynomString(n, x, a);
        polynomContainer.innerHTML = `<br>Your polynom: ${polynomString}`;
        writeSum(n, x, a);
    } else {
        polynomContainer.innerHTML = '';
        removeSum();
    }
}

function isCorrectArr(arr) {
    if (!arr.length) {
        return false;
    }
    for (var i = 0; i < arr.length; ++i) {
        if (!arr[i]) return false;
    }
    return true;
}