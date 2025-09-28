import React, { useState } from 'react';
import '../ComponentsCSS/DownloadInvoiceButton.css';

const DownloadInvoiceButton = ({ order, variant = 'primary' }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate API call to generate and download invoice
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a mock PDF download
      const invoiceContent = generateInvoiceContent(order);
      downloadPDF(invoiceContent, `invoice-${order.id}.pdf`);
      
    } catch (error) {
      console.error('Error downloading invoice:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const generateInvoiceContent = (order) => {
    // This would typically be replaced with actual PDF generation logic
    return `
      Invoice for Order #${order.id}
      Date: ${new Date(order.date).toLocaleDateString()}
      Total: $${order.total.toFixed(2)}
      ... more invoice details ...
    `;
  };

  const downloadPDF = (content, filename) => {
    // Mock PDF download - in real app, this would be an actual PDF blob
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className={`ecom-download-invoice-btn ecom-download-invoice-btn--${variant} ${
        isDownloading ? 'ecom-download-invoice-btn--loading' : ''
      }`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>
          <div className="ecom-download-invoice-btn__spinner"></div>
          Generating...
        </>
      ) : (
        <>
          <i className="fas fa-file-invoice-dollar"></i>
          Download Invoice
        </>
      )}
    </button>
  );
};

export default DownloadInvoiceButton;