// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero -                             Masculino (Linha 25). Gênero Feminino (Linha 36)
const height = process.argv[3]; // Altura -                             Masculino (Linha 25). Feminino (Linha 36)
const barReps = process.argv[4]; // Repetições com barra                Masculino (Linha 26). Feminino (Linha 37)
const barSeconds = process.argv[5]; // Tempo das repetições com barra   Masculino (Linha 26). Feminino (Linha 37)
const abs = process.argv[6]; // Abdominais                              Masculino (Linha 27). Feminino (Linha 38 )
const runDistance = process.argv[7]; // Distância da corrida            Masculino (Linha 28). Feminino (Linha 39)
const runTime = process.argv[8]; // Tempo da corrida                    Masculino (Linha 28 ). Feminino (Linha 39)
const swimDistance = process.argv[9]; // Distância da natação           Masculino (Linha 29). Feminino (Linha 40)
const swimTime = process.argv[10]; // Tempo da natação                  Masculino (Linha 29 ). Feminino (Linha 40)
const diveTime = process.argv[11]; // Tempo de mergulho                 Masculino (Linha 29 ). Feminino (Linha 40)

let passed = false;
/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (gender === "male" && height >= 1.70)  {                    //Se o candidato for do sexo masculino verifica se a altura do candidato é condizente com a especificidade desse gênero ( pelo menos 1.70m) 
    if ( barReps >= 6 || barSeconds >= 15 ) {                 //Pelo menos 6 repetições na barra OU duração mínima de 15 segundos na mesma
        if ( abs >= 41 ) {                                    //Pelo menos 41 abdominais realizados
            if  (( runDistance >= 3000 && runTime <= 720 ) || ( runDistance >= 5000 && runTime <= 1200 )) {                  //Pelo menos 3km percorridos em um tempo limite de 12 minutos OU pelo menos 5km em tempo limite de 20 minutos                
                if (( swimDistance >= 100 && swimTime <= 60)  || diveTime <= 30 ) {                      //Pelo menos 100 metros no máximo em 60 segundos de natação OU no máximo 30 segundos de mergulho
                      passed = true;                                                               
                }                    
            } 
        }                
    }  
} 
if (gender === "female" && height >= 1.60) {                    //Se o candidato for do sexo feminino verifica se a altura do candidato é condizente com a especificidade desse gênero ( pelo menos 1.60m)  
    if (barReps >= 5 || barSeconds >= 12 ) {                    //Pelo menos 5 repetições na barra OU duração mínima de 12 segundos na mesma
        if  ( abs >= 41 ) {                                     //Pelo menos 41 abdominais realizados
            if  (( runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) {                               //Pelo menos 4km percorridos em um tempo limite de 15 minutos OU pelo menos 6km em tempo limite de 22 minutos
                if (( swimDistance >= 100 && swimTime <= 60) || diveTime <= 30 ) {                                          //Pelo menos 100 metros no máximo em 60 segundos de natação OU no máximo 30 segundos de mergulho
                        passed = true;                                            
                }
            } 
        }     
    }  
}   
/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
