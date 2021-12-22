if (!String.prototype.replaceAll) {

    String.prototype.replaceAll = function(busca, troca) {

        if (!(busca instanceof String ||
                typeof busca === "string")) {

            throw Error("o primeiro parâmetro deve ser uma string")
        }

        if (!(troca instanceof String ||
                typeof troca === "string")) {
            throw Error("o segundo parâmetro deve ser uma string")
        }

        return this.valueOf().split(busca).join(troca)
    }
}