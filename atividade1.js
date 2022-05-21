var leitura_user = require ('readline-sync');
let aux=0;
let aux2=0;
let quantidadedecadastro;
let nomedoevento= Array(100);
while(aux==0){
	
	let strData = leitura_user.question ("Informe data do evento");
	let partesData = strData.split("/");
	let data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
	if(data < new Date()){
  	 console.log("data não permitida");
	}else{
    	console.log("data permitida");
		quantidadedecadastro++;
		nomedoevento [aux2]=leitura_user.question("Informe nome do evento: ");
		aux2++;
		aux=1;
	}
}
let quantitadedeusuario=0;
let idade;
let nomeusuario= Array(100);
while(quantitadedeusuario==0){
	if(quantitadedeusuario<100){
		idade=leitura_user.questionInt("informe idade do usuario: ");
		if (idade<18){
			console.log ("cadastro não permitido");
		}else{
			
			nomeusuario[quantitadedeusuario]=leitura_user.question("informe o nome do usuario: ");
			quantitadedeusuario++;
		}

	}
}
var indice;
for(indice=0;indice<quantitadedeusuario;indice++){
	console.log ("nome do usuario: "+ nomeusuario[indice]);

}
for(indice=0;indice<quantitadedeusuario;indice++){
	console.log ("nome do evento: "+ nomedoevento[indice]);

}