<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/public/css/game.css" rel="stylesheet">
        <link href="/public/css/tela.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
        <script type="text/javascript" src="/public/js/mover.js"></script>
        <script type="text/javascript" src="/public/js/eventos.js"></script>
        <script type="text/javascript" src="/public/js/eventosmapa1.js"></script>
        <script type="text/javascript" src="/public/js/menumapa.js"></script>
    </head>
    <body>
        <div class="game">
            <div class="tela map" id='tela'>
                <img src="/public/img/characters/char.png" style="bottom:40%; right:45%;" id="char"/>
                <img src="/public/img/characters/obj.png" style="position: absolute; bottom:40%; right:60%; z-index: 0;" id="evento"/>
                <img src="/public/img/characters/obj.png" style="position: absolute; bottom:70%; right:45%; z-index: 0;" id="evento"/>
                <img src="/public/img/characters/Airien.png" style="position: absolute; bottom:40%; right:30%; z-index: 6;" id="evento"/>
                <img src="/public/img/characters/Airien.png" style="position: absolute; bottom:20%; right:45%; z-index: 8;" id="evento"/>
            </div>
            <div class="menu">
                <div class="caixa" id="menu">
                    <form action="/batalhar">
                        <?php foreach($dados as $d) { ?>
                            <input type="submit" class="item" name="area" value="<?=$d['nome']?>" onmouseover="teletransporte(<?=$d['posicao']?>);"/>
                        <?php } ?>
                    </form>
                </div>
                <div class="hidden" id="mensagem">
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