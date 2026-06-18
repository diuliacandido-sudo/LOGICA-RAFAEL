//ATIVIDADE 1 PEBA:
function pepequeno(){
    alert("Não fiz ainda")}
function peba(){  
//ler o numero de vitoroas
let vitorias = Number(prompt("quantas vitorias?"))
//ler o numero de empates
let empates = Number(prompt("quantos empates?"))
//calcular pontos
let pontos =   vitorias *3 + empates
//mostrar o resultado
 alert("o seu  time tem : " + pontos)
}
function pepequeno(){ 
 // ATIVIDADE 2 Pé Pequeno e o prejuízo das trocas
 let preco = Number(prompt("preco de cada par de calçados"))
 let quantidade = number(prompt("quantidades de pares trocados: "))
 let valeTrocas = preco * quantidade

 alert("a loja vai receber R$ "+ valeTroca + "em vale-trocas")
}

function GuilhermePortões(){
    //ATIVIDADE 3 GUILHERME  PORTÕES
let clt = Number(prompt("quantidade de CLT: ") )
let estagiarios = Number(prompt("quantidade de estagiarios: "))
let pj = Number (prompt("quantidades de PJ"))
let totalDeves = clt + estagiorios + pj

alert("total de deves: " + totalDeves)
}
function TrajetoPomar(){
//ATIVIDADE 4 Trajeto Pomar e o estoque de frutas

let  inicial = Number(prompt("Qual a quantidade inicial de laranjas: "))
let   final = Number(prompt("Qual a quantidadei final de laranjas: "))
let vendasdiárias = inicial + final
 
alert("TrajetoPomar vai receber R$ "+ vendasdiárias)
}


function  PeErnanBuco (){
//ATIVIDADE 5 Pe. Ernan Buco 

let custos = Number(prompt("custos mensais da igreja: "))
let recebido = Number(prompt("valor recebido de doações e dizimos: "))
let falta = custos - recebido

alert("falta R$ " + falta + "para pagar completamente os custos mensais: ")
}

function Junin(){
    //ATIVIDADE 6  JUNIN
    let SalarioMensal = Number(prompt("salario mensal: "))
    let DiasTrabalhados = Number (prompt("dias trabalhados: "))
    let salarioDiario = SalarioMensal / DiasTrabalhados
    let SalarioSemanal = salarioDiario * 5

    alert("salario por dia: R$" +  SalarioSemanal)
}


function  TellesTransportes(){ 
//ATIVIDADE 7  Telles Transportes
let pesoBruto = Number(prompt("peso bruto do (caminhao + carga): "));
let tara = Number(prompt("tara do caminhao(peso do caminhao vazio):"));
let pesoCarga = pesoBruto - tara;

alert("o peso de carga é: " + pesoCarga + "kg");

}