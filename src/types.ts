export type SkillData = {
    subject: string;
    value: number;
};

export type Description = {
    [key: number]: string;
};

export type LevelBlockProps = {
    title: string;
    levels: Description;
};

export type WorkItem = {
    title: string;
    image: string;
    description: string;
    url: string;
}