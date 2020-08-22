let cor = ["#776d8a", "#797a7e", "#ffa36c", "#00bcd4", "#f09ae9"];

let msg = ["'Personificación': ¿Quien soy yo? Soy un cuerpo indomable Espíritu libre y abstracto Encadenado Juzgado por naturaleza sana Ignorado por la locura Amante de la soledad Mujer hecha de tristeza ¿Quién eres tú?", 
"'Pedidos':Em um olhar de socorro Ela pediu para que ele a levasse Ele com frustração Disse que não podia Mesmo assim Ele insistia perguntando Posso te ajudar em algo? Em toda tormenta e bagunça Ele ajudava ela criando paz Mas ele queria mais Uma solução mais eficaz Ela só queria sumir Antes que fosse consumida Sem esperança ela segue Será que a batalha está perdida? Ele sem entrega as armas Ferido Ainda pergunta Posso te ajudar em algo?", 
"'Devaneios 2': Deixei de viver pra ser lua Pra me perde na tua Sobreviver em loop  Lembrar e esquecer Virando pó com o tempo Tragando mentiras Pra acalmar minha dor Me iludindo Pra não cair em rios feitos de águas salgadas Rios que fazem soluçar O fim está próximo Mas quando foi o começo?", 
"'Livre': Queria ser livre e voar por aí Sem destino sem amarras Porém sou uma borboleta presa Com asas quebradas Não mando na minha própria existência Nem tenho como mandar Queria nunca ter nascido Assim não iria almejar tanto a liberdade Mesmo com medo queria me entregar aos braços da morte é ter um descanso Evitando tal ato sigo sozinha.", 
"'Mágica':A cada sentada que dou Me faço de água Sentido cada pulsada Ouvindo teus gemidos Entrando pelos meus ouvidos Saindo pelo meu tesão De olhos fechados Sinto-me tocada Suas mãos em meus peitos Deságua Novamente me faço de água De quatro Sinto De frente Sinto Sentada Sinto Parece magia Emanando dos nossos corpos Rebolando Sentindo Sentando Tapas Apertos Arranhadas Magia Sou um elfa mágica do tesão incontrolado Indomável Você um demônio sorrateiro Que coloca cabresto Tentando me domar Cada vez mais rápido Chegando a me impressiona Quero mais uma vez no teu corpo Demônio louco deságua"];

let aperteme = document.getElementById("aperte")
aperteme.addEventListener("click", gerar)
function gerar(){
    let contar = Math.floor(Math.random() *
msg.length)
document.body.style.backgroundColor = cor[contar]
document.getElementById("texto").innerHTML = msg[contar]
}
