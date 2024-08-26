document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const modal = document.getElementById('definition-modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');
    const downloadBtn = document.getElementById('download-btn');

    const definitions = {
        'cpu': 'El cerebro del ordenador, encargado de ejecutar instrucciones y procesar datos.',
        'ram': 'Zócalos en la placa madre donde se instalan los módulos de memoria RAM, que proporcionan espacio para el almacenamiento temporal de datos y programas en uso.',
        'pci': 'Ranuras para tarjetas de expansión, como tarjetas gráficas, de sonido o de red. PCIe ofrece alta velocidad de transferencia de datos.',
        'sata': 'Puertos para conectar discos duros y unidades de estado sólido (SSD) al sistema, permitiendo la transferencia de datos entre estos dispositivos y la placa madre.',
        'bios': 'El firmware que se encarga de inicializar el hardware durante el arranque del sistema y proporciona una interfaz para la configuración del hardware.',
        'power': 'Puertos donde se conecta la fuente de alimentación del ordenador para suministrar energía a la placa madre y otros componentes.',
        'io': 'Puertos en la parte trasera de la placa madre que permiten la conexión de dispositivos externos como teclado, ratón, USB, y otros periféricos.',
        'm2': 'Ranura para conectar unidades SSD M.2, que ofrecen una velocidad de transferencia de datos más rápida que los SSD SATA.',
        'cmos': 'Chip que almacena la configuración del BIOS y la hora del sistema, incluso cuando el ordenador está apagado.',
        'vrm': 'Circuitos que regulan el voltaje suministrado a la CPU y otros componentes, asegurando un funcionamiento estable.'
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btnClass = button.classList[1];
            modalText.innerHTML = `<h3>${btnClass.toUpperCase()}</h3><p>${definitions[btnClass] || 'Definición no disponible.'}</p>`;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    downloadBtn.addEventListener('click', () => {
        html2canvas(modalText).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imgData;
            a.download = 'definicion.png';
            a.click();
        });
    });
});
