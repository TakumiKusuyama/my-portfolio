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
    detail?: string;
    useSkill?: string[];
    technologies?: string[];
    links?: {
        label: string;
        url: string;
    }[];
}

export type MyItem = {
    age?: number;
    link?: {
        label: string;
        url: string;
    }
}