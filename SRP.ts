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

class ReportPrinter {
    public print(report: ReportGeneration): void {
        console.log(`The title of Report is ${report.title} and content is ${report.content}`);
    }
}

class ReportExporter {
    public exportToPDF(report: ReportGeneration): void {
        console.log(`The report with the title ${report.title} has been exported to PDF`);
    }
}

// Usage:

const report = new ReportGeneration("Monthly Sales", "Sales increased by 20% compared to last month.");
const printer = new ReportPrinter();
const exporter = new ReportExporter();

printer.print(report);
exporter.exportToPDF(report);