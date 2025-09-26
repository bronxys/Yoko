const menu = (prefix, NomeDoBot, sender) => {
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `
*💮🌸✨ 𝗬𝗢𝗞𝗢 𝗕𝗢𝗧 𝗩10 ✨🌸💮*
╭━━━❀⃟ INFO BOT / USER ❀⃟━━━╮
┃ 🌸 ✧ Bot: ${NomeDoBot}
┃ 🌸 ✧ Usuário: @${sender.split("@")[0]}
┃ 🌸 ✧ Prefix: ${prefix}
╰━━━━━━━━━━━━━━❀⃟

*💮🌸✨ 𝗬𝗢𝗞𝗢 𝗕𝗢𝗧 V10 MENUS ✨🌸💮*

╭━━❀⃟ MENUS DIVERSOS ❀⃟━━╮
┃ 💖 ${prefix}Menudono
┃ 💖 ${prefix}Menuadm
┃ 💖 ${prefix}Menupremium
┃ 💖 ${prefix}Efeitosimg
┃ 💖 ${prefix}Logos
┃ 💖 ${prefix}Brincadeiras
┃ 💖 ${prefix}Animes
┃ 💖 ${prefix}menupuxadas
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ COMANDOS MEMBRO ❀⃟━━╮
┃ 🌷 ${prefix}Infobot
┃ 🌷 ${prefix}Idiomas
┃ 🌷 ${prefix}Carteira
┃ 🌷 ${prefix}Bug
┃ 🌷 ${prefix}Infodono
┃ 🌷 ${prefix}Sugestao
┃ 🌷 ${prefix}Avalie
┃ 🌷 ${prefix}Infocmd
┃ 🌷 ${prefix}Infowelcome
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ COMANDOS INFORMATIVOS ❀⃟━━╮
┃ 🦋 ${prefix}Ping
┃ 🦋 ${prefix}Atividade
┃ 🦋 ${prefix}Rankativo
┃ 🦋 ${prefix}Checkativo
┃ 🦋 ${prefix}Ranklevel
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ DOWNLOADS & MÚSICA ❀⃟━━╮
┃ 💎 ${prefix}Play
┃ 💎 ${prefix}Playvid
┃ 💎 ${prefix}Playvid2
┃ 💎 ${prefix}Playdoc
┃ 💎 ${prefix}Playdoc2
┃ 💎 ${prefix}Playmix
┃ 💎 ${prefix}Ytmp3
┃ 💎 ${prefix}Ytmp4
┃ 💎 ${prefix}Shazam
┃ 💎 ${prefix}Audiomeme
┃ 💎 ${prefix}Tiktok
┃ 💎 ${prefix}Tiktokaudio
┃ 💎 ${prefix}Tiktokimg
┃ 💎 ${prefix}Instagram
┃ 💎 ${prefix}Instaaudio
┃ 💎 ${prefix}Instastory
┃ 💎 ${prefix}Instareels
┃ 💎 ${prefix}Threads
┃ 💎 ${prefix}Twitter
┃ 💎 ${prefix}Multidl
┃ 💎 ${prefix}Deezer
┃ 💎 ${prefix}Soundcloud
┃ 💎 ${prefix}Kwaivideo
┃ 💎 ${prefix}Mediafire
┃ 💎 ${prefix}Googledrive
┃ 💎 ${prefix}Capcutmodel
┃ 💎 ${prefix}Imgpralink
┃ 💎 ${prefix}Videopralink
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ PESQUISAS 🔍 ❀⃟━━╮
┃ 🌷 ${prefix}Nerding (Nome)
┃ 🌷 ${prefix}Pensador (Nome)
┃ 🌷 ${prefix}Nasa (Ex: 19-10-2007)
┃ 🌷 ${prefix}Clima (Cidade)
┃ 🌷 ${prefix}Book (Nome do Livro)
┃ 🌷 ${prefix}Movie (Nome do Filme)
┃ 🌷 ${prefix}Movie2 (Nome do Filme)
┃ 🌷 ${prefix}Imdb (Nome do Filme)
┃ 🌷 ${prefix}Imdbinfo (Link do Filme)
┃ 🌷 ${prefix}Animetv (Nome do Anime)
┃ 🌷 ${prefix}Serie (Nome da Série)
┃ 🌷 ${prefix}Lyrics (Música)
┃ 🌷 ${prefix}Lyrics2 (Música)
┃ 🌷 ${prefix}Playstore (Nome)
┃ 🌷 ${prefix}Aptoide (Nome)
┃ 🌷 ${prefix}Uptodown (Nome)
┃ 🌷 ${prefix}Receita (Nome)
┃ 🌷 ${prefix}Signo (Signo)
┃ 🌷 ${prefix}Amazon (Nome)
┃ 🌷 ${prefix}Googlesrc (Nome)
┃ 🌷 ${prefix}Memedroid
┃ 🌷 ${prefix}iFunnyvideo
┃ 🌷 ${prefix}Wikipedia (Nome)
┃ 🌷 ${prefix}Pinterest (Nome)
┃ 🌷 ${prefix}Gimage (Nome)
┃ 🌷 ${prefix}Dicionario (Palavra)
┃ 🌷 ${prefix}Ytplaylist (Link ou Nome)
┃ 🌷 ${prefix}Ytsearch (Nome)
┃ 🌷 ${prefix}Games (Nome)
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ INTELIGÊNCIA ARTIFICIAL 🤖 ❀⃟━━╮
┃ 🦋 ${prefix}Corretor (Texto)
┃ 🦋 ${prefix}Bard (Pergunta)
┃ 🦋 ${prefix}Gpt (Texto)
┃ 🦋 ${prefix}Gptvoz (Texto)
┃ 🦋 ${prefix}Gptimg (Texto)
┃ 🦋 ${prefix}Redacao (Tema)
┃ 🦋 ${prefix}Summerize (Texto)
┃ 🦋 ${prefix}Imagine (Texto)
┃ 🦋 ${prefix}Totext (Texto)
┃ 🦋 ${prefix}ia_lesbica
┃ 🦋 ${prefix}tocartoon
┃ 🦋 ${prefix}removebg
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ NOTÍCIAS / JORNAL 📰 ❀⃟━━╮
┃ 💖 ${prefix}Getnoticias (Tema)
┃ 💖 ${prefix}Cnnbrasil
┃ 💖 ${prefix}Globo
┃ 💖 ${prefix}Poder360
┃ 💖 ${prefix}Uol
┃ 💖 ${prefix}Jovempan
┃ 💖 ${prefix}Esportenews
┃ 💖 ${prefix}Gamenews
┃ 💖 ${prefix}Brasileirao
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ FIGURINHAS & STICKERS ✨ ❀⃟━━╮
┃ 🌸 ${prefix}Ttp (Texto)
┃ 🌸 ${prefix}Fsticker (Marcar-foto)
┃ 🌸 ${prefix}Sticker (Marcar-foto)
┃ 🌸 ${prefix}Toimg (Marcar-sticker)
┃ 🌸 ${prefix}Attp (Texto)
┃ 🌸 ${prefix}Togif (Marcar-sticker)
┃ 🌸 ${prefix}Roubar (Texto/Texto)
┃ 🌸 ${prefix}Figurinhas (Qtd)
┃ 🌸 ${prefix}Figumemes (Qtd)
┃ 🌸 ${prefix}Figuflork (Qtd)
┃ 🌸 ${prefix}Figuemoji (Qtd)
┃ 🌸 ${prefix}Figucoreana (Qtd)
┃ 🌸 ${prefix}Figubebe (Qtd)
┃ 🌸 ${prefix}Figuanime (Qtd)
┃ 🌸 ${prefix}Figufunny (Qtd)
┃ 🌸 ${prefix}Figuanimais (Qtd)
┃ 🌸 ${prefix}Figudesenho (Qtd)
┃ 🌸 ${prefix}Figuraiva (Qtd)
┃ 🌸 ${prefix}Figuroblox (Qtd)
┃ 🌸 ${prefix}Qc (Mensagem)
┃ 🌸 ${prefix}Figaleatoria
╰━━━━━━━━━━━━━━━━❀⃟

╭━━❀⃟ CMDS ALEATÓRIOS 🎲 ❀⃟━━╮
┃ 💎 ${prefix}Gtts (Idioma + Texto)
┃ 💎 ${prefix}Tagme
┃ 💎 ${prefix}Emoji (😏/Whatsapp)
┃ 💎 ${prefix}Emojimix (Emoji+Emoji)
┃ 💎 ${prefix}Tabela (Letras/Símbolos)
┃ 💎 ${prefix}Conselhobiblico
┃ 💎 ${prefix}Cantadas
┃ 💎 ${prefix}Simi (Converse com ela)
┃ 💎 ${prefix}Perfil
┃ 💎 ${prefix}Calcular (10 + 10)
┃ 💎 ${prefix}Ringtone (Toque)
┃ 💎 ${prefix}Fazernick (O que deseja)
┃ 💎 ${prefix}Ptvmsg (Mencione-V)
┃ 💎 ${prefix}Traduzir (Palavra)
╰━━━━━━━━━━━━━━━━❀⃟`;
};

exports.menu = menu;

// MENU DE HELP

const help = (prefix, pushname, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `
Olá ⏤͟͟͞͞ ꦿ𝙉𝙄𝘾𝙆: ${pushname.split('@')[0]}! 
Group Help é o mais completo bot para ajudar você gerenciar seus grupos facilmente e com segurança! 

Adicione-me em um supergrupo e me coloque como Admin para que eu possa entrar em ação!

QUAIS SÃO OS COMANDOS? 
Pressione /help para ver todos os comandos e como eles funcionam!
`;
};

exports.help = help;

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `🌸  YOKO BOT - MENU ADMINISTRATIVO 🌸  

👤 Usuário: @${sender.split("@")[0]}

━━━━━━━━━━━━━━━━━━━
🔧 CONFIGURAÇÕES
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Antiimg (1/0)
🌷 ${prefix}Antivideo (1/0)
🌷 ${prefix}Antiaudio (1/0)
🌷 ${prefix}Antisticker (1/0)
🌷 ${prefix}Antiloc (1/0)
🌷 ${prefix}Anticontato (1/0)
🌷 ${prefix}Antidoc (1/0)
🌷 ${prefix}Antilinkgp (1/0)
🌷 ${prefix}Antilinkhard (1/0)
🌷 ${prefix}Antifake (1/0)
🌷 ${prefix}Antinotas (1/0)
🌷 ${prefix}Anticatalogo (1/0)
🌷 ${prefix}Antipalavrao (1/0)
🌷 ${prefix}Limitecaracteres (1/0)
🌷 ${prefix}Bemvindo (1/0)
🌷 ${prefix}Bemvindo2 (1/0)
🌷 ${prefix}Simih (1/0)
🌷 ${prefix}Simih2 (1/0)
🌷 ${prefix}Autosticker (1/0)
🌷 ${prefix}Autorepo (1/0)
🌷 ${prefix}Leveling (1/0)
🌷 ${prefix}Modonsfw (1/0)
🌷 ${prefix}Odelete (1/0)
🌷 ${prefix}x9visuunica (1/0)
🌷 ${prefix}x9 (1/0)

━━━━━━━━━━━━━━━━━━━pppppp0p
🌷 ${prefix}Legenda_imagem (Texto)
🌷 ${prefix}Legenda_video (Texto)
🌷 ${prefix}Legenda_estrangeiro (Texto)
🌷 ${prefix}Legendabv (Texto)
🌷 ${prefix}Legendasaiu (Texto)
🌷 ${prefix}Legendabv2 (Texto)
🌷 ${prefix}Legendasaiu2 (Texto)

━━━━━━━━━━━━━━━━━━━
👑 FUNÇÕES DE ADMIN
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}So_adm
🌷 ${prefix}Requestgp -list
🌷 ${prefix}Requestgp -a numero
🌷 ${prefix}Requestgp -r numero
🌷 ${prefix}Fechar-gp
🌷 ${prefix}Listanegra (Número)
🌷 ${prefix}Tirardalista (Número)
🌷 ${prefix}ListanegraG (Número)
🌷 ${prefix}TirardalistaG (Número)
🌷 ${prefix}Multiprefixo (1/0)
🌷 ${prefix}Add_prefixo
🌷 ${prefix}Tirar_prefixo
🌷 ${prefix}Banghost
🌷 ${prefix}Mute (@mencionar)
🌷 ${prefix}Desmute (@mencionar)
🌷 ${prefix}Add 5511.. (Para-adicionar) 
🌷 ${prefix}Reviver (Responder-mensagem)
🌷 ${prefix}Kick [@] (Para-remover) 
🌷 ${prefix}Ban (Responder-mensagem)
🌷 ${prefix}Promover [@] (Ser-admin)
🌷 ${prefix}Rebaixar [@] (Rebaixar-adm)
🌷 ${prefix}Changegroup (all/adms)
🌷 ${prefix}Rmphotogp (Remover ft do gp)
🌷 ${prefix}Ephemeral [1/0] (Msg-temp)
🌷 ${prefix}Descgp (Texto)
🌷 ${prefix}Nomegp (Nome)
🌷 ${prefix}Totag (Mencionar algo)
🌷 ${prefix}Grupo (f/a)
🌷 ${prefix}Status
🌷 ${prefix}Limpar (texto-invisível-gp)
🌷 ${prefix}Atividades (DO-GRUPO)
🌷 ${prefix}Linkgp
🌷 ${prefix}Grupoinfo
🌷 ${prefix}Hidetag (txt) (marcação)
🌷 ${prefix}Marcar (marca tds do gp)
🌷 ${prefix}Marcar2 (Marca-tds-wa.me)
🌷 ${prefix}Anagrama (1/0)
🌷 ${prefix}Antipalavra (1/0)
🌷 ${prefix}Criartabela (Escreva-algo)
🌷 ${prefix}Tabelagp (Veja a tabela)

━━━━━━━━━━━━━━━━━━━
🌸 YOKO BOT 🌸
━━━━━━━━━━━━━━━━━━━


`;
};

exports.adms = adms;

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `​🌸  YOKO BOT - MENU PROPRIETÁRIO 🌸  

👤 Usuário: @${sender.split("@")[0]}

━━━━━━━━━━━━━━━━━━━
🔒 COMANDOS EXCLUSIVOS
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Bangp
🌷 ${prefix}Unbangp
🌷 ${prefix}Fotomenu (Marcar-img) 
🌷 ${prefix}Blockcmd (cmd)
🌷 ${prefix}Unblockcmd (cmd)
🌷 ${prefix}Cmdpremlist
🌷 ${prefix}Addcmdprem (cmd)
🌷 ${prefix}Delcmdprem (cmd)
🌷 ${prefix}Fundobemvindo (marcar-img)
🌷 ${prefix}Fundosaiu (marcar-img)
🌷 ${prefix}Serpremium
🌷 ${prefix}Listagp
🌷 ${prefix}Antipalavrão (1/0)
🌷 ${prefix}Antiligar (1/0)
🌷 ${prefix}Modoaluguel (1/0)

━━━━━━━━━━━━━━━━━━━
📢 TRANSMISSÃO & TM
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Fazertm (Texto)
🌷 ${prefix}Rgtm
🌷 ${prefix}Tirardatm
🌷 ${prefix}Listatm

━━━━━━━━━━━━━━━━━━━
🛠️ GESTÃO DE COMANDOS
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Infocmd_add (cmd/texto) 
🌷 ${prefix}Infocmd_del (cmd) 
🌷 ${prefix}Visualizarmsg
🌷 ${prefix}Console (Logs no terminal)
🌷 ${prefix}Botoff (Funcionalidade do bot)
🌷 ${prefix}Boton (Funcionalidade do bot)
🌷 ${prefix}Verificado-global (Selos)
🌷 ${prefix}Audio-menu (Audio do menu)

━━━━━━━━━━━━━━━━━━━
🚫 FILTROS DE PALAVRAS
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Addpalavra (palavrão)
🌷 ${prefix}Delpalavra (palavrão)
🌷 ${prefix}Rmpalavra_forca (palavra)
🌷 ${prefix}Addpalavras_forca (titulo|tema|dica)

━━━━━━━━━━━━━━━━━━━
👥 GERENCIAMENTO DE USUÁRIOS
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Ausente (fale-oq-faz)
🌷 ${prefix}Delpremium @(marca)
🌷 ${prefix}Addpremium @(marca)
🌷 ${prefix}Privphotobot (all/cntt/ngm)
🌷 ${prefix}Privaddgroup (all/cntt/ngm)
🌷 ${prefix}Descriçãogp (digite-algo)
🌷 ${prefix}Block [@] (bloq de usar cmds) 
🌷 ${prefix}Unblock [@] (desbloquear) 

━━━━━━━━━━━━━━━━━━━
⚙️ OUTROS
━━━━━━━━━━━━━━━━━━━
🌷 ${prefix}Setprefix (prefixo-novo)
🌷 ${prefix}Bcgp (TM-PRA-PV-MEMBROS)

━━━━━━━━━━━━━━━━━━━
🌸 YOKO BOT 🌸
━━━━━━━━━━━━━━━━━━━

`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  


  return `━━━━━━━━━━━━━━━━━━━
      𝐌𝐄𝐍𝐔 - 𝐋𝐎𝐆𝐎𝐒
  Usuário: @${sender.split("@")[0]}
━━━━━━━━━━━━━━━━━━━
╭┤き⃟✰𝐋𝐎𝐆𝐎𝐒 - 𝐕𝐈𝐃𝐄𝐎✰⃟⃟き
🌸 ${prefix}Pubgv (Texto)
🌸 ${prefix}Natalmsg (Texto)
🌸 ${prefix}Anonovo (Texto)
🌸 ${prefix}Trigrev (Texto)
━━━━━━━━━━━━━━━━━━━
  𝐋𝐎𝐆𝐎𝐒 𝟑 𝐓𝐄𝐗𝐓𝐎𝐒
🌸 ${prefix}Googlesg (txt/txt/txt)
━━━━━━━━━━━━━━━━━━━
  𝐋𝐎𝐆𝐎𝐒 𝟐 𝐓𝐄𝐗𝐓𝐎𝐒
🌸 ${prefix}Comporn (Texto/Texto)
🌸 ${prefix}Glitch (Texto/Texto)
🌸 ${prefix}Glitch3 (Texto/Texto)
🌸 ${prefix}Grafity (Texto/Texto)
🌸 ${prefix}Space (Texto/Texto)
🌸 ${prefix}Marvel (Texto/Texto)
🌸 ${prefix}GamePlay (Texto/Texto)
🌸 ${prefix}Stone (Texto/Texto)
🌸 ${prefix}Steel (Texto/Texto)
🌸 ${prefix}Ffbanner (Texto/Texto)
🌸 ${prefix}Avatar (Texto/Texto)
🌸 ${prefix}Videogame (Texto/Texto)
🌸 ${prefix}Pubg (Texto/Texto)
🌸 ${prefix}Thorstyle (Texto/Texto)
━━━━━━━━━━━━━━━━━━━
  𝐋𝐎𝐆𝐎𝐒 𝟏 𝐓𝐄𝐗𝐓𝐎
━━━━━━━━━━━━━━━━━━━
🌸 ${prefix}shadow (Texto)
🌸 ${prefix}metalgold ( texto )
🌸 ${prefix}cup ( texto )
🌸 ${prefix}txtborboleta ( texto )
🌸 ${prefix}cemiterio ( texto )
🌸 ${prefix}efeitoneon ( texto )
🌸 ${prefix}harryp ( texto )
🌸 ${prefix}lobometal ( texto )
🌸 ${prefix}neon2 ( texto )
🌸 ${prefix}madeira ( texto )
🌸 ${prefix}lovemsg3 ( texto )
🌸 ${prefix}coffecup ( texto )
🌸 ${prefix}coffecup2 ( texto )
🌸 ${prefix}florwooden ( texto )
🌸 ${prefix}narutologo ( texto )
🌸 ${prefix}fire ( texto )
🌸 ${prefix}romantic ( texto )
🌸 ${prefix}smoke ( texto )
🌸 ${prefix}papel ( texto )
🌸 ${prefix}lovemsg ( texto )
🌸 ${prefix}lovemsg2 ( texto )
🌸 ${prefix}fiction ( texto )
🌸 ${prefix}3dstone ( texto )
🌸 ${prefix}areia ( texto )
🌸 ${prefix}style ( texto )
🌸 ${prefix}blood ( texto )
🌸 ${prefix}pink ( texto )
🌸 ${prefix}cattxt ( texto )
🌸 ${prefix}neondevil ( texto )
🌸 ${prefix}carbon ( texto )
🌸 ${prefix}metalfire ( texto )
🌸 ${prefix}thunder ( texto )
🌸 ${prefix}vidro ( texto )
🌸 ${prefix}jokerlogo ( texto )
🌸 ${prefix}transformer ( texto )
🌸 ${prefix}demonfire ( texto )
🌸 ${prefix}jeans ( texto )
🌸 ${prefix}metalblue ( texto )
🌸 ${prefix}natal ( texto )
🌸 ${prefix}ossos ( texto )
🌸 ${prefix}asfalto ( texto )
━━━━━━━━━━━━━━━━━━━`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`╭━━━━━ ✦ 𝐘𝐎𝐊𝐎 𝐁𝐎𝐓 ✦ ━━━━━╮
│ ▸ Usuário: @${sender.split("@")[0]}
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭─ ⧉ 𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎 ⧉ ─╮
│ ▶ ${prefix}Videolento (marca)
│ ▶ ${prefix}Videorapido (marca)
│ ▶ ${prefix}Videocontrario (marca)
╰────────────────────────╯

╭─ ⧉ 𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎 ⧉ ─╮
│ ▶ ${prefix}Audiolento (marca)
│ ▶ ${prefix}Audiorapido (marca)
│ ▶ ${prefix}Grave (marca)
│ ▶ ${prefix}Grave2 (marca)
│ ▶ ${prefix}Esquilo (marca)
│ ▶ ${prefix}Estourar (marca)
│ ▶ ${prefix}Bass (marca)
│ ▶ ${prefix}Bass2 (marca)
│ ▶ ${prefix}Vozmenino (marca)
╰────────────────────────╯

╭─ ⧉ 𝐃𝐈𝐂𝐀𝐒 & 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 ⧉ ─╮
│ ▸ Use os comandos corretamente para melhores resultados.
│ ▸ Respeite os direitos autorais ao alterar mídias.
╰────────────────────────╯
`;
};

exports.alteradores = alteradores;

const puxadas = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`╭────────────────────────╮
│ ▸ Usuário: @${sender.split("@")[0]}
╰────────────────────────╯

╭─ 𖤍 CONSULTAS DE DADOS 𖤍 ─╮
│ ▷ ${prefix}cpf       → Consulta CPF
│ ▷ ${prefix}cpf2      → Consulta CPF Completa
│ ▷ ${prefix}cpf3      → Consulta Avançada CPF
│ ▷ ${prefix}cpfsus    → Consulta CPF Suspeito
│ ▷ ${prefix}nome      → Consulta Nome
│ ▷ ${prefix}tel       → Consulta Telefone
│ ▷ ${prefix}cnpj      → Consulta CNPJ
╰─────────────────────────────╯

╭─ 𖤐 INFORMAÇÕES 𖤐 ─╮
│ ▷ Digite os dados corretamente para resultados precisos.
│ ▷ Use com responsabilidade e respeite a privacidade.
╰──────────────────────╯
`;
};

exports.puxadas = puxadas;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `╭━━━━━ ✦ 𝐘𝐎𝐊𝐎 𝐁𝐎𝐓 - 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ✦ ━━━━━╮
│ ▸ Usuário: @${sender.split("@")[0]}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭─ ⧉ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⧉ ─╮
│ ▶ ${prefix}Destrava
│ ▶ ${prefix}Destrava2
│ ▶ ${prefix}Ddd (DDD)
│ ▶ ${prefix}GerarCPF
│ ▶ ${prefix}PremiumList
│ ▶ ${prefix}Tinyurl (Link)
│ ▶ ${prefix}Cuttly (Link)
│ ▶ ${prefix}Bitly (Link)
│ ▶ ${prefix}Celular (Nome)
│ ▶ ${prefix}Scep (Número)
│ ▶ ${prefix}Cotacao (Moeda)
│ ▶ ${prefix}Sip (Número)
│ ▶ ${prefix}Igstalk (@usuário)
╰──────────────────────────────╯

╭─ ⧉ 𝐃𝐈𝐂𝐀𝐒 & 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 ⧉ ─╮
│ ▸ Use os comandos corretamente para resultados precisos.
│ ▸ Alguns comandos exigem dados específicos ou links válidos.
╰──────────────────────────────╯
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `╭━━━━━ ✦ 𝐘𝐎𝐊𝐎 𝐁𝐎𝐓 - 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝗦 ✦ ━━━━━╮
│ ▸ Usuário: @${sender.split("@")[0]}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭─ ⧉ 𝐉𝐎𝐆𝐎𝐒 ⧉ ─╮
│ ▶ ${prefix}Jogodavelha (@Marcar)
│ ▶ ${prefix}Anagrama (1/0)
│ ▶ ${prefix}Gartic (1/0)
│ ▶ ${prefix}Quizanimal (1/0)
│ ▶ ${prefix}Enigma (1/0)
│ ▶ ${prefix}R-forca (Letra)
│ ▶ ${prefix}Resetforca (Resetar)
│ ▶ ${prefix}Jogodaforca (Iniciar)
│ ▶ ${prefix}Vab (Você prefere?)
│ ▶ ${prefix}Eununca (Eu nunca, eu já)
│ ▶ ${prefix}Ppt (Pedra/Papel/Tesoura)
│ ▶ ${prefix}Cassino
│ ▶ ${prefix}Apostar (Valor)
│ ▶ ${prefix}Pescar
│ ▶ ${prefix}Churrasco
│ ▶ ${prefix}Steal (marca (@))
│ ▶ ${prefix}1xbcbets (Valor)
│ ▶ ${prefix}Hackear (marca (@))
│ ▶ ${prefix}Mina (coordenada(s))
│ ▶ ${prefix}Minado (dificuldade)
│ ▶ ${prefix}Minareset (resetar)
│ ▶ ${prefix}Mineshelp (info)
│ ▶ ${prefix}Minatips (dicas)
│ ▶ ${prefix}Akinator (iniciar jogo)
│ ▶ ${prefix}Respaki (0/1/2/3/4)
│ ▶ ${prefix}Finaki (sim ou não)
│ ▶ ${prefix}Resetaki (resetar akinator)
╰─────────────────────────────╯

╭─ ⧉ 𝐀𝐓𝐈𝐓𝐔𝐃𝐄 & 𝐑𝐀𝐍𝐊𝐒 ⧉ ─╮
│ ▶ ${prefix}Gay (marca (@))
│ ▶ ${prefix}Feio (marca (@))
│ ▶ ${prefix}Corno (marca (@))
│ ▶ ${prefix}Vesgo (marca (@))
│ ▶ ${prefix}Bebado (marca (@))
│ ▶ ${prefix}Gostoso (marca (@))
│ ▶ ${prefix}Gostosa (marca (@))
│ ▶ ${prefix}Beijo (marca (@))
│ ▶ ${prefix}Matar (marca (@))
│ ▶ ${prefix}Tapa (marca (@))
│ ▶ ${prefix}Chute (marca (@))
│ ▶ ${prefix}Dogolpe (marca (@))
│ ▶ ${prefix}Nazista (marca (@))
│ ▶ ${prefix}Chance (fale algo)
│ ▶ ${prefix}Surubao (Quantidade)
│ ▶ ${prefix}Casal (Casal do grupo)
│ ▶ ${prefix}Quando (Perguntar)
│ ▶ ${prefix}Rankgay (5 gays)
│ ▶ ${prefix}Rankgado (5 gados)
│ ▶ ${prefix}Rankcorno (5 cornos)
│ ▶ ${prefix}Rankgostoso (5 gostosos)
│ ▶ ${prefix}Rankgostosa (5 gostosas)
│ ▶ ${prefix}Ranknazista (5 nazistas)
│ ▶ ${prefix}Rankotakus (5 otakus)
│ ▶ ${prefix}Rankpau (5 pauzudos)
│ ▶ ${prefix}Mencionar (fale algo)
│ ▶ ${prefix}Death (Nome)
╰─────────────────────────────╯
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM

const efeitos = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `╭━━━━━ ✦ 𝐘𝐎𝐊𝐎 𝐁𝐎𝐓 - 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 ✦ ━━━━━╮
│ ▸ Usuário: @${sender.split("@")[0]}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭─ ⧉ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 ⧉ ─╮
│ ▶ ${prefix}Comunismo (marcar)-(img)
│ ▶ ${prefix}Bolsonaro (marcar)-(img)
│ ▶ ${prefix}Bnw (marcar)-(img)
│ ▶ ${prefix}Beautiful (marcar)-(img)
│ ▶ ${prefix}Blur (marcar)-(img)
│ ▶ ${prefix}Affect (marcar)-(img)
│ ▶ ${prefix}Del (marcar)-(img)
│ ▶ ${prefix}Circle (marcar)-(img)
│ ▶ ${prefix}Dither (marcar)-(img)
│ ▶ ${prefix}Facepalm (marcar)-(img)
│ ▶ ${prefix}Invert (marcar)-(img)
│ ▶ ${prefix}Lgbt (marcar)-(img)
│ ▶ ${prefix}Magik (marcar)-(img)
│ ▶ ${prefix}Rotate (marcar)-(img)
│ ▶ ${prefix}Rip (marcar)-(img)
│ ▶ ${prefix}Jail (marcar)-(img)
│ ▶ ${prefix}Trash (marcar)-(img)
│ ▶ ${prefix}Pixelate (marcar)-(img)
│ ▶ ${prefix}Sepia (marcar)-(img)
│ ▶ ${prefix}Wanted (marcar)-(img)
│ ▶ ${prefix}Wasted (marcar)-(img)
│ ▶ ${prefix}Animeia (marcar)-(img)
│ ▶ ${prefix}Zombieia (marcar)-(img)
╰─────────────────────────────╯

╭─ ⧉ 𝐃𝐈𝐂𝐀𝐒 𝐄 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 ⧉ ─╮
│ ▸ Marque a pessoa ou imagem corretamente para aplicar o efeito.
│ ▸ Alguns efeitos podem demorar dependendo do tamanho da imagem.
╰─────────────────────────────╯
`;
};

exports.efeitos = efeitos;

const animes = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐃𝐄-𝐀𝐍𝐈𝐌𝐄𝐒✰⃟⃟き
╭┤✰ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐍𝐈𝐌𝐄𝐒-𝐄𝐃𝐈𝐓𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Editanime -random
┃│✰ ⋟ ${prefix}Editanime -bleach
┃│✰ ⋟ ${prefix}Editanime -chainsaw
┃│✰ ⋟ ${prefix}Editanime -dragonball
┃│✰ ⋟ ${prefix}Editanime -kimetsu
┃│✰ ⋟ ${prefix}Editanime -jujutsu
┃│✰ ⋟ ${prefix}Editanime -naruto
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐍𝐈𝐌𝐄𝐒-𝐈𝐌𝐀𝐆𝐄𝐌✰⃟⃟き
┃│✰ ⋟ ${prefix}Animeimage -cosplay
┃│✰ ⋟ ${prefix}Animeimage -waifu
┃│✰ ⋟ ${prefix}Animeimage -loli
┃│✰ ⋟ ${prefix}Animeimage -shota
┃│✰ ⋟ ${prefix}Animeimage -shinomiya
┃│✰ ⋟ ${prefix}Animeimage -yotsuba
┃│✰ ⋟ ${prefix}Animeimage -yumeko
┃│✰ ⋟ ${prefix}Animeimage -tejina
┃│✰ ⋟ ${prefix}Animeimage -chiho
┃│✰ ⋟ ${prefix}Animeimage -kaori
┃│✰ ⋟ ${prefix}Animeimage -boruto
┃│✰ ⋟ ${prefix}Animeimage -shizuka
┃│✰ ⋟ ${prefix}Animeimage -kaga
┃│✰ ⋟ ${prefix}Animeimage -kotori
┃│✰ ⋟ ${prefix}Animeimage -mikasa
┃│✰ ⋟ ${prefix}Animeimage -akiyama
┃│✰ ⋟ ${prefix}Animeimage -gremory
┃│✰ ⋟ ${prefix}Animeimage -izuku
┃│✰ ⋟ ${prefix}Animeimage -shina
┃│✰ ⋟ ${prefix}Animeimage -shinka
┃│✰ ⋟ ${prefix}Animeimage -yuri
┃│✰ ⋟ ${prefix}Animeimage -eba
┃│✰ ⋟ ${prefix}Animeimage -erza
┃│✰ ⋟ ${prefix}Animeimage -elaina
┃│✰ ⋟ ${prefix}Animeimage -hinata
┃│✰ ⋟ ${prefix}Animeimage -naruto
┃│✰ ⋟ ${prefix}Animeimage -minato
┃│✰ ⋟ ${prefix}Animeimage -sagari
┃│✰ ⋟ ${prefix}Animeimage -nezuko
┃│✰ ⋟ ${prefix}Animeimage -rize
┃│✰ ⋟ ${prefix}Animeimage -anna
┃│✰ ⋟ ${prefix}Animeimage -deidara
┃│✰ ⋟ ${prefix}Animeimage -asuna
┃│✰ ⋟ ${prefix}Animeimage -ayuzawa
┃│✰ ⋟ ${prefix}Animeimage -emilia
┃│✰ ⋟ ${prefix}Animeimage -chitoge
┃│✰ ⋟ ${prefix}Animeimage -hestia
┃│✰ ⋟ ${prefix}Animeimage -inori
┃│✰ ⋟ ${prefix}Animeimage -itachi
┃│✰ ⋟ ${prefix}Animeimage -madara
┃│✰ ⋟ ${prefix}Animeimage -sakura
┃│✰ ⋟ ${prefix}Animeimage -sasuke
┃│✰ ⋟ ${prefix}Animeimage -tsunade
┃│✰ ⋟ ${prefix}Animeimage -onepiece
┃│✰ ⋟ ${prefix}Animeimage -mobil
┃│✰ ⋟ ${prefix}Animeimage -montor
┃│✰ ⋟ ${prefix}Animeimage -keneki
┃│✰ ⋟ ${prefix}Animeimage -megumin
┃│✰ ⋟ ${prefix}Animeimage -toukachan
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.animes = animes;
