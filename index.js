const prevPDF = async (name) => {
    const { PDFDocument, rgb } = PDFLib;
    const exambytes = await fetch("./certi.pdf").then((res) => {
      return res.arrayBuffer();
    });
  
    const examfonts = await fetch("./WorkSans-VariableFont_wght.ttf").then((res) => {
        return res.arrayBuffer();
    })
    
    
    const pdfDocu = await PDFDocument.load(exambytes);
    pdfDocu.registerFontkit(fontkit);
    const merafont = await pdfDocu.embedFont(examfonts);
  
    const pages = pdfDocu.getPages();
    const pehlapg = pages[0];
    pehlapg.drawText(name,{
        x:250,
        y:300,
        size:50,
        font: merafont,
        color: rgb(0.88, 0.71, 0.34),
 
    })
     
    const uri = await pdfDocu.saveAsBase64({
        dataUri: true
    });

      document.querySelector("#merapdf").src = uri;
  
  };
// ------------------------------------------------------------
const genPDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;
  const exambytes = await fetch("./certi.pdf").then((res) => {
    return res.arrayBuffer();
  });

  const examfonts = await fetch("./WorkSans-VariableFont_wght.ttf").then((res) => {
      return res.arrayBuffer();
  })
  
  
  const pdfDocu = await PDFDocument.load(exambytes);
  pdfDocu.registerFontkit(fontkit);
  const merafont = await pdfDocu.embedFont(examfonts);

  const pages = pdfDocu.getPages();
  const pehlapg = pages[0];
  pehlapg.drawText(name,{
      x:250,
      y:300,
      size:50,
      font: merafont,
      color: rgb(0.88, 0.71, 0.34),

 
  })
   
  const uri = await pdfDocu.saveAsBase64({
      dataUri: true
  });

    saveAs(uri, "certi.pdf",{autoBom: true});

};
// --------------------------------------------------------------------

const submitbut= document.getElementById("submitbut")
const input = document.querySelector("#name");

submitbut.addEventListener("click",()=>{
    const val = input.value;
    genPDF(val);
    
})

const previewbut= document.getElementById("previewbut")
const inprev = document.querySelector("#name");

previewbut.addEventListener("click",()=>{
    const val = inprev.value;
    prevPDF(val);
    
})





