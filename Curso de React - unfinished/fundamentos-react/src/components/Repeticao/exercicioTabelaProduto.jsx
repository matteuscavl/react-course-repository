import React from 'react'
import '../../data/produtos'
import produtos from '../../data/produtos'
import './exercicioTabelaProduto.css'

export default (props) => {
    const newProdutos = produtos.map((itens, i) => {
        return (
            <tr key={itens.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{itens.id}</td>
                <td>{itens.nome}</td>
                <td>{itens.preco}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <td>Key</td>
                        <td>Produto</td>
                        <td>Preco</td>
                    </tr>
                </thead>
                <tbody>
                    {newProdutos}
                </tbody>
            </table>
        </div>
    )
}