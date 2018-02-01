<?php
    $aliado1pvtotal = $aliado1['PV'];
    $aliado1pv = $aliado1['PV']; 
    $aliado2pvtotal = $aliado2['PV'];
    $aliado2pv = $aliado2['PV'];    
    $aliado3pvtotal = $aliado3['PV'];
    $aliado3pv = $aliado3['PV'];
    $aliado4pvtotal = $aliado4['PV'];
    $aliado4pv = $aliado4['PV'];
    $aliado5pvtotal = $aliado5['PV'];
    $aliado5pv = $aliado5['PV'];

    $p = 0;
    foreach ($inimigos as $i) {
        $string_inimigos[$p] = implode("|", $i);        
        $p++;
    }
    $string_inimigos = implode("||", $string_inimigos);    
?>
<!DOCTYPE html>
<html lang="en">
    <head >
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/public/css/game.css" rel="stylesheet">
        <link href="/public/css/tela.css" rel="stylesheet">
        <link href="/public/css/text.css" rel="stylesheet">
        <script type="text/javascript">
            var inimigos = [];
            var string_inimigos = '<?=$string_inimigos?>';
            var inimigos = string_inimigos.split("||");
        </script>
        <script type="text/javascript" src="/public/js/batalha.js"></script>
        <script type="text/javascript" src="/public/js/batalhastart.js"></script>
        <script type="text/javascript" src="/public/js/aliados.js"></script>
        <script type="text/javascript" src="/public/js/menubatalha.js"></script>
    </head>
    <body onload="start(<?=$aliado1pv?>, <?=$aliado1pvtotal?>, <?=$aliado2pv?>, <?=$aliado2pvtotal?>, <?=$aliado3pv?>, <?=$aliado3pvtotal?>, <?=$aliado4pv?>, <?=$aliado4pvtotal?>, <?=$aliado5pv?>, <?=$aliado5pvtotal?>); mensagem('<p>Um bando selvagem aparece.</p>'); menu3();">
        <div class="game">
            <div class="tela forest">
                <div class="inimigo" id="campoinimigo">          
                </div>    
                <div class="aliado">
                    <div class="char">
                        <img src="/public/img/aliados/aliado<?=$aliado1['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado1['apelido']?></p>
                            <div id="abarra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>
                    <div class="char">
                        <img src="/public/img/aliados/aliado<?=$aliado2['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado2['apelido']?></p>
                            <div id="a2barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>
                    <div class="char">
                        <img src="/public/img/aliados/aliado<?=$aliado3['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado3['apelido']?></p>
                            <div id="a3barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>
                    <div class="char">
                        <img src="/public/img/aliados/aliado<?=$aliado4['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado4['apelido']?></p>
                            <div id="a4barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>          
                    <div class="char">
                        <img src="/public/img/aliados/aliado<?=$aliado5['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado5['apelido']?></p>
                            <div id="a5barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
            <div class="menu">
                <div class="hidden" id="ataques">
                    <input class="item" id="ataque1" type="submit" value="<?=$aliado1['ataque1nome']?>" onclick="ataque('<?=$aliado1['ataque1nome']?>',<?=$aliado1['ataque1tipo']?>,<?=$aliado1['ataque1sucesso']?>,<?=$aliado1['ataque1danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>)"/>
                    <input class="item" id="ataque2" type="submit" value="<?=$aliado1['ataque2nome']?>" onclick="ataque('<?=$aliado1['ataque2nome']?>',<?=$aliado1['ataque2tipo']?>,<?=$aliado1['ataque2sucesso']?>,<?=$aliado1['ataque2danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>)"/>
                    <input class="item" id="ataque3" type="submit" value="<?=$aliado1['ataque3nome']?>" onclick="ataque('<?=$aliado1['ataque3nome']?>',<?=$aliado1['ataque3tipo']?>,<?=$aliado1['ataque3sucesso']?>,<?=$aliado1['ataque3danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>)"/>
                    <input class="item" id="ataque4" type="submit" value="<?=$aliado1['ataque4nome']?>" onclick="ataque('<?=$aliado1['ataque4nome']?>',<?=$aliado1['ataque4tipo']?>,<?=$aliado1['ataque4sucesso']?>,<?=$aliado1['ataque4danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>)"/>
                    <input class="item" id="ataque5" type="submit" value="<?=$aliado1['ataque5nome']?>" onclick="ataque('<?=$aliado1['ataque5nome']?>',<?=$aliado1['ataque5tipo']?>,<?=$aliado1['ataque5sucesso']?>,<?=$aliado1['ataque5danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>)"/>
                    <input class="item" id="ataque6" type="submit" value="<?=$aliado1['ataque6nome']?>" onclick="ataque('<?=$aliado1['ataque6nome']?>',<?=$aliado1['ataque6tipo']?>,<?=$aliado1['ataque6sucesso']?>,<?=$aliado1['ataque6danobase']?>,<?=$aliado1['AF']?>,<?=$aliado1['AM']?>,<?=$aliado1['AN']?>,<?=$aliado1['AD']?>)"/>
                </div>
                <div class="caixa" id="mensagem" >                  
                </div>
                <div class="caixa pequena">
                    <div class="item" id="rolagem">rolagem: __</div>
                    <input class="item" id="item1" type="submit" value="atacar" onclick="menuatacar();"/>
                    <input class="item" id="item2" type="submit" value="item"/>
                    <input class="item" id="item3" type="submit" value="fugir"/>
                </div>
            </div>
        </div>
    </body>
</html>