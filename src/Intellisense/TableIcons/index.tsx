import Table from "@/src/Table";
import TitleAndText from "@/src/TitleAndText";

export default function TableIcons() {
  return ( 
    <Table thWidth={40} tdWidth={80} >
        <table>
          <thead>
            <tr>
              <th>Ícone</th>
              <th>Nome</th>
              <th>Tipo de símbolo</th>
            </tr>
            <tbody>
              <TitleAndText>                
              <tr>
                <th><img src="img/IntelliSense/MethodAndFunction.svg" alt="ícone método e funções" /></th>
                <td>Métodos e funções</td>
                <td><span className="codeSnippet_2">method, function, constructor</span></td>
              </tr>
              <tr>
                <th><img src="img/IntelliSense/MethodAndFunction.svg" alt="ícone método e funções" /></th>
                <td>Variáveis</td>
                <td ><span className="codeSnippet_2">variable</span></td>
              </tr>                     
              </TitleAndText>
            </tbody>
          </thead>
        </table>
      </Table>
   );
}
