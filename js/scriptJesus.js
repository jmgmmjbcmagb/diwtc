/* Funciones para ampliar la imagen al pasar por encima y volver a su estado 
normal al dejar de pasar */
$(linkFoto).mouseover(() => {
    $(linkFoto).addClass('animateFont');
}).mouseout(() => {
    $(linkFoto).removeClass('animateFont');
});
$(linkGaleria).mouseover(() => {
    $(linkGaleria).addClass('animateFont');
}).mouseout(() => {
    $(linkGaleria).removeClass('animateFont');
});
$(fotografo1).mouseover(() => {
    $(fotografo1).addClass('animateScale');
}).mouseout(() => {
    $(fotografo1).removeClass('animateScale');
});
$(fotografo2).mouseover(() => {
    $(fotografo2).addClass('animateScale');
}).mouseout(() => {
    $(fotografo2).removeClass('animateScale');
});
$(fotografo3).mouseover(() => {
    $(fotografo3).addClass('animateScale');
}).mouseout(() => {
    $(fotografo3).removeClass('animateScale');
});
$(fotografo4).mouseover(() => {
    $(fotografo4).addClass('animateScale');
}).mouseout(() => {
    $(fotografo4).removeClass('animateScale');
});