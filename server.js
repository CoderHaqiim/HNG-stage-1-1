const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8083

app.use(cors())
app.use(express.json())

function isArmstrong(num) {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    return digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0) === num;
}

const isNumber = (num) => {
    if(!Number.isInteger(num)) return false

    const result = !Number.isNaN(num)
    return result
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
}


const getFunFact = async (num) => {
    try{
        const res = await fetch(`http://numbersapi.com/${num}/math`)
        if(res.ok){
            const response = await res.text()
            return response

        }else{
            return "no fun fact"
        }
    }
    catch(error){
        console.error(error)
        return "no fun fact"
    }
}

const evenOdd = (num) => {
   const result = num % 2 === 0 ? 'even' : 'odd'
   return result
}

app.get('/api/classify-number', async(req,res)=>{
    const {number} = req.query
    let nomba;

    if(!number){
        return res.status(404).json({message: 'resource not found'})
    }
    nomba = Number(number)

    if(!isNumber(nomba)){
        return res.status(400).json({number:"alphabet", error: true})
    }

    const funFact = await getFunFact(nomba)
    const properties = isArmstrong(nomba)? ["armstrong", evenOdd(nomba)] : [evenOdd(nomba)]

    res.status(200).json({
        number:nomba,
        is_prime: isPrime(nomba),
        is_perfect: isPerfect(nomba),
        properties:properties,
        digit_sum: Math.abs(nomba).toString().split("").reduce((sum, digit) => sum + parseInt(digit, 10), 0),
        fun_fact: funFact
    })
})

app.use((req,res)=>{
    return res.status(404).json({message:"requested resource not found"})
})

app.listen(PORT, ()=>{
    console.log("server listening at port " + PORT)
})