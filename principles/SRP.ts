// Single Responsibility Principle
// A class should have only one responsibility

/*
    Requirements:
        You have a Report that:
            Contains a title and a content.

    You need to:
        Create/generate a report (business logic)
        Print the report (display it nicely)
        Export the report to a PDF (simulate it — no real file needed)
    
    🎯 Task:
        Design classes so that:
            Report creation logic is separate
            Report printing logic is separate
            Report exporting logic is separate
        Apply Single Responsibility Principle:
            Each class should have only one reason to change.
*/

/*
    Polymorphism is a fundamental object-oriented programming (OOP) concept 
    that allows objects of different classes to be treated as objects of a 
    common type, enabling flexible and extensible systems.
    This means you can define a single interface and have multiple implementations, 
    allowing different classes to respond to the same method call in their own specific ways.
*/

class ReportGeneration {
    public title: string;
    public content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}

interface Exporter {
    export(report: ReportGeneration): void;
}

interface Printer {
    print(report: ReportGeneration): void;
}


class ReportPDFExporter implements Exporter {
    export(report: ReportGeneration): void {
        console.log(`Exporting to PDF: ${report.title}`);
    }
}

class ReportWordExporter implements Exporter {
    export(report: ReportGeneration): void {
        console.log(`Exporting to Word: ${report.title}`);
    }
}

class PlainTextPrinter implements Printer {
    print(report: ReportGeneration): void {
        console.log(`Plain Text Print: ${report.title} - ${report.content}`);
    }
}

class HTMLReportPrinter implements Printer {
    print(report: ReportGeneration): void {
        console.log(`<html><head><title>${report.title}</title></head><body>${report.content}</body></html>`);
    }
}


class ReportService {
    private printer: Printer;
    private exporter: Exporter;

    // Inject printer and exporter at runtime
    constructor(printer: Printer, exporter: Exporter) {
        this.printer = printer;
        this.exporter = exporter;
    }

    // Method to print the report
    printReport(report: ReportGeneration): void {
        this.printer.print(report);
    }

    // Method to export the report
    exportReport(report: ReportGeneration): void {
        this.exporter.export(report);
    }
}


// Usage:

const report = new ReportGeneration("Monthly Sales", "Sales increased by 20% compared to last month.");

// Create the concrete printer and exporter
const htmlPrinter = new HTMLReportPrinter();
const pdfExporter = new ReportPDFExporter();

// Inject dependencies and use the system
const reportService = new ReportService(htmlPrinter, pdfExporter);

reportService.printReport(report);  // Prints in HTML format
reportService.exportReport(report);  // Exports to PDF

// Later, you can swap to different classes without modifying ReportService:
const wordExporter = new ReportWordExporter();

const reportService1 = new ReportService(htmlPrinter, wordExporter);
reportService1.exportReport(report);  // Exports to Word now