/// <reference types="next" />

// Type declarations for style files
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}

// Google Analytics types
interface Window {
  gtag: (
    command: "config" | "event" | "js" | "set",
    targetId: string,
    config?: Record<string, unknown>
  ) => void;
  dataLayer: Record<string, unknown>[];
}
