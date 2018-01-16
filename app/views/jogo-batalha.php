<?php
    $inimigopvtotal = $inimigo['PVbase']*10;
    $inimigopv = $inimigo['PVbase']*10;
    $aliado1pvtotal = $aliado1['PV']*10;
    $aliado1pv = $aliado1['PV']*10;
?>
<!DOCTYPE html>
<html lang="en">
    <head >
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/public/css/game.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
        <script type="text/javascript" src="/public/js/batalha.js"></script>
    </head>
    <body onload="start(<?=$inimigopv?>, <?=$inimigopvtotal?>, <?=$aliado1pv?>, <?=$aliado1pvtotal?>); mensagem('<p>Um <?=$inimigo['nome']?> selvagem apareceu.</p>');">
        <div class="game">
            <div class="tela" style="background: url(/public/img/back1.png);">
                <div class="caixa pequena faixa1">
                    <p class="small"><?=$inimigo['nome']?></p>
                    <div id="ibarra">
                        <p class="seta">---------------⇀</p>
                    </div>
                    <p class="small"><?=$inimigo['nome']?></p>
                    <div id="i2barra">
                        <p class="seta">---------------⇀</p>
                    </div>
                    <p class="small"><?=$inimigo['nome']?></p>
                    <div id="i3barra">
                        <p class="seta">---------------⇀</p>
                    </div>
                </div>
                <div class="faixa2 char">
                    <img src="/public/img/inimigos/inimigo_<?=$inimigo['id']?>.png">
                </div>
                <div class="faixa2 char r2">
                    <img src="/public/img/inimigos/inimigo_<?=$inimigo['id']?>.png">
                </div>
                <div class="faixa2 char r3">
                    <img src="/public/img/inimigos/inimigo_<?=$inimigo['id']?>.png">
                </div>
                <div class="caixa pequena faixa3">
                    <p class="small"><?=$aliado1['apelido']?></p>
                    <div id="abarra">
                        <p class="seta">↼---------------</p>
                    </div>
                    <p class="small"><?=$aliado1['apelido']?></p>
                    <div id="a1barra">
                        <p class="seta">↼---------------</p>
                    </div>
                    <p class="small"><?=$aliado1['apelido']?></p>
                    <div id="a2barra">
                        <p class="seta">↼---------------</p>
                    </div>
                </div>            
                <div class="faixa4 char">
                    <img src="/public/img/aliado<?=$aliado1['id']?>.png">
                </div>
                <div class="faixa4 char l2">
                    <img src="/public/img/aliado<?=$aliado3['id']?>.png">
                </div>
                <div class="faixa4 char l3">
                    <img src="/public/img/aliado<?=$aliado5['id']?>.png">
                </div>
            </div>
            <div class="menu">
                <div class="hidden" id="ataques">
                    <input class="item" id="ataque1" type="submit" value="<?=$aliado1['ataque1nome']?>" onclick="ataque('<?=$aliado1['ataque1nome']?>',<?=$aliado1['ataque1tipo']?>,<?=$aliado1['ataque1sucesso']?>,<?=$aliado1['ataque1danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>)"/>
                    <input class="item" id="ataque2" type="submit" value="<?=$aliado1['ataque2nome']?>" onclick="ataque('<?=$aliado1['ataque2nome']?>',<?=$aliado1['ataque2tipo']?>,<?=$aliado1['ataque2sucesso']?>,<?=$aliado1['ataque2danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>)"/>
                    <input class="item" id="ataque3" type="submit" value="<?=$aliado1['ataque3nome']?>" onclick="ataque('<?=$aliado1['ataque3nome']?>',<?=$aliado1['ataque3tipo']?>,<?=$aliado1['ataque3sucesso']?>,<?=$aliado1['ataque3danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>)"/>
                    <input class="item" id="ataque4" type="submit" value="<?=$aliado1['ataque4nome']?>" onclick="ataque('<?=$aliado1['ataque4nome']?>',<?=$aliado1['ataque4tipo']?>,<?=$aliado1['ataque4sucesso']?>,<?=$aliado1['ataque4danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>)"/>
                    <input class="item" id="ataque5" type="submit" value="<?=$aliado1['ataque5nome']?>" onclick="ataque('<?=$aliado1['ataque5nome']?>',<?=$aliado1['ataque5tipo']?>,<?=$aliado1['ataque5sucesso']?>,<?=$aliado1['ataque5danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>)"/>
                    <input class="item" id="ataque6" type="submit" value="<?=$aliado1['ataque6nome']?>" onclick="ataque('<?=$aliado1['ataque6nome']?>',<?=$aliado1['ataque6tipo']?>,<?=$aliado1['ataque6sucesso']?>,<?=$aliado1['ataque6danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>)"/>
                </div>
                <div class="caixa" id="mensagem" >                  
                </div>
                <div class="caixa pequena">
                    <div class="item" id="rolagem">rolagem: __</div>
                    <input class="item" type="submit" value="atacar" onclick="menuatacar();"/>
                    <input class="item" type="submit" value="item"/>
                    <input class="item" type="submit" value="fugir"/>
                </div>
            </div>
        </div>
    </body>
</html>