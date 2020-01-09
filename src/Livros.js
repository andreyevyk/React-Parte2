import React, {Fragment, Component} from 'react'
import Header from './Header'
import DataTable from './DataTable'

class Livros extends Component{
   constructor(props){
      super(props);

      this.state = {
         titulo: 'Livros',
         autores: [
           {
             nome: 'Paulo',
             livro: 'React',
             preco: '1000'
           },
           {
             nome: 'Daniel',
             livro: 'Java',
             preco: '99'
           },
           {
             nome: 'Marcos',
             livro: 'Design',
             preco: '150'
           },
           {
             nome: 'Bruno',
             livro: 'DevOps',
             preco: '100'
           }
         ],
      }
   }

   render() {
      return (
         <Fragment>
            <Header/>
            <div className="container">
               <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['livro']}/>
            </div>
         </Fragment>
      );
   }
}
export default Livros;