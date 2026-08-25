import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CustomerDetails, RequirementItem } from '../types';

export const OWNER_WHATSAPP_NUMBER = '919021561915';
export const OWNER_WHATSAPP_DISPLAY = '+91 9021561915';
export const OWNER_EMAIL = 'sales@atulchemicalsgroup.in';
export const OWNER_EMAIL_DISPLAY = 'sales@atulchemicalsgroup.in';

export interface QuotationData {
  referenceCode: string;
  customer: CustomerDetails;
  items: RequirementItem[];
  createdAt?: string;
}

/**
 * Creates and downloads a formal PDF quotation / bill.
 */
export const generateQuotationPDF = (data: QuotationData): jsPDF => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const { referenceCode, customer, items } = data;
  const dateStr = data.createdAt || new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Calculate financials
  const totalTaxable = items.reduce(
    (sum, item) => sum + (item.quantity || 1) * (item.product?.rate ?? item.rate ?? 0),
    0
  );
  const totalGst = totalTaxable * 0.18;
  const grandTotal = totalTaxable + totalGst;

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, 210, 38, 'F');

  // Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('ATUL CHEMICALS GROUP', 14, 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(153, 246, 228); // teal-200
  doc.text('19, Shivaji Nagar, Nashik | sales@atulchemicalsgroup.in', 14, 25);
  doc.text(`Direct Contact & WhatsApp: ${OWNER_WHATSAPP_DISPLAY} / +91 9922275337`, 14, 31);

  // Document Title Box
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('ESTIMATE / BILL', 196, 18, { align: 'right' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(203, 213, 225);
  doc.text(`Ref: ${referenceCode}`, 196, 25, { align: 'right' });
  doc.text(`Date: ${dateStr}`, 196, 31, { align: 'right' });

  // Bill To & Dispatch Details Box
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 44, 182, 34, 2, 2, 'FD');

  doc.setTextColor(51, 65, 85);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('CUSTOMER / BILL TO:', 18, 51);
  doc.text('DISPATCH & DESTINATION:', 110, 51);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);

  const clientName = customer.fullName || 'Valued Customer';
  const company = customer.companyName ? ` (${customer.companyName})` : '';
  doc.text(`${clientName}${company}`, 18, 57);
  doc.text(`Contact: ${customer.phone || 'N/A'}`, 18, 63);
  doc.text(`Email: ${customer.email || 'N/A'}`, 18, 69);
  if (customer.gstOrTaxId) {
    doc.text(`GSTIN: ${customer.gstOrTaxId}`, 18, 75);
  }

  const destination = [customer.city, customer.state].filter(Boolean).join(', ') || 'Standard Dispatch';
  doc.text(`Location: ${destination}`, 110, 57);
  if (customer.deliveryAddress) {
    const addressLines = doc.splitTextToSize(`Address: ${customer.deliveryAddress}`, 80);
    doc.text(addressLines, 110, 63);
  } else {
    doc.text('Address: Standard Plant Delivery', 110, 63);
  }

  // Items Table
  const tableRows = items.map((item, idx) => {
    const rate = item.product?.rate ?? item.rate ?? 0;
    const qty = item.quantity || 1;
    const lineTotal = qty * rate;
    const unit = item.unit || item.product?.unit || 'KGS';
    const packaging = item.selectedPackaging || 'Standard Pack';

    return [
      `#${item.product?.srNo || idx + 1}`,
      item.product?.name || 'Chemical Item',
      packaging,
      `${qty} ${unit}`,
      `Rs. ${rate.toLocaleString('en-IN')}`,
      `Rs. ${lineTotal.toLocaleString('en-IN')}`,
    ];
  });

  autoTable(doc, {
    startY: 82,
    head: [['Sr.', 'Chemical Product', 'Packaging Unit', 'Quantity', 'Rate / Unit', 'Amount (INR)']],
    body: tableRows,
    theme: 'grid',
    headStyles: {
      fillColor: [15, 23, 42],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8.5,
      halign: 'left',
    },
    bodyStyles: {
      fontSize: 8,
      textColor: [30, 41, 59],
    },
    columnStyles: {
      0: { cellWidth: 12, halign: 'center' },
      1: { cellWidth: 60, fontStyle: 'bold' },
      2: { cellWidth: 45 },
      3: { cellWidth: 22, halign: 'center' },
      4: { cellWidth: 22, halign: 'right' },
      5: { cellWidth: 21, halign: 'right', fontStyle: 'bold' },
    },
    margin: { left: 14, right: 14 },
  });

  // Calculate ending Y from autoTable
  // @ts-ignore
  const finalY = (doc as any).lastAutoTable?.finalY || 150;

  // Financial Summary Box
  const summaryBoxY = finalY + 6;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(120, summaryBoxY, 76, 32, 2, 2, 'FD');

  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Taxable Subtotal:', 124, summaryBoxY + 7);
  doc.text(`Rs. ${totalTaxable.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`, 192, summaryBoxY + 7, { align: 'right' });

  doc.text('Estimated GST (18%):', 124, summaryBoxY + 14);
  doc.text(`Rs. ${totalGst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`, 192, summaryBoxY + 14, { align: 'right' });

  doc.setDrawColor(203, 213, 225);
  doc.line(124, summaryBoxY + 18, 192, summaryBoxY + 18);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(13, 148, 136); // teal-600
  doc.text('Grand Total:', 124, summaryBoxY + 26);
  doc.text(`Rs. ${grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`, 192, summaryBoxY + 26, { align: 'right' });

  // Terms & Instructions
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Remarks / Terms:', 14, summaryBoxY + 7);
  doc.text('1. Rates quoted are subject to current stock availability and delivery location.', 14, summaryBoxY + 12);
  doc.text('2. All supplied materials adhere strictly to standard Certificate of Analysis (CoA) specifications.', 14, summaryBoxY + 17);
  doc.text(`3. Sent directly to Owner WhatsApp Desk: ${OWNER_WHATSAPP_DISPLAY}`, 14, summaryBoxY + 22);

  // Footer
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Generated via Atul Chemicals Group - Direct B2B Supply & Dispatch Desk', 105, 287, { align: 'center' });

  return doc;
};

/**
 * Builds formatted text and universal WhatsApp URL to owner 9021561915.
 */
export const buildOwnerWhatsAppMessage = (data: QuotationData): string => {
  const { referenceCode, customer, items } = data;

  const totalTaxable = items.reduce(
    (sum, item) => sum + (item.quantity || 1) * (item.product?.rate ?? item.rate ?? 0),
    0
  );
  const totalGst = totalTaxable * 0.18;
  const grandTotal = totalTaxable + totalGst;

  let msg = `*🧾 ATUL CHEMICALS GROUP - NEW REQUIREMENT & BILL*\n`;
  msg += `*Ref ID:* ${referenceCode}\n`;
  msg += `*Date:* ${new Date().toLocaleDateString('en-IN')}\n\n`;

  msg += `*👤 CUSTOMER DETAILS:*\n`;
  msg += `• *Name:* ${customer.fullName || 'Valued Customer'}\n`;
  if (customer.companyName) msg += `• *Company:* ${customer.companyName}\n`;
  msg += `• *Phone:* ${customer.phone || 'N/A'}\n`;
  if (customer.email) msg += `• *Email:* ${customer.email}\n`;
  if (customer.city) msg += `• *Plant/City:* ${customer.city}${customer.state ? `, ${customer.state}` : ''}\n`;
  if (customer.deliveryAddress) msg += `• *Address:* ${customer.deliveryAddress}\n`;
  if (customer.gstOrTaxId) msg += `• *GSTIN:* ${customer.gstOrTaxId}\n\n`;

  msg += `*📦 REQUESTED ITEMS (${items.length}):*\n`;
  items.forEach((item, index) => {
    const rate = item.product?.rate ?? item.rate ?? 0;
    const qty = item.quantity || 1;
    const unit = item.unit || item.product?.unit || 'KGS';
    const packaging = item.selectedPackaging || 'Standard';
    const lineTotal = qty * rate;

    msg += `${index + 1}. *${item.product?.name}* (Sr #${item.product?.srNo || index + 1})\n`;
    msg += `   Qty: ${qty} ${unit} | Pack: ${packaging}\n`;
    msg += `   Rate: ₹${rate.toLocaleString('en-IN')} | Total: ₹${lineTotal.toLocaleString('en-IN')}\n`;
    if (item.customNotes) {
      msg += `   Note: ${item.customNotes}\n`;
    }
  });

  msg += `\n*💰 COMMERCIAL BREAKDOWN:*\n`;
  msg += `• *Taxable Subtotal:* ₹${totalTaxable.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n`;
  msg += `• *Estimated GST (18%):* ₹${totalGst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n`;
  msg += `• *GRAND TOTAL:* ₹${grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n\n`;

  if (customer.additionalNotes) {
    msg += `*📝 Special Remarks:* ${customer.additionalNotes}\n\n`;
  }

  msg += `_Note: Formal Atul Chemicals Group PDF Bill receipt generated for Ref ${referenceCode}_`;

  return msg;
};

/**
 * Returns the direct WhatsApp link to send the bill to owner 9021561915
 */
export const getOwnerWhatsAppUrl = (data: QuotationData): string => {
  const message = buildOwnerWhatsAppMessage(data);
  return `https://api.whatsapp.com/send?phone=${OWNER_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
};

/**
 * Builds formatted subject for Email to owner.
 */
export const buildOwnerEmailSubject = (data: QuotationData): string => {
  const { referenceCode, customer } = data;
  const client = customer.fullName || 'Valued Client';
  const company = customer.companyName ? ` [${customer.companyName}]` : '';
  return `Atul Chemicals Group - New Order & Requirement Ref: ${referenceCode} - ${client}${company}`;
};

/**
 * Builds detailed text body for Email to owner.
 */
export const buildOwnerEmailBody = (data: QuotationData): string => {
  const { referenceCode, customer, items } = data;

  const totalTaxable = items.reduce(
    (sum, item) => sum + (item.quantity || 1) * (item.product?.rate ?? item.rate ?? 0),
    0
  );
  const totalGst = totalTaxable * 0.18;
  const grandTotal = totalTaxable + totalGst;

  let body = `Dear Atul Chemicals Group Sales Desk,\n\n`;
  body += `A new chemical requirement order / quotation request has been placed.\n`;
  body += `Please find the commercial details below:\n\n`;
  body += `========================================\n`;
  body += `ATUL CHEMICALS GROUP - ORDER / BILL DETAILS\n`;
  body += `========================================\n`;
  body += `• Reference ID: ${referenceCode}\n`;
  body += `• Date: ${new Date().toLocaleDateString('en-IN')}\n\n`;

  body += `CUSTOMER & ENTERPRISE INFORMATION:\n`;
  body += `• Full Name: ${customer.fullName || 'N/A'}\n`;
  if (customer.companyName) body += `• Company / Enterprise: ${customer.companyName}\n`;
  body += `• Contact Phone: ${customer.phone || 'N/A'}\n`;
  body += `• Contact Email: ${customer.email || 'N/A'}\n`;
  if (customer.city || customer.state) body += `• Plant / City: ${[customer.city, customer.state].filter(Boolean).join(', ')}\n`;
  if (customer.deliveryAddress) body += `• Delivery Address: ${customer.deliveryAddress}\n`;
  if (customer.gstOrTaxId) body += `• GSTIN / Tax ID: ${customer.gstOrTaxId}\n\n`;

  body += `REQUESTED CHEMICAL PRODUCTS (${items.length} Items):\n`;
  body += `--------------------------------------------------------\n`;
  items.forEach((item, index) => {
    const rate = item.product?.rate ?? item.rate ?? 0;
    const qty = item.quantity || 1;
    const unit = item.unit || item.product?.unit || 'KGS';
    const packaging = item.selectedPackaging || 'Standard Pack';
    const lineTotal = qty * rate;

    body += `${index + 1}. ${item.product?.name || 'Chemical'} (Sr #${item.product?.srNo || index + 1})\n`;
    body += `   Packaging: ${packaging}\n`;
    body += `   Quantity: ${qty} ${unit} @ Rs. ${rate.toLocaleString('en-IN')} / ${unit}\n`;
    body += `   Item Total: Rs. ${lineTotal.toLocaleString('en-IN')}\n`;
    if (item.customNotes) {
      body += `   Notes: ${item.customNotes}\n`;
    }
    body += `\n`;
  });

  body += `--------------------------------------------------------\n`;
  body += `COMMERCIAL SUMMARY:\n`;
  body += `• Taxable Amount: Rs. ${totalTaxable.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n`;
  body += `• Estimated GST (18%): Rs. ${totalGst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n`;
  body += `• GRAND TOTAL: Rs. ${grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}\n\n`;

  if (customer.additionalNotes) {
    body += `SPECIAL REMARKS / INSTRUCTIONS:\n`;
    body += `${customer.additionalNotes}\n\n`;
  }

  body += `(Note: An official PDF Bill has been generated with file name Atul_Chemicals_Group_Bill_${referenceCode}.pdf)\n\n`;
  body += `Warm regards,\n`;
  body += `${customer.fullName || 'Atul Chemicals Client'}\n`;
  body += `${customer.phone ? `Phone: ${customer.phone}\n` : ''}`;

  return body;
};

/**
 * Returns standard mailto: link for default email client.
 */
export const getOwnerMailtoUrl = (data: QuotationData): string => {
  const subject = buildOwnerEmailSubject(data);
  const body = buildOwnerEmailBody(data);
  return `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Returns Gmail web compose link for direct browser sending.
 */
export const getOwnerGmailWebUrl = (data: QuotationData): string => {
  const subject = buildOwnerEmailSubject(data);
  const body = buildOwnerEmailBody(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${OWNER_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Generates and downloads the PDF bill and opens owner WhatsApp link directly.
 */
export const sendBillAndPDFToOwner = (data: QuotationData) => {
  try {
    // 1. Generate & download PDF bill
    const doc = generateQuotationPDF(data);
    const sanitizedRef = data.referenceCode.replace(/[^a-zA-Z0-9_-]/g, '_');
    doc.save(`Atul_Chemicals_Group_Bill_${sanitizedRef}.pdf`);
  } catch (e) {
    console.error('Error generating PDF bill:', e);
  }

  // 2. Open WhatsApp directly to Owner
  const waUrl = getOwnerWhatsAppUrl(data);
  window.open(waUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Generates & downloads PDF bill and opens Email compose to Owner (sales@atulchemicalsgroup.in).
 */
export const sendBillAndEmailToOwner = (data: QuotationData, method: 'mailto' | 'gmail' = 'mailto') => {
  try {
    // 1. Generate & download PDF bill
    const doc = generateQuotationPDF(data);
    const sanitizedRef = data.referenceCode.replace(/[^a-zA-Z0-9_-]/g, '_');
    doc.save(`Atul_Chemicals_Group_Bill_${sanitizedRef}.pdf`);
  } catch (e) {
    console.error('Error generating PDF bill for email:', e);
  }

  // 2. Open Email client or Gmail web
  if (method === 'gmail') {
    const gmailUrl = getOwnerGmailWebUrl(data);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  } else {
    const mailtoUrl = getOwnerMailtoUrl(data);
    window.location.href = mailtoUrl;
  }
};

