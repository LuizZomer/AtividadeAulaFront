import * as Styles from './styles'

export const Table = ({data}) => {
  return (
    <Styles.TableStyled border={1}>
        <thead>
            <Styles.TableHead>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Estoque (Kg)</th>
                <th>Ações</th>
            </Styles.TableHead>
        </thead>
        <tbody>
            {data.map((data) => (
                <Styles.TableRow key={data.id}>
                    <Styles.TableData>{data.id}</Styles.TableData>
                    <Styles.TableData>{data.name}</Styles.TableData>
                    <Styles.TableData>{data.price}</Styles.TableData>
                    <Styles.TableData>{data.stock}</Styles.TableData>
                    <Styles.TableData>
                        <Styles.actionStyled>
                            <Styles.ButtonStyled>Editar</Styles.ButtonStyled>
                            <Styles.ButtonStyled>Excluir</Styles.ButtonStyled>
                        </Styles.actionStyled>
                    </Styles.TableData>
                </Styles.TableRow>
            ))}
        </tbody>
    </Styles.TableStyled>
  )
}
