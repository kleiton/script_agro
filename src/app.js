const pdf2excel = require("pdf-to-excel");
const startPage = 200;
const endPage = 202;

try {
  const options = {
    onProcess: (e) => console.warn(`${e.numPage} / ${e.numPages}`),
    start: startPage,
    end: endPage,
  };

  pdf2excel.genXlsx(
    "dados/dicionario_dados.pdf",
    `dados/dicionario_dados_${startPage}_${endPage}..xlsx`,
    options
  );
} catch (err) {
  console.error(err);
}
