<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/public/css/main.css" rel="stylesheet">
        <link href="/public/css/mapa.css" rel="stylesheet">        
        <link href="/public/css/fundos.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
        <script type="text/javascript" src="/public/js/mover.js"></script>
        <script type="text/javascript" src="/public/js/sistemaeventos.js"></script>
        <script type="text/javascript" src="/public/js/eventos.js"></script>
        <script type="text/javascript" src="/public/js/menumapa.js"></script>
    </head>
    <body onload="position();">
        <div class="game">
            <div class="tela" id='tela'>                
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
                <div class="hidden" id="">
                    <input type="submit" class="item" value="grupo"/>
                    <input type="submit" class="item" value="inventário"/>
                    <input type="submit" class="item" value="salvar"/>
                    <input type="submit" class="item" value="sair"/>
                </div>
            </div>
        </div>        
    </body>
</html>