declare namespace tableau {
    class Viz {
      constructor(containerDiv: HTMLElement, url: string, options?: VizOptions);
      dispose(): void;
      refreshAsync(): Promise<void>;
    }
  
    interface VizOptions {
      width?: string;
      height?: string;
      hideTabs?: boolean;
      hideToolbar?: boolean;
    }
  }
  