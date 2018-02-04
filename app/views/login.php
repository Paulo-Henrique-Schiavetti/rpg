<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="/public/js/login.js"></script>
        <link href="/public/css/main.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
    </head>
    <body>
        <div class="game">
            <div class="tela caixa">
                <h1>Acesse sua conta:</h1>
                <form action="/jogar" method="post" onSubmit="return(login());">
                    <div><label>email:</label></div>
                    <div><input type="email" name="email" id="email"/></div>
                    <div><label>senha:</label></div>
                    <div><input type="password" name="senha" id="senha"/></div>
                    <input type="submit" class="botao" value="login"/>
                </form> 
            </div>
            <div class="menu">
                <div class="caixa">
                <h2>Bem-vindo ao JoJo's bizarre adventures online!</h2>
                <br/>
                <h2>É sua primeira vez aqui:<a href="/">cadastre-se.</a>Ou saiba<a href="/">como jogar.</a></h2>
                </div>
            </div>
        </div>
    
    </body>
</html>