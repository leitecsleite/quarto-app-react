import React from 'react';
import './estilo.css';

// inserimos o parâmetro (props) no nosso componente
// Definimosonde as propriedades vão aparecer. 
export default function ItemLista(props) {
  return (
    <div className="boxSigno">
      <div className="nomeSigno">
        {props.signo}
      </div>
      
      <img className="imagemSigno" src="/assets/aquario.jpg" alt="Aquário"/>
      
      <div className="periodoNascimento">
        {props.dataInicio} - {props.dataFim}
      </div>
    </div>
  )
}
/** imos nosso componente recebe um parâmetro (do tipo objeto) com as propriedades que serão usadas.

O nome do parâmetro precisa ser props?
Não necessariamente. Assim como em uma função esse parâmetro pode ter qualquer nome, porém é comum entre os programadores React utilizar o nome props.

Por que as propriedades foram colocadas dentro de chaves?
Sempre que precisamos exibir um código JavaScript dentro do JSX utilizamos chaves. Neste caso estamos exibindo uma variável.

Outros exemplos:

Uma operação matemática:
<p> { 1 + 2 } </p>
O retorno de uma função:
<p> { retornaTexto() } </p */