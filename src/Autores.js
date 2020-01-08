import React, {Fragment, Component} from 'react'
import Header from './Header'
import DataTable from './DataTable'

class Autores extends Component{
   constructor(props){
      super(props);

      this.state = {
         titulo: 'Autores',
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
               <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['nome']}/>
            </div>
         </Fragment>
      );
   }
}
export default Autores;