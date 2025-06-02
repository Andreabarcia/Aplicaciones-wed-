document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usuario = document.getElementById('usuario').value;
      const contrasena = document.getElementById('contrasena').value;
      const rol = document.getElementById('rol').value;

      // Usuarios predefinidos
      const usuarios = {
        estudiante: { user: 'estudiante', pass: '1234' },
        tutor: { user: 'tutor', pass: '1234' },
        admin: { user: 'admin', pass: '1234' }
      };

      if (usuarios[rol] && usuario === usuarios[rol].user && contrasena === usuarios[rol].pass) {
        if (rol === 'estudiante') {
          window.location.href = 'estudiante.html';
        } else if (rol === 'tutor') {
          window.location.href = 'tutor.html';
        } else if (rol === 'admin') {
          window.location.href = 'admin.html';
        }
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    });
  }
});