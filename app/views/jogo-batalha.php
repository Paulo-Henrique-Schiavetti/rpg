<?php
    $inimigopv = $inimigo['PVbase'];
    $inimigo2pv = $inimigo2['PVbase'];
    $inimigo3pv = $inimigo3['PVbase'];
    $inimigo4pv = $inimigo4['PVbase'];
    $inimigo5pv = $inimigo5['PVbase'];

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
        <script type="text/javascript" src="/public/js/batalha.js"></script>
        <script type="text/javascript" src="/public/js/aliados.js"></script>
        <script type="text/javascript" src="/public/js/menus.js"></script>
    </head>
    <body onload="start(<?=$inimigopv?>, <?=$inimigo2pv?>, <?=$inimigo3pv?>, <?=$inimigo4pv?>,  <?=$inimigo5pv?>, <?=$aliado1pv?>, <?=$aliado1pvtotal?>, <?=$aliado2pv?>, <?=$aliado2pvtotal?>, <?=$aliado3pv?>, <?=$aliado3pvtotal?>, <?=$aliado4pv?>, <?=$aliado4pvtotal?>, <?=$aliado5pv?>, <?=$aliado5pvtotal?>); mensagem('<p>Um bando selvagem aparece.</p>'); menu3();">
        <div class="game">
            <div class="tela forest">
                <div class="inimigo">
                    <div class="char size<?=$inimigo['size']?>" id="inimigo" onclick="ataque2(1,<?=$inimigo['DF']?>,<?=$inimigo['DM']?>,<?=$inimigo['DN']?>,<?=$inimigo['DD']?>);">
                        <div class="caixa pequena">
                            <p class="small"><?=$inimigo['nome']?></p>
                            <div id="ibarra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                        <img src="/public/img/inimigos/inimigo_<?=$inimigo['id']?>.png">
                    </div>
                    <div class="char size<?=$inimigo2['size']?>" id="inimigo2" onclick="ataque2(2,<?=$inimigo2['DF']?>,<?=$inimigo2['DM']?>,<?=$inimigo2['DN']?>,<?=$inimigo2['DD']?>);">
                        <div class="caixa pequena">
                            <p class="small"><?=$inimigo2['nome']?></p>
                            <div id="i2barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                        <img src="/public/img/inimigos/inimigo_<?=$inimigo2['id']?>.png">
                    </div>
                    <div class="char size<?=$inimigo3['size']?>" id="inimigo3" onclick="ataque2(3,<?=$inimigo3['DF']?>,<?=$inimigo3['DM']?>,<?=$inimigo3['DN']?>,<?=$inimigo3['DD']?>);">
                        <div class="caixa pequena">
                            <p class="small"><?=$inimigo3['nome']?></p>
                            <div id="i3barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                        <img src="/public/img/inimigos/inimigo_<?=$inimigo3['id']?>.png">
                    </div>
                    <div class="char size<?=$inimigo4['size']?>" id="inimigo4" onclick="ataque2(4,<?=$inimigo4['DF']?>,<?=$inimigo4['DM']?>,<?=$inimigo4['DN']?>,<?=$inimigo4['DD']?>);">
                        <div class="caixa pequena">
                            <p class="small"><?=$inimigo4['nome']?></p>
                            <div id="i4barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                        <img src="/public/img/inimigos/inimigo_<?=$inimigo4['id']?>.png">
                    </div>
                    <div class="char size<?=$inimigo5['size']?>" id="inimigo5" onclick="ataque2(5,<?=$inimigo5['DF']?>,<?=$inimigo5['DM']?>,<?=$inimigo5['DN']?>,<?=$inimigo5['DD']?>);">
                        <div class="caixa pequena">
                            <p class="small"><?=$inimigo5['nome']?></p>
                            <div id="i5barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                        <img src="/public/img/inimigos/inimigo_<?=$inimigo5['id']?>.png">
                    </div>
                </div>    
                <div class="aliado">
                    <div class="char">
                        <img src="/public/img/aliado<?=$aliado1['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado1['apelido']?></p>
                            <div id="abarra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>
                    <div class="char">
                        <img src="/public/img/aliado<?=$aliado2['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado2['apelido']?></p>
                            <div id="a2barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>
                    <div class="char">
                        <img src="/public/img/aliado<?=$aliado3['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado3['apelido']?></p>
                            <div id="a3barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>
                    <div class="char">
                        <img src="/public/img/aliado<?=$aliado4['id']?>.png">
                        <div class="caixa pequena">
                            <p class="small"><?=$aliado4['apelido']?></p>
                            <div id="a4barra">
                                <p class="seta">↼-------⇀</p>
                            </div>
                        </div>
                    </div>          
                    <div class="char">
                        <img src="/public/img/aliado<?=$aliado5['id']?>.png">
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