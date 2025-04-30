/*
🏭🎨 Abstract Factory Pattern
    🎯 Purpose:
        To provide an interface for creating families of related or dependent objects without specifying their concrete classes.

    🧠 Real-World Analogy:
        Think of a furniture factory that produces two styles:
        Modern Furniture Set: ModernChair, ModernSofa
        Victorian Furniture Set: VictorianChair, VictorianSofa
        You don’t want to mix and match — when you're building a Victorian home, you want only Victorian furniture.

    An Abstract Factory helps ensure that all components in a product family are used together.

    ✅ Structure:
        AbstractFactory
        ├── createChair(): Chair
        └── createSofa(): Sofa

        ConcreteFactoryA (e.g., ModernFurnitureFactory)
        ├── createChair(): ModernChair
        └── createSofa(): ModernSofa

        ConcreteFactoryB (e.g., VictorianFurnitureFactory)
        ├── createChair(): VictorianChair
        └── createSofa(): VictorianSofa

        Client
        └── works with AbstractFactory and AbstractProducts

*/

interface PlayButton {
    render(): void;
}

interface ProgressBar {
    render(): void;
}

class DarkPlayButton implements PlayButton {
    render(): void {
        console.log('dark play button...');
    }
}

class LightPlayButton implements PlayButton {
    render(): void {
        console.log('light play button...');
    }
}

class DarkProgressBar implements ProgressBar {
    render(): void {
        console.log('Dark progress bar...');
    }
}

class LightProgressBar implements ProgressBar {
    render(): void {
        console.log('Light progress bar...');
    }
}

interface UIFactory {
    createPlayButton(): PlayButton;
    createProgressBar(): ProgressBar;
}

class DarkThemeFactory implements UIFactory {
    createPlayButton(): PlayButton {
        return new DarkPlayButton();
    }

    createProgressBar(): ProgressBar {
        return new DarkProgressBar();
    }
}

class LightThemeFactory implements UIFactory {
    createPlayButton(): PlayButton {
        return new LightPlayButton();
    }

    createProgressBar(): ProgressBar {
        return new LightProgressBar();
    }
}

class Application {
    private playButton: PlayButton;
    private progressBar: ProgressBar;

    constructor(factory: UIFactory) {
        this.playButton = factory.createPlayButton();
        this.progressBar = factory.createProgressBar();
    }

    renderUI(): void {
        this.playButton.render();
        this.progressBar.render();
    }
}

const darkThemeFactory = new DarkThemeFactory();
const darkApplication = new Application(darkThemeFactory);
darkApplication.renderUI();

const lightThemeFactory = new LightThemeFactory();
const lightApplication = new Application(lightThemeFactory);
lightApplication.renderUI();