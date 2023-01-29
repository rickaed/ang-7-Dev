import { Skill } from "./skill.model";

export class Developer {
    lastName!: string;
    firstName!: string;
    age!: number;
    gender!: "male" | "female";
    bio!: string;
    skill!: Skill[]
}