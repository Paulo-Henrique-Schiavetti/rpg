<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/public/css/game.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
    </head>
    <body>
        <div class="game">
            <div class="tela caixa">
                <h1>Acesse sua conta:</h1>
                <form action="/jogar" method="post">
                    <div><label>email:</label></div>
                    <div><input type="email" name="email"/></div>
                    <div><label>senha:</label></div>
                    <div><input type="password" name="senha"/></div>
                    <input type="submit" class="botao" value="login"/>
                </form>                
                <p>é sua primeira vez aqui: <a href="/">cadastre-se</a></p>
            </div>
            <div class="menu">
                <div class="caixa">
                <p>Bem-vindo ao JoJo's bizarre adventures online!</p>
                </div>
                <div class="caixa pequena">
                    <a href="/">como jogar</a>
                </div>
            </div>
        </div>
    
    </body>
</html>