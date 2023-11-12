require('dotenv').config();

const {PythonShell} = require('python-shell')

async function testPy() {
    var imglink = "https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SY450_.jpg";
    var link = 'https://amzn.to/49w7rHe'

    const { IG_USERNAME, IG_PASSWORD } = process.env;

    const options = {
        mode: 'text',
        args: [IG_USERNAME, IG_PASSWORD, imglink, "R$ 386,10", "(10% off)", "R$ 100,00", "Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Cor Preta", "Favor desconsiderar esse story é um teste.", link]
    };

    try {
        PythonShell.run('./src/python/instagram.py', options, (err, results) => {
            if (err) console.log(err);
            console.log(results)
            // for (const result of results) {
            //     if (result.includes('Erro:')) {
            //         console.log(result)
            //     }
            // }
        })
    } catch (err) {
        console.log(err.message)
    }
}

testPy()