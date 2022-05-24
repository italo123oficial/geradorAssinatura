	function CopyToClipboard(id)
	{
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
    alert("Assinatura copiada para o clipboard, fazer o 'CTRL + V' no editor de assinatura do seu e-mail.\n"+document.getSelection());
    window.getSelection().removeAllRanges();  
	}

    $("#gerar_assinatura").click(function(event){
        CopyToClipboard('visualizacao');        
    });



    $("#sigla").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSigla").prop("innerHTML", e.target.value.toUpperCase());   
    });
    $("#setor1").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSetor1").prop("innerHTML", e.target.value);
    });
    $("#setor2").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSetor2").prop("innerHTML", e.target.value);
    });
    $("#setor3").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSetor3").prop("innerHTML", e.target.value);
    });
    
    $("#nome").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewNome").prop("innerHTML", e.target.value);
    });
    $("#cargo").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewCargo").prop("innerHTML", e.target.value);
    });
    $("#funcao").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewFuncao").prop("innerHTML", e.target.value);
    });
    $("#contato").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewContato").prop("innerHTML", e.target.value);
    });
