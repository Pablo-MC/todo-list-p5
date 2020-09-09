// Agregar el contenido del input a la lista de tareas.
$("input[type='text']").keypress(function (event) {
   // El evento se dispara cuando se apreta la tecla Enter.
   if (event.key == "Enter") {  
      // Agregar el icono y el contenido del input a la lista de tareas.
      $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + $(this).val() + "</li>"); 
      // Eliminar el contenido del input
      $(this).val("");
      // Frenar la propagación de eventos padres.
      event.stopPropagation();
   }
});

// Tachar/Deshacer-Tachado al hacer click sobre una tarea.
$("ul").on("click", "li", function () { 
   $(this).toggleClass("completado");
});

// Eliminar una tarea al hacer click sobre el icono. 
$("ul").on("click", "span", function (event) { 
   $(this).parent().fadeOut(500, function () {
      $(this).remove();
   });
   event.stopPropagation();
});

// Mostrar/Ocultar el input al hacer click sobre el icono del Titulo Principal.
$("*.fa-file-text-o*").click(function () {
   $("input").slideToggle();
});