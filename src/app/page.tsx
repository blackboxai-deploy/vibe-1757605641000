"use client";

import { useState } from "react";
import Resume from "../components/Resume";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState("software-engineer");

  const templates = [
    { id: "software-engineer", name: "Software Engineer", icon: "💻" },
    { id: "project-manager", name: "Project Manager", icon: "📋" },
    { id: "marketing", name: "Marketing Professional", icon: "📈" },
    { id: "healthcare", name: "Healthcare Professional", icon: "🏥" },
    { id: "financial", name: "Financial Analyst", icon: "💰" },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Resume</title>
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
              <style>
                body { font-family: 'Inter', 'Roboto', sans-serif; margin: 0; padding: 20px; line-height: 1.6; }
                .resume-container { max-width: 8.5in; margin: 0 auto; }
                @media print {
                  body { margin: 0; padding: 0; }
                  .no-print { display: none !important; }
                }
              </style>
            </head>
            <body>
              ${element.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ATS-Optimized Resume Builder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a professional resume that passes Applicant Tracking Systems 
            and impresses hiring managers. Choose from industry-specific templates.
          </p>
        </div>

        {/* Template Selector */}
        <Card className="mb-8 no-print">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Choose Your Industry Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {templates.map((template) => (
                <Button
                  key={template.id}
                  variant={selectedTemplate === template.id ? "default" : "outline"}
                  className="flex flex-col items-center p-4 h-auto"
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <span className="text-2xl mb-2">{template.icon}</span>
                  <span className="text-sm text-center">{template.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8 no-print">
          <Button onClick={handlePrint} size="lg">
            🖨️ Print Resume
          </Button>
          <Button onClick={handleDownload} variant="outline" size="lg">
            ⬇️ Download as HTML
          </Button>
        </div>

        {/* Resume Display */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Resume template={selectedTemplate} />
        </div>

        {/* ATS Tips */}
        <Card className="mt-8 no-print">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">ATS Optimization Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-green-700 mb-2">✅ What This Resume Does Right:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Uses standard section headings</li>
                  <li>• Includes relevant keywords</li>
                  <li>• Clean, readable format</li>
                  <li>• Proper heading hierarchy</li>
                  <li>• Text-based contact information</li>
                  <li>• Consistent date formatting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-red-700 mb-2">❌ What to Avoid:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Complex graphics or images</li>
                  <li>• Unusual fonts or formatting</li>
                  <li>• Tables for layout</li>
                  <li>• Headers and footers</li>
                  <li>• Text in images</li>
                  <li>• Fancy design elements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}