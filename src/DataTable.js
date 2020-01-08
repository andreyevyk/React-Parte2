import React from "react";

const DataTable = props =>{
   console.log(props);
   console.log(props.colunas);
   let linhas = props.dados.map(item => 
      <tr key={item.id}>
         {props.colunas.map(coluna => 
            <td key={`${item.id}${item[coluna]}`}> {item[coluna]} </td>
         )}
      </tr>
   )
   
   return(
      <table>
         <thead>
            <tr>
               <th>{props.titulo}</th>
            </tr>
         </thead>
         <tbody>
            {linhas}
         </tbody>
      </table>
   );
   
}
export default DataTable;