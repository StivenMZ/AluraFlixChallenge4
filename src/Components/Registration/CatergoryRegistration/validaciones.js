
export const validTitle = (titi) =>{
let length = titi.length;
if(length <2){
    return {valid: false, error: 1}
}else if(length > 20){
    return {valid: false, error: 2}
}
else{
    return {valid: true, error: 0}
}

}

export const validDescripcion = (descripcion) =>{
    let length = descripcion.length;
    if(length <7){
        return {valid: false, error: 1}
    }
    else if (length >40) {
        return {valid: false, error: 2 }
    } else{
        return {valid: true, error: 0}  
    }
    }

    export const validCodigo = (codigo) =>{
        let length = codigo.length;
        const codeArr = Array.from(codigo);
        if(length <3){
            return {valid: false, error: 1}
        }
        else if (codeArr[0] !== "#") {
            return {valid: false, error: 2 }
        } else{
            return {valid: true, error: 0}  
        }
        }