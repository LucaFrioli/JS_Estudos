# Criando primeiras configurações da base de nosso código

Caso ainda não tenha instalado as extensões do VSCode, as instale. elas estarão listadas no [arquivo anterior](readme.md#extensões-do-vscode), ou no [readme principal](../../README.md#recomendação-de-configuração-do-vscode-e-projeto-para-melhor-experiência-para-iniciantes-).

## Editor Config

Vamos iniciar criando a nossa pasta do projeto, como este projeto consiste em uma API iremos chamar ela de `backend`. Após a pasta ser criada, iremos abrila dentro de nosso VIsual Studio Code. e dentro do menu de display de pastas e arquivos iremos clicar com o botão direito do mouse, e selecionar a opção `Generate .editorconfig` (comando habilitado ao instalar a extensão).

Iremos perceber que um arquivo foi criado,ao abrirmos teremos o seguinte código :

```bash
    # EditorConfig is awesome: https://EditorConfig.org

    # top-most EditorConfig file
    root = true

    [*]
    indent_style = space
    indent_size = 4
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = false
    insert_final_newline = false
```
Nele iremos começar a realizar algumas mudanças, iniciando por retirar os comentários, que são as linhas que começam com `#`. Após isso iremos mudar o valor do **`ident_style`** para `tab`. No **`end_of_line`** deixaremos atribuido o valor `lf`(deixaremos assim pois a maioria dos servidores do mundo são baseados em UNIX, geralmente sendo servidores com kernel Linux). Na configuração **`trim_trailing_whitespace`** trocaremos o valor para `true`, e o **`insert_final_newline`** também trocaremos para `true`.

Ao realizar estas mudanças o arquivo ficará assim :
```bash
    root = true

    [*]
    indent_style = tab
    indent_size = 4
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
```

**OBS: experimente diferentes tipos de configurações e veja qual melhor se enquadra a sua equipe. Esta configuração específica é baseada em experiencias e preferências pessoais. O end_of_line, recomendo fortemente manter em lf, porém veja se se enquadra com a realidade de trabalho sua ou de sua equipe.**

## Iniciando o projeto e configurando o ESLint

Finalmente vamos iniciar o NodeJS dentro de nossa pasta, e instalar as nossas primeiras dependências
