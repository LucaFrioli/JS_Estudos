## MongoDB Compass

O MongoDB Compass é uma ferramenta gráfica de interface de usuário desenvolvida para facilitar a administração e a interação com bancos de dados MongoDB. Ela foi projetada para oferecer uma experiência visual e intuitiva, permitindo que os usuários explorem e gerenciem seus dados de forma mais eficiente, mesmo sem conhecimentos avançados em linguagem de consulta ou comandos de terminal.

**Principais Características:**

1. **Interface Gráfica Intuitiva:** O MongoDB Compass fornece uma interface gráfica fácil de entender, com representações visuais dos dados e das operações no banco de dados. Isso é particularmente útil para usuários que não estão familiarizados com a linguagem de consulta do MongoDB.

2. **Exploração de Dados:** A ferramenta permite aos usuários explorar os dados armazenados em suas coleções de maneira visual, exibindo documentos, campos e relacionamentos de forma amigável.

3. **Consulta Visual:** O Compass oferece uma ferramenta de consulta visual, onde os usuários podem construir consultas utilizando uma interface gráfica, tornando mais fácil criar consultas complexas sem a necessidade de conhecimentos aprofundados em linguagem de consulta.

4. **Índices e Otimização:** Facilita a criação e gerenciamento de índices para melhorar o desempenho das consultas, permitindo otimizar a forma como os dados são recuperados.

5. **Monitoramento em Tempo Real:** Oferece informações em tempo real sobre a performance do cluster MongoDB, incluindo estatísticas de operações, uso de recursos e outras métricas importantes.


**Tecnologia:**

O MongoDB Compass é construído utilizando tecnologias web modernas, como HTML, CSS e JavaScript. Ele utiliza o Electron, um framework que permite a criação de aplicativos de desktop multiplataforma utilizando tecnologias web padrão. Isso permite que o Compass seja executado como um aplicativo independente em diferentes sistemas operacionais, mantendo uma interface de usuário consistente.

# Instalando conectando e utilizando o Compass :

Primeiramente devemos instalar o [mongoDB Compass](https://www.mongodb.com/products/tools/compass), e ao entrar na página clicar em **Download Now**
Após ser redirecionado baixar a verção específica para o sistema operacional da máquina, e abrir o executavel.

Ao iniciar o programa veremos uma página com um card **New Connection** e uma caixa chamada URI, nela devemos adicionar a URI gerada na aula passada trocando o campo de senha, pela senha do usuário em questão e clicar no botão **Connect**.

Então agora estremos dentro do ambiente e já conectados com o Atlas, que foi criaod na aula passada, Apartir deste ponto poderemos ver um simbolo de `+` do lado de Databases, com ele podemos criar banco ded dados, e dentro dos bancos de dados Coleções, tornando muito ais fácil e intuitivo o manegamento do banco  de dados, em comparação ao uso do Atlas.

Se quiser ter certeza que tudo ocorreu como o esperado, podemos abrir o MongoDB Atlas, e dentro da aba Database, e clicar em **Browse Collections**, se tudo deu certo será possível ver a coleção criada apartir do Compass dentro do Atlas;
