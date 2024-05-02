## Categories

#### RFs

- [x] Deve ser possível listar todas as categorias
- [x] Deve ser possível criar uma categoria
- [x] Deve ser possível excluir uma categoria pelo id

#### RNFs

- [x] As categorias devem ser paginadas
- [ ] Somente administradores podem editar/excluir as categorias

## Produtos

#### RFs

- [ ] Deve ser possível cadastrar um produto
- [ ] Deve ser possível remover um produto pelo id
- [ ] Deve ser possível editar um produto

#### RNFs

- [ ] Os produtos devem ser paginados
- [ ] Somente administradores podem editar/excluir os produtos

## Users

#### RFs

- [x] Deve ser possível cadastrar um usuário
- [x] O perfil do usuário pode ser obtido através do ID
- [x] O usuário deve se autenticar com e-mail e senha

#### RNFs

- [x] O _password_ e o _confirmPassword_ devem ser iguais
- [x] O _password_ deve ser registrado no banco de dados com hash
- [x] Não deve ser possível criar emails duplicados
- [x] Se o usuário se autenticar com sucesso, deve receber um _token_ JWT para se identificar
- [x] Ao realizar o cadastro o _token_ JWT será enviado
- [ ] Retornar um _refreshToken_ e salvar nos cookies
