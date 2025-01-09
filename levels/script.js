

document.getElementById('link').addEventListener('mouseover', function() {
    this.textContent = '@#@%@#@';
});

document.getElementById('link').addEventListener('mouseout', function() {
    this.textContent = 'Próximo';
});

function verificarResposta1(event) {
    event.preventDefault();
    
    const respostaUsuario = document.getElementById('questao-1').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    const respostaCorreta = 'junho';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase1', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-2.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta0(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-0').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'teste';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase0', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-1.html";
                }, 2000);
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta2(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-2').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'van gogh';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase2', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-3.html";
                }, 2000);
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}

function verificarResposta3(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-3').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'a realidade e uma ilusao, o universo e um holograma, compre ouro, adeus';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase3', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-4.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta4(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-4').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = '80, 8, 148';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase4', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-5.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta5(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-5').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'nao desista';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase5', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-6.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta6(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-6').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'paradoxo';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase6', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-7.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta7(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-7').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'transformacao';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase7', 'completa');
                setTimeout(() => {
                    window.location.href = "fase-8.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}


function verificarResposta8(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-8').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'lago cocite';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fase8', 'completa');
                setTimeout(() => {
                    window.location.href = "pre-final.html";
                }, 2000); 
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}

function verificarRespostaFinal(event) {
    event.preventDefault();
    
     respostaUsuario = document.getElementById('questao-final').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
     respostaCorreta = 'liberdade';
    
    if (respostaUsuario === respostaCorreta) {
        sessionStorage.setItem('fasefinal', 'completa');
                setTimeout(() => {
                    window.location.href = "final-bom.html";
                }, 2000);
    } else {
        alert('Resposta incorreta, tente novamente!');
    }
}