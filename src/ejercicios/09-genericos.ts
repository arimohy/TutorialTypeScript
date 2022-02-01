/*
    ===== Código de TypeScript =====
    
*/
function queTipoSoy<T>(argumento:T){
    return argumento
}
let soystring=queTipoSoy("Hola munfo")
let soynmero =queTipoSoy(150)
let soyarreglo=queTipoSoy([1,2,3,4,5,6,7])

let soyexplicito=queTipoSoy<number>(100);