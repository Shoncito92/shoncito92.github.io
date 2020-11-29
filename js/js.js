
    var enviado = "msgSend.html"
      
    function agradecer() {
        alert("Tu mensaje ha sido enviado, Muchas gracias")
    }
      
      
      //funcion eliminar filas
    function eliminarFila(){
        var table = document.getElementById("tbody");
        var rowCount = table.rows.length;
        //console.log(rowCount);
        
        if(rowCount < 1)
          alert('No se puede eliminar el encabezado');
        else
          table.deleteRow(0);
    }
      //funcion agregar filas
    function funcionAgregar() {
        var table = document.getElementById("tbody")
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = $("#pacienteValue").val();
        cell2.innerHTML = $("#previsionValue").val();
        cell3.innerHTML = $("#fechaDiagnosticoValue").val();
        cell4.innerHTML = $("#diagnosticoValue").val();
        cell5.innerHTML = $("#fechaDiagnosticoValue").val();
        cell6.innerHTML = $("#tratamientoValue").val();
    }

        //habilitar y desabilitar inputtext
    function funcionDesbloquear() {
            pacienteValue.disabled = false;
            previsionValue.disabled = false;
            fechaNacimiento.disabled = false;
            direccionValue.disabled = false;
            email.disabled = false;
    }
    function funcionBloquear() {
            pacienteValue.disabled = true;
            previsionValue.disabled = true;
            fechaNacimiento.disabled = true;
            direccionValue.disabled = true;
            email.disabled = true;
    }