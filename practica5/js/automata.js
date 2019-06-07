class autoamataNumeroVisual{
    constructor(form,cad){
        this.cont = 0;
        this.str = cad;
        this.accept = false;
        this.out = "";
        //Estados
        this.edQ0 = $(form).find('p.edo#Q0');
        this.edQ1 = $(form).find('p.edo#Q1');
        this.edQ2 = $(form).find('p.edo#Q2');
        this.edQ3 = $(form).find('p.edo#Q3');
        this.edQ4 = $(form).find('p.edo#Q4');
        this.edQ5 = $(form).find('p.edo#Q5');

        this.edC0 = $(form).find('p.edo#C0');
        this.edC1 = $(form).find('p.edo#C1');
        this.edC2 = $(form).find('p.edo#C2');
        this.edC3 = $(form).find('p.edo#C3');
        this.edC4 = $(form).find('p.edo#C4');
        //
        this.pShow = $($(form).parent().find('p.show')[0]);
    }

    start(){
        this.cont = 0;
        this.accept = false;
        this.q0();
    }
    q0(){
        console.log("Q0");
        this.out += "Q0, ";
        this.edQ0.fadeIn(500).text(this.str[0]).wait(1000).fadeOut(); 
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case '-':
                case '+':
                    this.cont = this.cont + 1;
                    this.q1();
                    break;
                case '0':
                    this.cont = this.cont + 1;
                    this.q2();
                    break;
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c0();
                    break;
                default: this.death();break;
            }
        }
    };
    // Estado Q1 NO Aceptacion
    q1(){
        this.out += "Q1, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edQ1.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            switch (this.str[this.cont]) {
                case '0':
                    this.cont = this.cont + 1;
                    this.q2();
                    break;
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c0();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.edQ1.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.noSuccess();
        }
    }
    // Estado Q2 NO Aceptacion
    q2(){
        this.out += "Q2, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edQ2.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            switch (this.str[this.cont]) {
                case 'x':
                    this.cont = this.cont + 1;
                    this.q3();
                    break;
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':
                    this.cont = this.cont + 1;
                    this.c2();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.edQ2.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.noSuccess();
        }
    }
    // Estado Q3 NO Aceptacion
    q3(){
        this.out += "Q3, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edQ3.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            switch (this.str[this.cont]) {
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                case 'A':case 'B':case 'C':
                case 'D':case 'E':case 'F':
                case 'a':case 'b':case 'c':
                case 'd':case 'e':case 'f':
                    this.cont = this.cont + 1;
                    this.c1();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.edQ3.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.noSuccess();
        }
    }
    // Estado Q4 NO Aceptacion
    q4(){
        this.out += "Q4, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edQ4.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c3();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.edQ4.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.noSuccess();
        }
    }
    // Estado Q5 NO Aceptacion
    q5(){
        this.out += "Q5, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edQ5.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c4();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.edQ5.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.noSuccess();
        }
    }
    /*===========================================
        A C E P T A C I O N 
    ===========================================*/
    // Estado C0 Aceptacion numeros enteros
    c0(){
        this.out += "C0, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edC0.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c0();
                    break;
                case '.':
                    this.cont = this.cont + 1;
                    this.q4();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.edC0.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.success();
        }
    }
    // Estado C1 Aceptacion hexadecimales
    c1(){
        this.out += "C1, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edC1.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                case 'A':case 'B':case 'C':
                case 'D':case 'E':case 'F':
                case 'a':case 'b':case 'c':
                case 'd':case 'e':case 'f':
                    this.cont = this.cont + 1;
                    this.c1();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.edC1.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.success();
        }
    }
    // Estado C2 Aceptacion octales
    c2(){
        this.out += "C2, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edC2.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':
                    this.cont = this.cont + 1;
                    this.c2();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.edC2.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.success();
        }
    }
    // Estado C3 Aceptacion flotantes S/Exponente
    c3(){
        this.out += "C3, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edC3.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c3();
                    break;
                case 'E':
                    this.cont = this.cont + 1;
                    this.q5();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.edC3.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.success();
        }
    }
    // Estado C4 Aceptacion flotantes C/Exponente
    c4(){
        this.out += "C4, ";
        if(Number(this.str.length) > Number(this.cont)){
            this.edC4.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c4();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.edC4.wait(this.cont*1500).fadeIn(500).text(this.str[this.cont-1]).wait(1000).fadeOut(); 
            this.success();
        }
    }
    /*===========================================================================
        ACEPTACION, NO ACPETACION, MUERTE
    ===========================================================================*/
    //Aceptacion y No Aceptacion
    success(){
       console.log("Aceptacion");
        this.pShow.wait((this.cont+1)*1500).css("background-color","#00c853").html("Aceptacion de '"+this.str +"':  "+this.out).slideDown();    
        this.accept = true;
    }
    death(){
        console.log("Muerto");
        this.pShow.wait((this.cont+1)*1500).css("background-color","#d50000").html("Estado Muerto").slideDown();    
        this.accept = false;
    }
    noSuccess(){
        console.log("No Aceptacion");
        this.pShow.wait((this.cont+1)*1500).css("background-color","#ffa000").html("No Aceptacion").slideDown();    
        this.accept = false;
    }
}

class autoamataNumero{
    constructor(cad){
        this.cont = 0;
        this.str = cad;
        this.accept = false;
    }

    start(){
        this.cont = 0;
        this.accept = false;
        this.q0();
    }
    q0(){
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case '-':
                case '+':
                    this.cont = this.cont + 1;
                    this.q1();
                    break;
                case '0':
                    this.cont = this.cont + 1;
                    this.q2();
                    break;
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c0();
                    break;
                default: this.death();break;
            }
        }
    };
    // Estado Q1 NO Aceptacion
    q1(){
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case '0':
                    this.cont = this.cont + 1;
                    this.q2();
                    break;
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c0();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.noSuccess();
        }
    }
    // Estado Q2 NO Aceptacion
    q2(){
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case 'x':
                    this.cont = this.cont + 1;
                    this.q3();
                    break;
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':
                    this.cont = this.cont + 1;
                    this.c2();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.noSuccess();
        }
    }
    // Estado Q3 NO Aceptacion
    q3(){
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                case 'A':case 'B':case 'C':
                case 'D':case 'E':case 'F':
                case 'a':case 'b':case 'c':
                case 'd':case 'e':case 'f':
                    this.cont = this.cont + 1;
                    this.c1();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.noSuccess();
        }
    }
    // Estado Q4 NO Aceptacion
    q4(){
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c3();
                    break;
                default: this.death();break;
            }
            
        }else if(Number(this.str.length) == Number(this.cont)){
            this.noSuccess();
        }
    }
    // Estado Q5 NO Aceptacion
    q5(){
        if(Number(this.str.length) > Number(this.cont)){
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c4();
                    break;
                default: this.death();break;
            }
        }else if(Number(this.str.length) == Number(this.cont)){
            this.noSuccess();
        }
    }
    /*===========================================
        A C E P T A C I O N 
    ===========================================*/
    // Estado C0 Aceptacion numeros enteros
    c0(){
        if(Number(this.str.length) > Number(this.cont)){
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c0();
                    break;
                case '.':
                    this.cont = this.cont + 1;
                    this.q4();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.success();
        }
    }
    // Estado C1 Aceptacion hexadecimales
    c1(){
        if(Number(this.str.length) > Number(this.cont)){
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                case 'A':case 'B':case 'C':
                case 'D':case 'E':case 'F':
                case 'a':case 'b':case 'c':
                case 'd':case 'e':case 'f':
                    this.cont = this.cont + 1;
                    this.c1();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.success();
        }
    }
    // Estado C2 Aceptacion octales
    c2(){
        if(Number(this.str.length) > Number(this.cont)){
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':
                    this.cont = this.cont + 1;
                    this.c2();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.success();
        }
    }
    // Estado C3 Aceptacion flotantes S/Exponente
    c3(){
        if(Number(this.str.length) > Number(this.cont)){
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c3();
                    break;
                case 'E':
                    this.cont = this.cont + 1;
                    this.q5();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.success();
        }
    }
    // Estado C4 Aceptacion flotantes C/Exponente
    c4(){
        if(Number(this.str.length) > Number(this.cont)){
            this.accept = true;
            switch (this.str[this.cont]) {
                case '0':case '1':case '2':case '3':case '4':
                case '5':case '6':case '7':case '8':case '9':
                    this.cont = this.cont + 1;
                    this.c4();
                    break;
                default: this.death();break;
            }
        }
        else if(Number(this.str.length) == Number(this.cont)){
            this.success();
        }
    }
    /*===========================================================================
        ACEPTACION, NO ACPETACION, MUERTE
    ===========================================================================*/
    //Aceptacion y No Aceptacion
    success(){
       //Aceptacion");
        this.accept = true;
    }
    death(){
        //Muerto");
        this.accept = false;
    }
    noSuccess(){
        //No Aceptacion");
        this.accept = false;
    }
}