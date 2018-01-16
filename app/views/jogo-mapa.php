<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/public/css/game.css" rel="stylesheet">
        <link href="/public/css/tela.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
        <script type="text/javascript" src="/public/js/mapa.js"></script>
        <script type="text/javascript" src="/public/js/menus.js"></script>
    </head>
    <body>
        <div class="game">
            <div class="tela map" id="char">
                <img src="/public/img/aliado1.png" style="position: absolute; bottom:40%; right:45%;"/>
            </div>
            <div class="menu">
                <div class="caixa">
                    <form action="/batalhar">
                        <?php foreach($dados as $d) { ?>
                            <input type="submit" class="item" name="area" value="<?=$d['nome']?>"/>
                        <?php } ?>
                    </form>
                </div>
                <div class="caixa pequena">
                    <input type="submit" class="item" value="grupo"/>
                    <input type="submit" class="item" value="inventário"/>
                    <input type="submit" class="item" value="salvar"/>
                    <input type="submit" class="item" value="sair"/>
                </div>
            </div>
        </div>        
    </body>
</html>