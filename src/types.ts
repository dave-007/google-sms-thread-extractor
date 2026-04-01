export interface SmsMessage {
  readonly sender: string;
  readonly text: string;
  readonly timestamp: string;
  readonly attachments: readonly Attachment[];
}

export interface Attachment {
  readonly type: "image" | "video" | "audio" | "file";
  readonly filename: string;
  readonly localPath: string;
}

export interface SmsThread {
  readonly contactName: string;
  readonly messages: readonly SmsMessage[];
  readonly exportedAt: string;
}

export interface ExtractionConfig {
  readonly outputDir: string;
  readonly format: "json" | "text" | "both";
  readonly includeAttachments: boolean;
}
