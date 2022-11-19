const valorVenda = document.querySelector('#valorVenda')
const porcentagem = document.querySelector('#porcentagem')

const calcPorcentagem = () => {

  if (valorVenda.value !== '' && porcentagem.value !== '') {
    const valorVenda1 = (parseFloat(valorVenda.value))
    const porcentagem1 = (parseFloat(porcentagem.value))
    const Total = (((parseFloat(valorVenda.value) * parseFloat(porcentagem.value)))) / 100
    const imobiliaria = (Total * 5)/10
    const vendedor = (Total * 4)/10
    const captador = (Total * 1)/10
        
    resultado.innerHTML = `Valor Venda: R$ ${valorVenda1.toFixed(2)}`
    resultado1.innerHTML = `Porcentagem: ${porcentagem1.toFixed(0)}%`
    resultado2.innerHTML = `Total: R$ ${Total.toFixed(2)}`
    resultado3.innerHTML = `Imobiliária (50%): R$ ${imobiliaria.toFixed(2)}`
    resultado4.innerHTML = `Vendedor (40%): R$ ${vendedor.toFixed(2)}`
    resultado5.innerHTML = `Captador (10%): R$ ${captador.toFixed(2)}`

    
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}

function limparForm() {
	document.getElementById('valorVenda').value = "";
  document.getElementById('porcentagem').value = "";
  resultado.innerHTML = "";
  resultado1.innerHTML = "";
  resultado2.innerHTML = "";
  resultado3.innerHTML = "";
  resultado4.innerHTML = "";
  resultado5.innerHTML = "";
  
  document.getElementById('valorVenda').focus();
  }