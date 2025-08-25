interface RichTextProps {
    text: string
    components: Array<React.ComponentType<{ children: React.ReactNode }>>
}

const parseNewline = (text: string) => {
    const parts = text.split('\\n');
    const parsed = [];

    for (let i = 0; i < parts.length; i++) {
        if (parts[i]) {
            parsed.push(parts[i].trim());
        }
        if (i < parts.length - 1) {
            parsed.push(<br />);
        }
    }

    return parsed;
};

export const RichText: React.FC<RichTextProps> = ({ text, components }) => {
    const regex = /<(\d+)>(.*?)<\/\1>/g;
    const result = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            const beforeText = text.slice(lastIndex, match.index);
            result.push(parseNewline(beforeText));
        }

        const componentIndex = +match[1];
        const content = match[2];
        const Component = components[componentIndex];

        if (Component) {
            const componentText = content.includes('\\n') ? parseNewline(content) : content;

            result.push(
                <Component>
                    {componentText}
                </Component>
            );
        } else {
            result.push(...parseNewline(content));
        }

        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        result.push(text.slice(lastIndex));
    }

    return <>{result}</>;
};
