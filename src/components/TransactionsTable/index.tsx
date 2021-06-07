import {Container} from './styles'

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$12000</td>
                        <td>Dev</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="withdraw">-R$500</td>
                        <td>Dev</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td>R$12000</td>
                        <td>Dev</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}