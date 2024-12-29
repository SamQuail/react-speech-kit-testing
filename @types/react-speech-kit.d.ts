declare module 'react-speech-kit' {
    interface SpeakOptions {
      text: string;
      voice?: SpeechSynthesisVoice;
      rate?: number;
      pitch?: number;
    }
  
    interface UseSpeechSynthesisReturn {
      speak: (options: SpeakOptions) => void;
      cancel: () => void;
      speaking: boolean;
      supported: boolean;
      voices: SpeechSynthesisVoice[];
    }

    interface UseSpeechSynthesisOptions {
      onEnd?: () => void;
    }

    interface ListenOptions {
      interimResults: boolean;
      lang: string;
    }

    interface UseSpeechRecognitionReturn {
      listen: (options: ListenOptions) => void;
      stop: () => void;
      listening: boolean;
      supported: boolean;

    }

    interface UseSpeechRecognitionOptions {
      onEnd?: () => void;
      onResult?: (result: SpeechRecognitionResult) => void;
    }


  
    export function useSpeechSynthesis(options?: UseSpeechSynthesisOptions): UseSpeechSynthesisReturn;
    export function useSpeechRecognition(options?: UseSpeechRecognitionOptions): UseSpeechRecognitionReturn;
  }