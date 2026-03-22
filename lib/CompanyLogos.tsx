import Image from 'next/image';

const logoBase = 'w-11 h-11 rounded-xl shrink-0 relative overflow-hidden';

export function OpenAILogo() {
  return (
    <div className={`${logoBase} bg-[#10a37f]`}>
      <Image
        src="https://github.com/openai.png"
        alt="OpenAI"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function AnthropicLogo() {
  return (
    <div className={`${logoBase} bg-[#c07a4a]`}>
      <Image
        src="https://www.anthropic.com/favicon.ico"
        alt="Anthropic"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function GoogleDeepMindLogo() {
  return (
    <div className={`${logoBase} bg-[#4285f4]`}>
      <Image
        src="https://github.com/google.png"
        alt="Google DeepMind"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function MetaAILogo() {
  return (
    <div className={`${logoBase} bg-[#0866ff]`}>
      <Image
        src="https://github.com/meta.png"
        alt="Meta AI"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function MicrosoftLogo() {
  return (
    <div className={`${logoBase} bg-[#00a4ef]`}>
      <Image
        src="https://github.com/microsoft.png"
        alt="Microsoft"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function BaiduLogo() {
  return (
    <div className={`${logoBase} bg-[#2932e1]`}>
      <Image
        src="https://github.com/baidu.png"
        alt="Baidu"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function ByteDanceLogo() {
  return (
    <div className={`${logoBase} bg-[#ff3b5c]`}>
      <Image
        src="https://github.com/ByteDance.png"
        alt="ByteDance"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

export function MistralLogo() {
  return (
    <div className={`${logoBase} bg-[#ff7000]`}>
      <Image
        src="https://github.com/mistral-ai.png"
        alt="Mistral AI"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
