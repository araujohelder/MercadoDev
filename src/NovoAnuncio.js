import React, { Component } from 'react'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'

class NovoAnuncio extends Component{

    constructor(props) {
        super(props)
        this.state = {
            sucess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        const file = this.foto.files[0]
        const { name } = file
        const ref = storage.ref(name)
        ref
            .put(file)
            .then(img => {
                const novoAnuncio = {
                    nome: this.nome.value,
                    descricao: this.descricao.value,
                    preco: this.preco.value,
                    telefone: this.telefone.value,
                    foto: img.metadata.downloadURLs[0],
                    vendedor:this.vendedor.value,
                    categoria: this.categoria.value 
                }
                base.push('anuncios', {
                    data: novoAnuncio
                }).then(() =>{
                    this.setState({sucess: true})
                })
            })
        event.preventDefault()
        return false
    }

    render() {
        return (
            <div>
                {this.state.sucess && <Redirect to='/'/>}
                <HeaderInterno />
                <div className='container' style={{paddingTop: '120px'}}>
                    <h1>Novo anúncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='foto'> Foto </label>
                            <input type='file' className='form-control' id='foto' placeholder='Foto' ref={(ref)=> this.foto = ref }/>
                        </div>   
                        <div className='form-group'>
                            <label htmlFor='nome'> Nome </label>
                            <input type='text' className='form-control' id='nome' placeholder='Nome' ref={(ref)=> this.nome = ref }/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='categoria'> Categorias </label>
                            <select class="form-control" ref={(ref) => this.categoria = ref}>
                                    
                                {
                                    this.props.categorias.map( cat => <option value={cat.url}>{cat.categoria}</option> )
                                }
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'> Descrição </label>
                            <input type='text' className='form-control' id='descricao' placeholder='Descrição' ref={(ref)=> this.descricao = ref }/>
                        </div> 
                        <div className='form-group'>    
                            <label htmlFor='preco'> Preço </label>
                            <input type='text' className='form-control' id='preco' placeholder='Preço' ref={(ref)=> this.preco = ref }/>
                        </div>
                        <div className='form-group'> 
                            <label htmlFor='telefone'> Telefone </label>
                            <input type='text' className='form-control' id='telefone' placeholder='Telefone' ref={(ref)=> this.telefone = ref }/>
                        </div>  
                        <div className='form-group'> 
                            <label htmlFor='vendedor'> Vendedor </label>
                            <input type='text' className='form-control' id='vendedor' placeholder='Vendendor' ref={(ref)=> this.vendedor = ref }/>
                        </div>  
                        <button type='submit' className='btn btn-primary'> Salvar Anúncio </button> 
                    </form>
                </div>  
            </div>
        )
    }
}

export default NovoAnuncio