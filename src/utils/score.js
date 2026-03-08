exports.calcular = (data) => {

 let score = 100

 if (data.policia.includes("ANTECEDENTES")) {
  score -= 50
 }

 if (data.simit.multas > 0) {
  score -= data.simit.multas * 5
 }

 if (score < 0) {
  score = 0
 }

 return score

}
