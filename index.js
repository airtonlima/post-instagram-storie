require('dotenv').config();

const {PythonShell} = require('python-shell')

async function testPy() {

    const product = {
        name: "Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Cor Preta",
        image: "https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SY450_.jpg",
        link: "https://amzn.to/3sEQbPj",
        price: "R$ 386,10"
    };

    const options = {
        mode: 'text',
        args: [
            process.env.IG_USERNAME, 
            process.env.IG_PASSWORD, 
            product.name,
            product.image,
            product.link,
            product.price,
        ]
    };

    try {
        PythonShell.run('./src/python/instagram.py', options, (err, results) => {
            if (err) console.log(err);
            for (const r of results) {
                console.log('>', r);
            }
        });
    } catch (err) {
        console.log(err.message)
    }
}

testPy()