const methodsData = {
    'bissecao': {
        title: 'Método da Bisseção',
        desc: 'Encontre raízes em um intervalo [a, b].',
        fields: [
            { label: 'Função f(x)', type: 'text', placeholder: 'Ex.: x^2 - 4', id: 'func' },
            { label: 'Ponto a', type: 'number', placeholder: 'Ex.: 0', id: 'a' },
            { label: 'Ponto b', type: 'number', placeholder: 'Ex.: 2', id: 'b' },
            { label: 'Erro (ε)', type: 'number', placeholder: 'Ex.: 0.0001', id: 'erro' },
            { label: 'Máximo de Iterações', type: 'number', placeholder: 'Ex.: 50', id: 'maxIter' }
        ]
    },
    'ponto-fixo': {
        title: 'Método do Ponto Fixo (Iteração Linear)',
        /*desc: 'Requer uma função de iteração phi(x) tal que f(x) = phi(x) - x = 0.',*/
        desc: 'Requer uma função de iteração g(x)',
        fields: [
            { label: 'Função g(x)', type: 'text', placeholder: 'Ex.: sqrt(x + 2)', id: 'phi' },
            { label: 'Palpite Inicial (x0)', type: 'number', placeholder: 'Ex.: 0.5', id: 'x0' },
            { label: 'Erro (ε)', type: 'number', placeholder: 'Ex.: 0.0001', id: 'erro' },
            { label: 'Máximo de Iterações', type: 'number', placeholder: 'Ex.: 50', id: 'maxIter' }
        ]
    },        
    'newton': {
        title: 'Newton-Raphson',
        desc: 'Necessita da função e sua derivada.',
        fields: [
            { label: 'Função f(x)', type: 'text', placeholder: 'Ex.: x^2 - 4', id: 'func' },
            { label: 'Derivada f\'(x)', type: 'text', placeholder: 'Ex.: 2*x', id: 'deriv' },
            { label: 'Palpite Inicial (x0)', type: 'number', placeholder: 'Ex.: 1', id: 'x0' },
            { label: 'Erro (ε)', type: 'number', placeholder: 'Ex.: 0.0001', id: 'erro' },
            { label: 'Máximo de Iterações', type: 'number', placeholder: 'Ex.: 50', id: 'maxIter' }
        ]
    },
    'secante': {
        title: 'Método da Secante',
        desc: 'Aproximação usando dois pontos iniciais.',
        fields: [
            { label: 'Função f(x)', type: 'text', placeholder: 'Ex.: x^2 - 4', id: 'func' },
            { label: 'Palpite Inicial x0', type: 'number', placeholder: 'Ex.: 0', id: 'x0' },
            { label: 'Palpite Inicial x1', type: 'number', placeholder: 'Ex.: 1', id: 'x1' },
            { label: 'Erro (ε)', type: 'number', placeholder: 'Ex.: 0.0001', id: 'erro' },
            { label: 'Máximo de Iterações', type: 'number', placeholder: 'Ex.: 50', id: 'maxIter' }
        ]
    },
    'gauss': {
        title: 'Sistemas Lineares (Gauss)',
        desc: 'Insira a dimensão para gerar a matriz Ax = B.',
        isMatrix: true
    },
    'lu': {
        title: 'Fatoração LU',
        desc: 'Decompõe a matriz A em duas matrizes triangulares (L e U) para resolver Ax = B.',
        isMatrix: true
    },
    'jacobi': {
        title: 'Método de Jacobi',
        desc: 'Método iterativo para sistemas lineares. Requer que a matriz seja diagonal dominante para garantir convergência.',
        isMatrix: true,
        extraFields: [
            { label: 'Palpite Inicial (x0)', type: 'text', placeholder: 'Ex.: 0, 0, 0', id: 'x0_sys' },
            { label: 'Erro (ε)', type: 'number', placeholder: 'Ex.: 0.0001', id: 'erro' },
            { label: 'Máximo de Iterações', type: 'number', placeholder: 'Ex.: 50', id: 'maxIter' }
        ]
    },
    'gauss-seidel': {
        title: 'Método de Gauss-Seidel',
        desc: 'Semelhante ao Jacobi, mas utiliza valores já calculados na iteração atual para acelerar a convergência.',
        isMatrix: true,
        extraFields: [
            { label: 'Palpite Inicial (x0)', type: 'text', placeholder: 'Ex.: 0, 0, 0', id: 'x0_sys' },
            { label: 'Erro (ε)', type: 'number', placeholder: 'Ex.: 0.0001', id: 'erro' },
            { label: 'Máximo de Iterações', type: 'number', placeholder: 'Ex.: 50', id: 'maxIter' }
        ]
    },
    'regressao': {
        title: 'Regressão Linear',
        desc: 'Insira os valores dos pontos (x, y).',
        fields: [
            { label: 'Pontos X (separados por vírgula)', type: 'text', placeholder: 'Ex.: 1, 2, 3', id: 'valX' },
            { label: 'Pontos Y (separados por vírgula)', type: 'text', placeholder: 'Ex.: 4, 5, 6', id: 'valY' }
        ]
    },
    'mmq': {
        title: 'Mínimos Quadrados (MMQ)',
        desc: 'Ajuste de curvas para encontrar a melhor reta/função que se aproxima dos pontos fornecidos.',
        fields: [
           { label: 'Pontos X (separados por vírgula)', type: 'text', placeholder: 'Ex.: 1, 2, 3', id: 'valX' },
            { label: 'Pontos Y (separados por vírgula)', type: 'text', placeholder: 'Ex.: 4, 5, 6', id: 'valY' },
            { label: 'Grau do Polinômio', type: 'number', placeholder: 'Ex.: 2', id: 'grau' }
        ]
    }
};
function renderForm(methodKey) {
    const container = document.getElementById('dynamic-form-container');
    const data = methodsData[methodKey];

    const resultArea = document.getElementById('result-area');
    if (resultArea) {
        resultArea.classList.add('d-none'); 
    }
        
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));

    if (typeof event !== 'undefined' && event && event.target && event.target.classList) {
        event.target.classList.add('active');
    } else {
        const firstBtn = document.querySelector(`.nav-link[onclick*="${methodKey}"]`);
        if (firstBtn) firstBtn.classList.add('active');
    }

    let html = `<h3>${data.title}</h3><p class="text-muted">${data.desc}</p><hr><div class="row g-3">`;

    if (data.isMatrix) {
        html += `
            <div class="col-12 mb-3">
                <label class="form-label">Ordem da Matriz (n):</label>
                <input type="number" id="matrix-size" class="form-control" style="width: 80px" value="3" onchange="generateMatrixInputs()">
            </div>
            <div id="matrix-wrapper" class="table-responsive"></div>
        `;
        if (data.extraFields) {
            data.extraFields.forEach(field => {
                html += `
                    <div class="col-md-4">
                        <label class="form-label">${field.label}</label>
                        <input type="${field.type}" id="${field.id}" class="form-control" placeholder="${field.placeholder}">
                    </div>
                `;
            });
        }
    } else {
        data.fields.forEach(field => {
            const isWide = field.id.includes('val') || field.label.includes('f(x)') || field.label.includes('φ(x)');
            html += `
                <div class="${isWide ? 'col-12' : 'col-md-4'}">
                    <label class="form-label">${field.label}</label>
                    <input type="${field.type}" id="${field.id}" class="form-control" placeholder="${field.placeholder}">
                </div>
            `;
        });
    }
    html += `
        <div class="col-12 mt-4">
            <button class="btn btn-primary w-100" onclick="calculate('${methodKey}')">Calcular</button>
        </div>
    </div>`;
    container.innerHTML = html; 
    if (data.isMatrix) {
        generateMatrixInputs();
    }
}
function generateMatrixInputs() {
    const n = document.getElementById('matrix-size').value;
    const wrapper = document.getElementById('matrix-wrapper');
    let table = '<table class="table table-sm table-borderless"><tbody>';
    
    for (let i = 0; i < n; i++) {
        table += '<tr>';
        for (let j = 0; j < n; j++) {
            table += `<td><input type="number" class="form-control matrix-input" placeholder="Ex.: a${i+1}${j+1}"></td>`;
        }
        table += `<td class="fw-bold align-middle">|</td>`;
        table += `<td><input type="number" class="form-control matrix-input border-primary" placeholder="Ex.: b${i+1}"></td>`;
        table += '</tr>';
    }
    table += '</tbody></table>';
    wrapper.innerHTML = table;
}
function calculate(method) {
    const resultArea = document.getElementById('result-area');
    const resultContent = document.getElementById('result-content');
    resultArea.classList.remove('d-none');

    try {
        let res;
        let A = [], b = [];
        
        const erroField = document.getElementById('erro');
        const maxIterField = document.getElementById('maxIter');
        const er = (erroField && erroField.value !== "") ? parseFloat(erroField.value) : 1e-5;
        const maxint = (maxIterField && maxIterField.value !== "") ? parseInt(maxIterField.value) : 50;

        if (methodsData[method].isMatrix) {
            const inputs = document.querySelectorAll('.matrix-input');
            const n = parseInt(document.getElementById('matrix-size').value);
            let idx = 0;
            for (let i = 0; i < n; i++) {
                let row = [];
                for (let j = 0; j < n; j++) row.push(parseFloat(inputs[idx++].value));
                A.push(row);
                b.push(parseFloat(inputs[idx++].value));
            }
        }

        switch (method) {
            case 'bissecao':
                const f_bis = criarFuncao(document.getElementById('func').value);
                const a_bis = parseFloat(document.getElementById('a').value);
                const b_bis = parseFloat(document.getElementById('b').value);
                
                res = bissecao(f_bis, a_bis, b_bis, er, maxint);
                resultContent.innerHTML = `Raiz: ${res.raiz.toFixed(6)} | f(raiz): ${res.fr.toExponential(4)} | Iterações: ${res.iteracoes}`;
                break;

            case 'ponto-fixo':
                res = pontoFixo(
                    criarFuncao(document.getElementById('phi').value),
                    parseFloat(document.getElementById('x0').value),
                    er,
                    maxint
                );  
                resultContent.innerHTML = `Raiz: ${res.raiz.toFixed(6)} | Iterações: ${res.iter}`;
                break;

            case 'newton':
                res = newtonRaphson(
                    criarFuncao(document.getElementById('func').value),
                    criarFuncao(document.getElementById('deriv').value),
                    parseFloat(document.getElementById('x0').value),
                    er,
                    maxint
                );
                resultContent.innerHTML = `Raiz: ${res.raiz.toFixed(6)} | f(raiz): ${res.fr.toExponential(4)} | Iterações: ${res.iter}`;
                break;

            case 'secante':
                res = secante(
                    criarFuncao(document.getElementById('func').value),
                    parseFloat(document.getElementById('x0').value),
                    parseFloat(document.getElementById('x1').value),
                    er,
                    maxint
                );
                resultContent.innerHTML = `Raiz: ${res.raiz.toFixed(6)} | Iterações: ${res.iter}`;
                break;

            case 'gauss':
                let x = gaussPivot(A, b);
                resultContent.innerHTML = `Vetor Solução X: [${x.map(v => v.toFixed(4)).join(', ')}]`;
                break;

            case 'lu':
                res = fatoracaoLU(A, b);
                resultContent.innerHTML = `Vetor Solução X (LU): [${res.map(v => v.toFixed(4)).join(', ')}]`;
                break;

            case 'jacobi':
            case 'gauss-seidel':
                const x0 = document.getElementById('x0_sys').value.split(',').map(Number);
                const tipo = (method === 'jacobi') ? 'jacobi' : 'seidel';

                let A_numerica = A.map(field => field.map(v => Number(v)));
                let b_numerico = b.map(v => Number(v));
                let x0_numerico = x0.map(v => Number(v));
                
                const resultado = resolverIterativo(A_numerica, b_numerico, x0_numerico, er, maxint, tipo);
                resultContent.innerHTML = `
                    <div><strong>Solução X:</strong> [${resultado.x.map(v => v.toFixed(4)).join(', ')}]</div>
                    <div><strong>Iterações:</strong> ${resultado.iter} | <strong>Erro:</strong> ${resultado.erro.toExponential(2)}</div>
                `;
                break;
            case 'regressao':
                const x_vals = parseInputArray(document.getElementById('valX').value);
                const y_vals = parseInputArray(document.getElementById('valY').value);
                
                if (x_vals.length === 0 || y_vals.length === 0) {
                    throw new Error("Por favor, insira valores válidos para X e Y.");
                }

                const resReg = regressaoLinear(x_vals, y_vals);

                resultContent.innerHTML = `
                    <div><strong>Equação da Reta:</strong> y = ${resReg.a1.toFixed(4)}x + (${resReg.a0.toFixed(4)})</div>
                    <div><strong>Coeficiente a1 (Inclinação):</strong> ${resReg.a1.toFixed(6)}</div>
                    <div><strong>Coeficiente a0 (Intersecção):</strong> ${resReg.a0.toFixed(6)}</div>
                    <div><strong>R² (Determinação):</strong> ${resReg.r2.toFixed(6)}</div>
                `;
                break;
            case 'mmq':
                const x_mmq = parseInputArray(document.getElementById('valX').value);
                const y_mmq = parseInputArray(document.getElementById('valY').value);
                const grau = parseInt(document.getElementById('grau').value);

                if (isNaN(grau) || grau < 0) {
                    throw new Error("Por favor, insira um grau de polinômio válido (inteiro >= 0).");
                }

                const resMmq = minimosQuadrados(x_mmq, y_mmq, grau);

                let coeficientesHtml = "";
                resMmq.coeficientes.forEach((coef, index) => {
                    let termoGrau = resMmq.grau - index;
                    coeficientesHtml += `<div><strong>a${termoGrau}</strong> = ${coef.toFixed(4)}</div>`;
                });

                let polinomioStr = "y = ";
                resMmq.coeficientes.forEach((coef, index) => {
                    let termoGrau = resMmq.grau - index;
                    let sinal = "";
                    if (index > 0) {
                        sinal = coef >= 0 ? " + " : " - ";
                    } else if (coef < 0) {
                        sinal = "-"; 
                    }

                    let valorAbsoluto = Math.abs(coef).toFixed(4);

                    if (termoGrau > 1) {
                        polinomioStr += `${sinal}${valorAbsoluto}x<sup>${termoGrau}</sup>`;
                    } else if (termoGrau === 1) {
                        polinomioStr += `${sinal}${valorAbsoluto}x`;
                    } else {
                        polinomioStr += `${sinal}${valorAbsoluto}`;
                    }
                });

                resultContent.innerHTML = `
                    <h5>Polinômio Ajustado:</h5>
                    <div class="mb-3 p-2 bg-white border rounded text-center fs-5">${polinomioStr}</div>
                    <h5>Coeficientes:</h5>
                    <div class="mb-3">${coeficientesHtml}</div>
                    <div><strong>Soma dos Quadrados dos Resíduos (Sr):</strong> ${resMmq.Sr.toFixed(4)}</div>
                    <div><strong>Erro-Padrão da Estimativa (Syx):</strong> ${resMmq.Syx.toFixed(4)}</div>
                `;
                break;
        }

        resultArea.classList.remove('d-none');
    } catch (e) {
        resultArea.classList.remove('d-none');
        resultContent.innerHTML = `<span class="text-danger">Erro: ${e.message}</span>`;
    }
}
function criarFuncao(expressao) {
    let expFormatada = expressao.toLowerCase()
        .replace(/\^/g, '**')
        .replace(/\b(sin|cos|tan|asin|acos|atan|sqrt|log|exp|abs|floor|ceil|round|pi|e)\b/g, (match) => {
            return `Math.${match.toUpperCase() === 'PI' || match.toUpperCase() === 'E' ? match.toUpperCase() : match.toLowerCase()}`;
        });

    return (x) => {
        try {
            return new Function('x', `return ${expFormatada}`)(x);
        } catch (e) {
            throw new Error("Erro na expressão matemática.");
        }
    };
}
function bissecao(f, a, b, er, maxint) {
    if (!er) er = 1e-5;
    if (!maxint) maxint = 50;
    let teste = f(a) * f(b);
    if (teste > 0) {
        throw new Error('Não há mudança de sinal, modifique o intervalo!');
    }

    let iter = 0;
    let xr = b;
    let era = 100;

    while (iter < maxint) {
        let xrold = xr;
        xr = (a + b) / 2;
        iter++;

        if (xr !== 0) {
            era = Math.abs((b - a) / 2);
        }

        if (era <= er || iter >= maxint) {
            break;
        }

        let teste02 = f(a) * f(xr);

        if (teste02 < 0) {
            b = xr;
        } else if (teste02 > 0) {
            a = xr;
        } else {
            era = 0;
            break;
        }
    }
    return { raiz: xr, fr: f(xr), iteracoes: iter, erro: era };
}
function pontoFixo(g, x0, er, maxint) {
    if (!er) er = 1e-5;
    if (!maxint) maxint = 50;
    let int = 0;
    let xr = x0;
    let era = 100;

    while (int < maxint) {
        let xrold = xr;
        xr = g(xrold); 
        int = int + 1;

        if (xr !== 0) {
            era = Math.abs((xr - xrold) / xr); 
        }

        if (era <= er || int >= maxint) break;
    }
    return { raiz: xr, fr: g(xr), iter: int, erro: era };
}
function newtonRaphson(f, fl, x0, er, maxint) {
    if (!er) er = 1e-5;
    if (!maxint) maxint = 50;
    let int = 0;
    let xr = x0;
    let era = 100;

    while (int < maxint) {
        let xrold = xr;
        xr = xrold - f(xrold) / fl(xrold);
        int = int + 1;

        if (xr !== 0) {
            era = Math.abs((xr - xrold) / xr);
        }

        if (era <= er || int >= maxint) break;
    }
    return { raiz: xr, fr: f(xr), iter: int, erro: era };
}
function secante(f, xrolder, xrold, er, maxint) {
    if (!er) er = 1e-5;
    if (!maxint) maxint = 50;
    let int = 0;
    let era = 100;
    let xr = xrold;

    while (int < maxint) {
        let denominador = f(xrolder) - f(xrold);
        if (denominador === 0) break; 

        xr = xrold - f(xrold) * (xrolder - xrold) / denominador;
        int = int + 1;

        if (xr !== 0) {
            era = Math.abs((xr - xrold) / xr);
        }

        if (era <= er || int >= maxint) break;

        xrolder = xrold; 
        xrold = xr;
    }
    return { raiz: xr, fr: f(xr), iter: int, erro: era };
}
function gaussPivot(A, b) {
    let n = A.length;
    let Ab = A.map((row, i) => [...row, b[i]]);

    for (let j = 0; j < n - 1; j++) {
        let maxVal = Math.abs(Ab[j][j]);
        let pivotRow = j;
        for (let i = j + 1; i < n; i++) {
            if (Math.abs(Ab[i][j]) > maxVal) {
                maxVal = Math.abs(Ab[i][j]);
                pivotRow = i;
            }
        }

        if (pivotRow !== j) {
            [Ab[j], Ab[pivotRow]] = [Ab[pivotRow], Ab[j]];
        }

        for (let i = j + 1; i < n; i++) {
            let fator = Ab[i][j] / Ab[j][j];
            for (let k = j; k <= n; k++) {
                Ab[i][k] = Ab[i][k] - fator * Ab[j][k];
            }
        }
    }

    let x = new Array(n).fill(0);
    x[n - 1] = Ab[n - 1][n] / Ab[n - 1][n - 1];

    for (let i = n - 2; i >= 0; i--) {
        let soma = 0;
        for (let k = i + 1; k < n; k++) {
            soma += Ab[i][k] * x[k];
        }
        x[i] = (Ab[i][n] - soma) / Ab[i][i];
    }
    return x;
}
function fatoracaoLU(A, b) {
    let n = A.length;
    let L = Array.from({ length: n }, (_, i) => 
        Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
    );
    let U = A.map(row => [...row]);
    let P = Array.from({ length: n }, (_, i) => i); 

    for (let j = 0; j < n - 1; j++) {
        
        let maxVal = Math.abs(U[j][j]);
        let pivotRow = j;
        for (let i = j + 1; i < n; i++) {
            if (Math.abs(U[i][j]) > maxVal) {
                maxVal = Math.abs(U[i][j]);
                pivotRow = i;
            }
        }

        if (pivotRow !== j) {
            [U[j], U[pivotRow]] = [U[pivotRow], U[j]];
            [P[j], P[pivotRow]] = [P[pivotRow], P[j]];
            
            for (let k = 0; k < j; k++) {
                [L[j][k], L[pivotRow][k]] = [L[pivotRow][k], L[j][k]];
            }
        }

        for (let i = j + 1; i < n; i++) {
            let fator = U[i][j] / U[j][j];
            L[i][j] = fator;
            for (let k = j; k < n; k++) {
                U[i][k] -= fator * U[j][k];
            }
        }
    }

    let bn = P.map(idx => b[idx]);

    let d = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let soma = 0;
        for (let k = 0; k < i; k++) soma += L[i][k] * d[k];
        d[i] = (bn[i] - soma) / L[i][i];
    }

    let x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let soma = 0;
        for (let k = i + 1; k < n; k++) soma += U[i][k] * x[k];
        x[i] = (d[i] - soma) / U[i][i];
    }
    return x;
}
function resolverIterativo(A, b, x0, er, maxint, tipo) {
    let n = A.length;
    let x = [...x0];
    let xrold = [...x0];
    let int = 0;
    let era = 100;

    while (int < maxint) {
        xrold = [...x];
        for (let i = 0; i < n; i++) {
            let soma = 0;
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    let valUso = (tipo === 'seidel' && j < i) ? x[j] : xrold[j];
                    soma += A[i][j] * valUso;
                }
            }
            x[i] = (b[i] - soma) / A[i][i];
        }

        int++;
        
        let maxDiff = 0;
        let maxValX = 0;
        for (let k = 0; k < n; k++) {
            maxDiff = Math.max(maxDiff, Math.abs(x[k] - xrold[k]));
            maxValX = Math.max(maxValX, Math.abs(x[k]));
        }
        era = maxDiff / maxValX;

        if (era <= er) break;
    }
    return { x, iter: int, erro: era };
}
function regressaoLinear(x, y) {
    const n = x.length;
    if (y.length !== n) {
        throw new Error('Os vetores x e y precisam ter o mesmo número de dados.');
    }

    let sx = 0, sy = 0, sx2 = 0, sxy = 0, sy2 = 0;
    for (let i = 0; i < n; i++) {
        sx += x[i];
        sy += y[i];
        sx2 += x[i] * x[i];
        sxy += x[i] * y[i];
        sy2 += y[i] * y[i];
    }

    const a1 = (n * sxy - sx * sy) / (n * sx2 - Math.pow(sx, 2));
    const a0 = sy / n - a1 * sx / n;
    const numR = (n * sxy - sx * sy);
    const denR = Math.sqrt(n * sx2 - Math.pow(sx, 2)) * Math.sqrt(n * sy2 - Math.pow(sy, 2));
    const r2 = Math.pow(numR / denR, 2);

    return { a0, a1, r2 };
}
function minimosQuadrados(x, y, m) {
    const n = x.length;

    if (n <= m + 1) {
        throw new Error(`Dados insuficientes! Para grau ${m}, deve-se fornecer ao menos ${m + 2} pontos.`);
    }

    if (y.length !== n) {
        throw new Error('Os valores de x e y precisam ter o mesmo número de dados.');
    }

    let Z = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j <= m; j++) {
            row.push(Math.pow(x[i], m - j));
        }
        Z.push(row);
    }

    let Z_T = Array.from({ length: m + 1 }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= m; j++) {
            Z_T[j][i] = Z[i][j];
        }
    }

    let A_sistema = Array.from({ length: m + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= m; j++) {
            let soma = 0;
            for (let k = 0; k < n; k++) {
                soma += Z_T[i][k] * Z[k][j];
            }
            A_sistema[i][j] = soma;
        }
    }

    let b_sistema = new Array(m + 1).fill(0);
    for (let i = 0; i <= m; i++) {
        let soma = 0;
        for (let k = 0; k < n; k++) {
            soma += Z_T[i][k] * y[k];
        }
        b_sistema[i] = soma;
    }

    let a = gaussPivot(A_sistema, b_sistema);
    let Sr = 0;
    for (let i = 0; i < n; i++) {
        let y_calc = 0;
        for (let j = 0; j <= m; j++) {
            y_calc += Z[i][j] * a[j];
        }
        Sr += Math.pow(y[i] - y_calc, 2);
    }

    const gl = n - (m + 1);
    const Syx = Math.sqrt(Sr / gl);

    return { coeficientes: a, Sr, Syx, grau: m };
}
function parseInputArray(str) {
    return str.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
}

window.onload = () => renderForm('bissecao');