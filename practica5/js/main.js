$(document).ready(function () {    
    $('#inputNumber').submit(function(e){
        e.preventDefault();
        var cadena = $('#numExam').val();
        var tabla = [
            ["A",'0',"A"],
            ["A",'0',"B"],
            ["A",'1',"A"],
            ["A",'1',"C"],
            ["B",'0',"D"],
            ["C",'1',"D"],
            ["D",'1',"D"],
            ["D",'0',"D"]
        ];
        var estado_actual = ["A"];
        for(let i = 0; i < cadena.length ; i++){
            let k;
            let estado_nuevo = [];
            for(let j = 0; j<tabla.length; j++){
                let l = estado_actual.length;
                for(k = 0; k<l; k++){
                    if(tabla[j][0] == estado_actual[k]  && tabla[j][1] == cadena[i]){
                        estado_nuevo.push(tabla[j][2]);
                    }
                }
            }
            estado_actual = estado_nuevo;
        }
        let contador = 0;
        for(let i = 0; i < estado_actual.length; i++){
            if(estado_actual[i]== "D"){
                contador++;
                break;
            }
            else{
                continue;
            }
        }
        if(contador>1){
            console.log("Cadena aceptada");
        }
        else{
            console.log("Cadena NO aceptada");
        }
    });
    $('#inciso_b').submit(function(e){
        e.preventDefault();
        var cadena = $('#cadena2').val();
        var tabla = [
            ["A",'1',"A"],
            ["C",'0',"C"],
            ["C",'1',"C"],
            ["C",'0',"D"],
        ];
        var estado_actual = ["A","C"];
        for(let i = 0; i < cadena.length ; i++){
            let k;
            let estado_nuevo = [];
            for(let j = 0; j<tabla.length; j++){
                let l = estado_actual.length;
                for(k = 0; k<l; k++){
                    if(tabla[j][0] == estado_actual[k]  && tabla[j][1] == cadena[i]){
                        estado_nuevo.push(tabla[j][2]);
                        
                    }
                }

            }
            
            estado_actual = estado_nuevo;
        }
        let contador = 0;
        for(let i = 0; i < estado_actual.length; i++){
            if(estado_actual[i]== "A" || estado_actual[i]== "D"){
                contador++;
                break;
            }
            else{
                continue;
            }
        }
        if(contador>=1){
            console.log("Cadena aceptada");
        }
        else{
            console.log("Cadena NO aceptada");
        }

    });
    $('#inciso_c').submit(function(e){
        e.preventDefault();
        var cadena = $('#cadena3').val();
        var tabla = [
            ["A",'1',"A"],
            ["A",'0',"B"],
            ["B",'0',"B"],
            ["B",'0',"C"],
            ["B",'1',"C"],
            ["C",'1',"D"],
            ["C",'1',"F"],
            ["E",'1',"C"],
            ["E",'0',"D"],
            ["E",'0',"F"],
            ["D",'0',"F"],
            ["D",'0',"D"],
        ];
        var estado_actual = ["A"];
        for(let i = 0; i < cadena.length ; i++){
            let k;
            let estado_nuevo = [];
            for(let j = 0; j<tabla.length; j++){
                let l = estado_actual.length;
                for(k = 0; k<l; k++){
                    if(tabla[j][0] == estado_actual[k]  && tabla[j][1] == cadena[i]){
                        estado_nuevo.push(tabla[j][2]);
                    }
                }

            }
            estado_actual = estado_nuevo;
        }
        let contador = 0;
        for(let i = 0; i < estado_actual.length; i++){
            if(estado_actual[i]== "F"){
                contador++;
                break;
            }
            else{
                continue;
            }
        }
        if(contador>=1){
            console.log("Cadena aceptada");
        }
        else{
            console.log("Cadena NO aceptada");
        }


    });
});





