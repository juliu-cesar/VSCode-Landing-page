import Table from "@/src/Table";
import TitleAndText from "@/src/TitleAndText";

export default function TableIcons() {
  return ( 
    <Table thWidth={55} tdWidth={150} tdWidth_2={200} >
        <table>
          <thead>
            <tr>
              <th>Ícone</th>
              <th>Nome</th>
              <th>Tipo de símbolo</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <th><img src="img/IntelliSense/MethodAndFunction.svg" alt="ícone método e funções" /></th>
                <td>Métodos e funções</td>
                <td><span className="codeSnippet_2">method, function, constructor</span></td>
              </tr>
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Variable.svg" alt="ícone variáveis" /></th>
                <td>Variáveis</td>
                <td ><span className="codeSnippet_2">variable</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Field.svg" alt="ícone campos" /></th>
                <td>Campos</td>
                <td ><span className="codeSnippet_2">field</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-parameter.svg" alt="ícone parâmetro de tipo" /></th>
                <td>Parâmetros de tipo</td>
                <td ><span className="codeSnippet_2">typeParameter</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-constant.svg" alt="ícone constante" /></th>
                <td>Constantes</td>
                <td ><span className="codeSnippet_2">constant</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Class.svg" alt="ícone classe" /></th>
                <td>Classe</td>
                <td ><span className="codeSnippet_2">class</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Interface.svg" alt="ícone interface" /></th>
                <td>Interfaces</td>
                <td ><span className="codeSnippet_2">interface</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-structure.svg" alt="ícone estruturas" /></th>
                <td>Estruturas</td>
                <td ><span className="codeSnippet_2">struct</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-event.svg" alt="ícone variáveis" /></th>
                <td>Eventos</td>
                <td ><span className="codeSnippet_2">event</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-operator.svg" alt="ícone variáveis" /></th>
                <td>operadores	</td>
                <td ><span className="codeSnippet_2">operator</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Module.svg" alt="ícone variáveis" /></th>
                <td>Módulos</td>
                <td ><span className="codeSnippet_2">module</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Property.svg" alt="ícone variáveis" /></th>
                <td>Propriedades e Atributos</td>
                <td ><span className="codeSnippet_2">property</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/EnumItem.svg" alt="ícone variáveis" /></th>
                <td>Valores e Enumerações</td>
                <td ><span className="codeSnippet_2">value,enum</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Reference.svg" alt="ícone variáveis" /></th>
                <td>Referências</td>
                <td ><span className="codeSnippet_2">reference</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Keyword.svg" alt="ícone variáveis" /></th>
                <td>Palavras-chave</td>
                <td ><span className="codeSnippet_2">keyword</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-file.svg" alt="ícone variáveis" /></th>
                <td>arquivos</td>
                <td ><span className="codeSnippet_2">file</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/symbol-file.svg" alt="ícone variáveis" /></th>
                <td>Pastas</td>
                <td ><span className="codeSnippet_2">folder</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/ColorPalette.svg" alt="ícone variáveis" /></th>
                <td>cores</td>
                <td ><span className="codeSnippet_2">color</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Ruler.svg" alt="ícone variáveis" /></th>
                <td>Unidade</td>
                <td ><span className="codeSnippet_2">unit</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/Snippet.svg" alt="ícone variáveis" /></th>
                <td>Prefixos de trecho</td>
                <td ><span className="codeSnippet_2">snippet</span></td>
              </tr>                     
              {/* ----- */}
              <tr>
                <th><img src="img/IntelliSense/String.svg" alt="ícone variáveis" /></th>
                <td>Palavras</td>
                <td ><span className="codeSnippet_2">text</span></td>
              </tr>                     
            </tbody>
        </table>
      </Table>
   );
}
