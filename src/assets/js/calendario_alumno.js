document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth',
    locale: 'es',
    firstDay: 1,
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: window.innerWidth < 768 ? '' : 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialDate: '2025-08-20',
    events: [
      { title: 'Examen Módulo 1', start: '2025-08-25', url: 'subir-evaluaciones.html', color: '#0d6efd' },
      { title: 'Pago colegiatura', start: '2025-09-01', color: '#ffc107' },
      { title: 'Vacaciones', start: '2025-12-20', end: '2026-01-06', display: 'background', color: '#198754' },
      { title: 'Festivo - Día de la Independencia', start: '2025-09-16', color: '#dc3545' }
    ],
    eventClick: function(info) {
      if (info.event.url) {
        info.jsEvent.preventDefault();
        window.open(info.event.url, "_blank");
      }
    }
  });

  calendar.render();

  // Cambiar vista al redimensionar
  window.addEventListener('resize', () => {
    calendar.changeView(window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth');
  });
});
