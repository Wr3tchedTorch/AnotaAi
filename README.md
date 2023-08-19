# AnotaAi

## Tabela de conteúdos

- [Porque desenvolvi esse site?](#porque-desenvolvi-esse-site)
- [Qual o principal problema encontrado](#qual-o-principal-problema-encontrado)
- [Como executar o projeto?](#como-executar-o-projeto)
- [Como contribuir?](#como-contribuir)
- [Redes sociais](#redes-sociais)
- [Licença](#licença)

### Porque desenvolvi esse site?

O AnotaAI é um site onde os usuários podem deixar notas totalmente anônimas, ele foi desenvolvido por motivos completamente didáticos, tendo em foco desenvolver minhas habilidades em ferramentas como ReactJS e Express, expandindo meu conhecimento na área de programação, adquirindo experiência em projetos fullstack, e, consequentemente, aumentando o valor do meu Portfólio para uma possivel entrevista de emprego.

### Qual o principal problema encontrado

O problema principal desse site é o fato das notas serem anônimas, isso significa que as pessoas podem digitar o que quiserem sem consequências, o que torna esse projeto também em um teste social, por conta disso o site utiliza um algoritmo para filtrar qualquer xingamento ou palavra inadequada automáticamente antes de salva-la no banco de dados.

### Como executar o projeto?

Requisitos:

- Ter o gerenciador de pacotes <a href="https://www.npmjs.com">npm</a> instalado no seu computador
- Ter Postgresql instalado na sua maquina, ou rodando em um servidor remoto

#### Back-end

Para executar o projeto basta abrir a pasta "Server" por um terminal, e executar os comandos:

```
npm install
```

```
npm run dev
```

Se os comandos terminarem de rodar sem erros você vai observar um link no terminal escrito http://localhost:10000, depois basta abrir esse link em um navegador qualquer.
Se algum erro aparecer é provavelmente porque a porta já está ocupada, nesse caso você precisará alterar a constante `PORT` no arquivo index.js.

#### Front-end

Na parte do front-end você precisará alterar o url base da biblioteca axios, acessando o diretório:

```
client->src->api->axios.tsx
```

Abra esse arquivo e mude o baseUrl para "http://localhost:10000/note", se seu projeto estiver sendo executado em outra porta você pode colocar ela no lugar da porta 10000 no url.

Feito isso rode o seguinte comando em um novo terminal:

```
npm run dev
```

#### Banco de dados

Acesse o seguinte arquivo:

```
server->sequelize->config->config.js
```

e substitua `process.env.DATABASE_URL` com a url do seu banco de dados

### Como contribuir?

Eu ficaria feliz em receber críticas construtivas sobre o meu código ou sobre o site, caso você tenha observado algum bug, imperfeição no design, ou alguma forma de otimizar o código, você pode entrar em contato comigo pelas redes sociais apresentadas no próximo topico

### Redes sociais

- Instagram: https://www.instagram.com/ericericeri_/
- Linkedin: https://www.linkedin.com/in/eric-moura-368b4724b/

### Licença

MIT License

Copyright (c) 2023 Eric G. Moura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
