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
                <p>Bem-vindo ao JoJo's bizarre adventures online!<br/>
                É sua primeira vez aqui: <a href="/">cadastre-se</a></p>
                </div>
                <div class="caixa pequena">
                    <a href="/">como jogar</a>
                </div>
            </div>
        </div>
    
    </body>
</html>