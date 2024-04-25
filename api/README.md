
## Categories

#### RFs

- [x] Deve ser possível listar todas as categorias
- [x] Deve ser possível criar uma categoria
- [x] Deve ser possível excluir uma categoria pelo id

#### RNFs

- [x] As categorias devem ser paginadas

## Users

#### RFs

- [x] Deve ser possível cadastrar um usuário
- [x] O perfil do usuário pode ser obtido através do ID
- [x] O usuário deve se autenticar com e-mail e senha

#### RNFs

- [x] O *password* e o *confirmPassword* devem ser iguais
- [x] O *password* deve ser registrado no banco de dados com hash
- [x] Não deve ser possível criar emails duplicados
- [x] Se o usuário se autenticar com sucesso, deve receber um *token* JWT para se identificar
- [x] Ao realizar o cadastro o *token* JWT será enviado
- [ ] Retornar um *refreshToken* e salvar nos cookies