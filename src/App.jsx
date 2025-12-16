import React, { useState } from 'react';

export default function TrafficChallanGenerator() {
  const [formData, setFormData] = useState({
    challanNo: '',
    date: new Date().toISOString().split('T')[0],
    district: '',
    policeStation: '',
    entries: [
      {
        serialNo: '1',
        name: '',
        despatchDate: '',
        despatchTime: '',
        arrivalDate: '',
        arrivalTime: '',
        description: '',
        amount: '',
        signature: '',
        remarks: ''
      }
    ]
  });

  const addEntry = () => {
    setFormData({
      ...formData,
      entries: [
        ...formData.entries,
        {
          serialNo: (formData.entries.length + 1).toString(),
          name: '',
          despatchDate: '',
          despatchTime: '',
          arrivalDate: '',
          arrivalTime: '',
          description: '',
          amount: '',
          signature: '',
          remarks: ''
        }
      ]
    });
  };

  const removeEntry = (index) => {
    const newEntries = formData.entries.filter((_, i) => i !== index);
    setFormData({ ...formData, entries: newEntries });
  };

  const updateEntry = (index, field, value) => {
    const newEntries = [...formData.entries];
    newEntries[index][field] = value;
    setFormData({ ...formData, entries: newEntries });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto">
        {/* Control Panel */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:hidden">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-yellow-800">Traffic Police Challan Generator</h1>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-1">Challan No.</label>
              <input
                type="text"
                value={formData.challanNo}
                onChange={(e) => setFormData({ ...formData, challanNo: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="5865"
              />
            </div>
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-1">District (जिला)</label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="GNCT"
              />
            </div>
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-1">Police Station (थाना)</label>
              <input
                type="text"
                value={formData.policeStation}
                onChange={(e) => setFormData({ ...formData, policeStation: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Geeta Colony"
              />
            </div>
          </div>
        </div>

        {/* Document */}
        <div className="bg-white shadow-lg print:shadow-none" style={{ fontFamily: 'Times New Roman, serif' }}>
          <div className="p-2">
            {/* Header */}
            <div className="pb-3 mb-2">
              <div className="text-right text-xs mb-2">ANNEXURE-I</div>
              <h2 className="text-center text-xl font-bold tracking-wide mb-4">ROAD CERTIFICATE</h2>
              <div className="flex justify-between items-start text-xs">
                <div className="text-left flex-1">
                  <div className="mb-1">जिला/District: <span className="font-semibold border-b border-black inline-block min-w-[150px]">{formData.district}</span></div>
                  <div>थाना/Police Station: <span className="font-semibold border-b border-black inline-block min-w-[150px]">{formData.policeStation}</span></div>
                </div>
                <div className="text-3xl font-bold border-black px-6 py-2 mx-8">
                  {formData.challanNo || '____'}
                </div>
                <div className="text-right flex-1 text-xl">
                  <div>रजि. सं./Regd. No. फा. IT</div>
                  <div className="mt-1 text-xl">जिला पुलिस/District Police</div>
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse border-2 border-black text-sm ">
              <thead>
                <tr>
                  <th className="border border-black p-1 align-top" style={{ width: '19%' }}>
                    <div className="font-bold text-sm">बंदियों के नाम तथा पिता का नाम एवं पता</div>
                    <div className="font-normal text-sm">(Name of prisoners with father's name and address)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '12%' }}>
                    <div className="font-bold text-sm">प्रेषण की तारीख तथा समय</div>
                    <div className="font-normal text-sm">(Date and time of despatch)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '12%' }}>
                    <div className="font-bold text-sm">गंतव्य स्थान तक पहुंचने की तारीख एवं समय</div>
                    <div className="font-normal text-sm">(Date and time of arrival at destination)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '19%' }}>
                    <div className="font-bold text-sm">साथ में भेजी गई रकम या अन्य सम्पत्ति का विवरण</div>
                    <div className="font-normal text-sm">(Description of money or other property sent with cash article)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '13%' }}>
                    <div className="font-bold text-sm">बंदियों तथा साक्षियों के भोजन पर व्यय की गई रकम</div>
                    <div className="font-normal text-sm">(Amount of Diet money expended on account of prisoner & witnesses)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '12%' }}>
                    <div className="font-bold text-sm">प्राप्तकर्ता अधिकारी के हस्ताक्षर</div>
                    <div className="font-normal text-sm">(Signature of Receiving Officer)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '11%' }}>
                    <div className="font-bold text-sm">विशेष कथन</div>
                    <div className="font-normal text-sm">(Remarks)</div>
                  </th>
                  <th className="border border-black p-1 print:hidden" style={{ width: '2%' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.entries.map((entry, index) => (
                  <tr key={index} style={{ minHeight: '40px' }}>
                    <td className="border border-black p-1 align-top">
                      <textarea
                        value={entry.name}
                        onChange={(e) => updateEntry(index, 'name', e.target.value)}
                        className="w-full p-1 text-sm resize-none print:border-0 print:p-0 print:bg-transparent"
                        placeholder="Name, Father's name, Address"
                        style={{ fontFamily: 'Times New Roman, serif', height: `${630 / formData.entries.length}px` }}
                      />
                    </td>
                    <td className="border border-black p-1 align-top">
                      <div className="flex flex-col gap-1">
                        <input
                          type="date"
                          value={entry.despatchDate}
                          onChange={(e) => updateEntry(index, 'despatchDate', e.target.value)}
                          className="w-full p-1 text-sm print:border-0 print:p-0 print:bg-transparent"
                        />
                        <input
                          type="time"
                          value={entry.despatchTime}
                          onChange={(e) => updateEntry(index, 'despatchTime', e.target.value)}
                          className="w-full p-1 text-sm print:border-0 print:p-0 print:bg-transparent"
                        />
                      </div>
                    </td>
                    <td className="border border-black p-1 align-top">
                      <div className="flex flex-col gap-1">
                        <input
                          type="date"
                          value={entry.arrivalDate}
                          onChange={(e) => updateEntry(index, 'arrivalDate', e.target.value)}
                          className="w-full p-1 text-sm print:border-0 print:p-0 print:bg-transparent"
                        />
                        <input
                          type="time"
                          value={entry.arrivalTime}
                          onChange={(e) => updateEntry(index, 'arrivalTime', e.target.value)}
                          className="w-full p-1 text-sm print:border-0 print:p-0 print:bg-transparent"
                        />
                      </div>
                    </td>
                    <td className="border border-black p-1 align-top">
                      <textarea
                        value={entry.description}
                        onChange={(e) => updateEntry(index, 'description', e.target.value)}
                        className="w-full p-1 text-sm resize-none print:border-0 print:p-0 print:bg-transparent"
                        placeholder="Description"
                        style={{ fontFamily: 'Times New Roman, serif', height: `${630 / formData.entries.length}px` }}
                      />
                    </td>
                    <td className="border border-black p-1 align-top">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold">₹</span>
                        <input
                          type="text"
                          value={entry.amount}
                          onChange={(e) => updateEntry(index, 'amount', e.target.value)}
                          className="flex-1 p-1 text-sm print:border-0 print:p-0 print:bg-transparent"
                          placeholder="0"
                        />
                      </div>
                    </td>
                    <td className="border border-black p-1 align-top">
                      <textarea
                        value={entry.signature}
                        onChange={(e) => updateEntry(index, 'signature', e.target.value)}
                        className="w-full p-1 text-sm resize-none print:border-0 print:p-0 print:bg-transparent"
                        placeholder="Signature"
                        style={{ fontFamily: 'Times New Roman, serif', height: `${630 / formData.entries.length}px` }}
                      />
                    </td>
                    <td className="border border-black p-1 align-top">
                      <textarea
                        value={entry.remarks}
                        onChange={(e) => updateEntry(index, 'remarks', e.target.value)}
                        className="w-full p-1 text-sm resize-none print:border-0 print:p-0 print:bg-transparent"
                        placeholder="Remarks"
                        style={{ fontFamily: 'Times New Roman, serif', height: `${630 / formData.entries.length}px` }}
                      />
                    </td>
                    <td className="border border-black p-1 text-center print:hidden">
                      {formData.entries.length > 1 && (
                        <button
                          onClick={() => removeEntry(index)}
                          className="text-red-600 hover:text-red-800"
                          title="Remove entry"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-start text-xs">
              <div className="flex-1">
                <div className="mb-3">स्थान/Place: ___________________________</div>
                <div>तारीख/Date: {formData.date}</div>
              </div>
              <div className="text-right flex-1">
                <div className="mb-1">प्रेषक अधिकारी के हस्ताक्षर एवं मुहर</div>
                <div className="text-[9px] italic">Signature of Officer in routing the</div>
                <div className="text-[9px] italic">Money or Property etc.</div>
                <div className="mt-12 border-t border-black pt-1 w-48 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Entry Button */}
        <div className="mt-6 print:hidden">
          <button
            onClick={addEntry}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Entry
          </button>
        </div>
      </div>

      <style>{`
        @media print {
          body { 
            margin: 0; 
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page { 
            margin: 0.5cm;
            size: A4 portrait;
          }
          .print\\:hidden { 
            display: none !important; 
          }
          input, textarea { 
            border: none !important; 
            background: transparent !important;
            outline: none !important;
          }
          input[type="date"],
          input[type="time"] {
            appearance: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
          }
          input[type="date"]::-webkit-calendar-picker-indicator,
          input[type="time"]::-webkit-calendar-picker-indicator {
            display: none !important;
          }
          /* Prevent page breaks */
          div[style*="fontFamily"] {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          table {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          tr {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          /* Reduce row height for printing */
          tr { min-height: 0 !important; }
          /* Reduce padding in table cells */
          td, th { 
            padding: 2px !important;
          }
          /* Adjust font sizes for printing */
          .text-sm { font-size: 10px !important; }
        }
      `}</style>
    </div>
  );
}