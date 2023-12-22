async function printContent() {
  try {
    const response = await fetch('print.html');
    const text = await response.text();
    const tempElement = document.createElement('div');
    tempElement.innerHTML = text;
    const specificContent = tempElement.querySelector('#pr1').innerHTML;

    const printWindow = window.open('', '_blank');
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');

    printWindow.document.write('<html><head><title>Print</title></head><body>');
    for (let i = 0; i < stylesheets.length; i++) {
      const link = printWindow.document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylesheets[i].href;
      printWindow.document.head.appendChild(link);
    }

    // Applying inline styles for padding
    printWindow.document.write('<div style="padding: 20px;">' + specificContent + '</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    printWindow.print();
  } catch (error) {
    console.error('Error:', error);
  }
}

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

