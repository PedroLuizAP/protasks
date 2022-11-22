export interface ITask {
    id: number;
    priority: Priority;
    title: string;
    description: string;
}

export enum Priority {
    Notdefinied = "Notdefinied",
    Low = "Low",
    Normal = "Normal",
    High = "High"
}